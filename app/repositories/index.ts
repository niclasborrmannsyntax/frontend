import "server-only";

import { AccountRepository } from "./account/account-repository";
import { AuthRepository } from "./auth/auth-repository";
import { AccountRepositoryImpl } from "./account/account-repository-impl";
import { AccountRepositoryMock } from "./account/account-repository-mock";
import { AuthRepositoryImpl } from "./auth/auth-repository-impl";

export function getAccountRepository(): AccountRepository {
  return new AccountRepositoryImpl();
  // return new AccountRepositoryMock();
}

export async function getAuthRepository(): Promise<AuthRepository> {
  return new AuthRepositoryImpl();
}
