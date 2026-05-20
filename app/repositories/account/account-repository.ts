import { BankingDetails } from "../../models/user";

export interface AccountRepository {
  getBankingDetailsByUserId(userId: string): Promise<BankingDetails | null>;
}
