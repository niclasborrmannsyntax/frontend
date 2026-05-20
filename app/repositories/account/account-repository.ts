import { Transaction } from "@/app/models/transaction";
import { BankingDetails } from "../../models/user";

export interface AccountRepository {
  getTransactionsByUserId(userId: string): Promise<Transaction[]>;
  getBankingDetailsByUserId(userId: string): Promise<BankingDetails | null>;
}
