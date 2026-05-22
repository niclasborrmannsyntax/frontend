"use server";

import { cookies } from "next/headers";
import { getAccountRepository, getAuthRepository } from "../repositories";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

export type AuthActionResult =
  | { ok: true; userId: string }
  | {
      ok: false;
      error:
        | "missing_fields"
        | "invalid_credentials"
        | "email_taken"
        | "signup_failed";
    };

function asNonEmptyString(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function loginAction(
  formData: FormData,
): Promise<AuthActionResult> {
  try {
    const email = asNonEmptyString(formData.get("email"));
    const password = asNonEmptyString(formData.get("password"));

    if (!email || !password) {
      return { ok: false, error: "missing_fields" };
    }

    const authRepository = await getAuthRepository();
    const user = await authRepository.login({ email, password });

    if (!user) {
      return { ok: false, error: "invalid_credentials" };
    }

    return { ok: true, userId: user.id };
  } catch (error) {
    console.error("Login error:", error);
    return { ok: false, error: "invalid_credentials" };
  }
}

export async function signupAction(
  formData: FormData,
): Promise<AuthActionResult> {
  const name = asNonEmptyString(formData.get("name"));
  const email = asNonEmptyString(formData.get("email"));
  const password = asNonEmptyString(formData.get("password"));

  if (!email || !password) {
    return { ok: false, error: "missing_fields" };
  }

  const authRepository = await getAuthRepository();
  const accountRepository = getAccountRepository();

  try {
    const user = await authRepository.register({
      name: name || "New",
      email,
      password,
    });
    if (!user) {
      return { ok: false, error: "signup_failed" };
    }

    await accountRepository.createBankingDetails(user.id);
    return { ok: true, userId: user.id };
  } catch (error) {
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return { ok: false, error: "email_taken" };
    }

    console.error("Signup error:", error);
    return { ok: false, error: "signup_failed" };
  }
}

export async function signOutAction(): Promise<void> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
  redirect("/auth");
}
