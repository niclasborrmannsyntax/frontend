import { prisma } from "@/app/lib/prisma";
import { Transaction } from "../../models/transaction";
import { BankingDetails, User } from "../../models/user";
import { AccountRepository } from "./account-repository";

export class PrismaAccountRepository implements AccountRepository {
  editAccountBalance(
    userId: string,
    amount: number,
    withdraw: boolean,
  ): Promise<BankingDetails> {
    return prisma.bankingDetails.update({
      where: { userId: userId },
      data: {
        balance: {
          increment: withdraw ? -amount : amount,
        },
      },
    });
  }
  async createBankingDetails(userId: string): Promise<BankingDetails> {
    try {
      const bankingDetails = await prisma.bankingDetails.upsert({
        where: { userId: userId },
        update: {},
        create: {
          userId: userId,
          balance: 0,
        },
      });
      return bankingDetails;
    } catch (error) {
      throw new Error(`Failed to create banking details: ${error}`);
    }
  }

  async getBankingDetails(userId: string): Promise<BankingDetails | null> {
    try {
      const bankingDetails = await prisma.bankingDetails.findUnique({
        where: { userId: userId },
      });
      return bankingDetails;
    } catch (error) {
      throw new Error(`Failed to get banking details: ${error}`);
    }
  }

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    try {
      const createdTransaction = await prisma.transaction.create({
        data: {
          senderId: transaction.senderId,
          receiverId: transaction.receiverId,
          amount: transaction.amount,
          type: transaction.type,
          createdAt: transaction.createdAt,
        },
        select: {
          id: true,
          senderId: true,
          receiverId: true,
          amount: true,
          type: true,
          createdAt: true,
        },
      });
      return createdTransaction as Transaction;
    } catch (error) {
      throw new Error(`Failed to create transaction: ${error}`);
    }
  }

  async getTransactions(userId: string): Promise<Transaction[]> {
    try {
      const transactions = await prisma.transaction.findMany({
        where: {
          OR: [{ senderId: userId }, { receiverId: userId }],
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return transactions as Transaction[];
    } catch (error) {
      throw new Error(`Failed to get transactions: ${error}`);
    }
  }
}
