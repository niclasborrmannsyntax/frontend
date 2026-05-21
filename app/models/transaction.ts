export type transactionType = "withdraw" | "deposit" | "transfer";

export interface Transaction {
  id?: number; // PK
  type: transactionType;
  amount: number;
  senderId: string; // FK
  receiverId?: string; // FK
  createdAt: Date; // ISO date string
}
