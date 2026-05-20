import { Transaction } from "./transaction";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface BankingDetails {
  id: string; // PK
  userId: string; // FK
  balance: number;
  transactions: Transaction[];
}
