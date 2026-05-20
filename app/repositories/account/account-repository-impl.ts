import { Transaction } from "../../models/transaction";
import { BankingDetails, User } from "../../models/user";
import { AccountRepository } from "./account-repository";

export class AccountRepositoryImpl implements AccountRepository {
  getBankingDetailsByUserId(userId: string): Promise<BankingDetails | null> {
    throw new Error("Method not implemented.");
  }
  getTransactionsByUserId(userId: string): Promise<Transaction[]> {
    throw new Error("Method not implemented.");
  }
}
