"use server";

import { revalidatePath } from "next/cache";
import { Transaction } from "../models/transaction";
import { getAccountRepository } from "../repositories";

type TransferType = "deposit" | "withdraw";

export async function sendMoney(
  userId: string,
  transactionType: TransferType,
  amount: number,
) {
  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Please enter a valid amount greater than 0.");
  }

  const accountRepo = getAccountRepository();

  const newTransaction: Transaction = {
    senderId: userId,
    amount,
    type: transactionType,
    createdAt: new Date(),
  };

  const createdTransaction =
    await accountRepo.createTransaction(newTransaction);
  await accountRepo.editAccountBalance(
    userId,
    amount,
    transactionType === "withdraw",
  );
  revalidatePath("/dashboard");

  return createdTransaction;
}
