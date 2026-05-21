import { Transaction } from "@/app/models/transaction";
import { BankingDetails } from "../../models/user";

export interface AccountRepository {
  createBankingDetails(userId: string): Promise<BankingDetails>;
  getBankingDetails(userId: string): Promise<BankingDetails | null>;
  editAccountBalance(
    userId: string,
    amount: number,
    withdraw: boolean,
  ): Promise<BankingDetails>;

  createTransaction(transaction: Transaction): Promise<Transaction>;
  getTransactions(userId: string): Promise<Transaction[]>;
}
