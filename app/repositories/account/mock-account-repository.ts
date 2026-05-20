import { Transaction } from "../../models/transaction";
import { BankingDetails } from "../../models/user";
import { AccountRepository } from "./account-repository";

const transactions: Transaction[] = [
  {
    id: "txn-1",
    type: "deposit",
    senderId: "user-123",
    amount: 250,
    timestamp: new Date("2024-06-01T10:00:00Z").toISOString(),
  },
  {
    id: "txn-2",
    type: "transfer",
    senderId: "user-123",
    recieverId: "user-456",
    amount: 200,
    timestamp: new Date("2024-06-01T10:00:00Z").toISOString(),
  },
  {
    id: "txn-3",
    type: "withdraw",
    senderId: "user-123",
    amount: 50,
    timestamp: new Date("2024-06-01T10:00:00Z").toISOString(),
  },
];

export class MockAccountRepository implements AccountRepository {
  getBankingDetailsByUserId(userId: string): Promise<BankingDetails | null> {
    return Promise.resolve({
      id: "banking-details-1",
      userId: userId,
      balance: 1000,
      transactions: transactions,
    });
  }
}
