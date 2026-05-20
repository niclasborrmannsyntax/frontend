export type transactionType = "withdraw" | "deposit" | "transfer";

export interface Transaction {
  id: string; // PK
  type: transactionType;
  amount: number;
  senderId: string; // FK
  recieverId?: string; // FK
  timestamp: string; // ISO date string
}
