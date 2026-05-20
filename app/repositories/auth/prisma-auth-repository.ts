import { User } from "@/app/models/user";
import { AuthRepository, LoginInput, RegisterInput } from "./auth-repository";
import { prisma } from "@/app/lib/prisma";

export class PrismaAuthRepository implements AuthRepository {
  async login(input: LoginInput): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { email: input.email },
        select: {
          id: true,
          email: true,
          name: true,
          avatarUrl: true,
        },
      });
      if (!user) {
        return null;
      }
      return user;
    } catch (e) {
      console.error("Login error:", e);
      return null;
    }
  }

  async register(input: RegisterInput): Promise<User | null> {
    const user = await prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
        password: input.password, // In a real app, hash the password before storing
        avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(input.name)}&background=random`,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
      },
    });
    if (!user) {
      return null;
    }
    return user;
  }

  getCurrentUser(): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
}
