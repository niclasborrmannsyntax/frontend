import "server-only";

import { AccountRepository } from "./account/account-repository";
import { MockAccountRepository } from "./account/mock-account-repository";
import { AuthRepository } from "./auth/auth-repository";
import { PrismaAccountRepository } from "./account/prisma-account-repository";

export function getAccountRepository(): AccountRepository {
  //   return new AccountRepositoryImpl();
  return new PrismaAccountRepository();
  // return new MockAccountRepository();
}

export async function getAuthRepository(): Promise<AuthRepository> {
  const { PrismaAuthRepository } =
    await import("./auth/prisma-auth-repository");
  return new PrismaAuthRepository();
}
