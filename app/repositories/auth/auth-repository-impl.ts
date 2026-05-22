import { User } from "@/app/models/user";
import { AuthRepository, LoginInput, RegisterInput } from "./auth-repository";
import { prisma } from "@/app/lib/prisma";
import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";

export class AuthRepositoryImpl implements AuthRepository {
  async login(input: LoginInput): Promise<User | null> {
    const { email, password } = input;
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error || !data.user) {
      console.error("Login error:", error);
      return null;
    }

    const user = await prisma.user.findUnique({
      where: { supabaseAuthId: data.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
      },
    });

    return user;
  }

  async register(input: RegisterInput): Promise<User | null> {
    const { name, email, password } = input;
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error || !data.user) {
      console.error("Signup error:", error);
      return null;
    }

    try {
      const user = await prisma.user.create({
        data: {
          supabaseAuthId: data.user.id,
          name,
          email,
          avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
        },
        select: {
          id: true,
          name: true,
          email: true,
          avatarUrl: true,
        },
      });

      return user as User;
    } catch (insertError) {
      console.error("Error inserting user data:", insertError);
      return null;
    }
  }

  async getCurrentUser(supabaseAuthId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { supabaseAuthId },
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
}
