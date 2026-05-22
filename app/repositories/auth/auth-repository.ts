import { User } from "../../models/user";

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface AuthRepository {
  login(input: LoginInput): Promise<User | null>;
  register(input: RegisterInput): Promise<User | null>;
  getCurrentUser(supabaseAuthId: string): Promise<User | null>;
}
