import { AccountRepository } from "./account/account-repository";
import { MockAccountRepository } from "./account/mock-account-repository";
import { AuthRepository } from "./auth/auth-repository";
import { MockAuthRepository } from "./auth/mock-auth-repository";

export function getAccountRepository(): AccountRepository {
  //   return new AccountRepositoryImpl();
  return new MockAccountRepository();
}

export function getAuthRepository(): AuthRepository {
  //   return new AuthRepositoryImpl();
  return new MockAuthRepository();
}
