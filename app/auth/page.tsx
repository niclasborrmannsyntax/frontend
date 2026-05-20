"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../components/shared/CustomButton";
import CustomTextField from "../components/shared/CustomTextField";
import { getAuthRepository } from "../repositories";

type AuthMode = "login" | "register";

export default function AuthPage() {
  const router = useRouter();
  const repo = getAuthRepository();

  const [mode, setMode] = useState<AuthMode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMessage("");
    if (mode === "login") {
      const user = await repo.login({ email, password });
      if (user) router.push("/dashboard");
      else setMessage("Invalid email or password");
    } else {
      const user = await repo.register({ name, email, password });
      if (user) router.push("/dashboard");
      else
        setMessage(
          "Something went wrong during registration. Please try again with a different email.",
        );
    }
  };

  return (
    <main className="min-h-screen bg-background-light px-4 py-16 text-text-dark md:px-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
        <section className="flex flex-col justify-between gap-8 bg-background-dark px-8 py-10 text-text-light md:px-10 md:py-12">
          <div className="space-y-4">
            <p className="inline-flex rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text-dark">
              SecureSend Access
            </p>
            <h2>Welcome back to your payment cockpit</h2>
            <p>
              Access your global payouts, monitor transfers, and manage your
              secure transactions in one place.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-white/90">
            Demo login: demo@securesend.app / password123
          </div>
        </section>

        <section className="flex flex-col justify-center px-6 py-10 md:px-10 md:py-12">
          <div className="mb-8 flex rounded-full bg-background-light p-1">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setMessage("");
              }}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                mode === "login"
                  ? "bg-primary text-text-dark"
                  : "text-text-dark/70 hover:text-text-dark"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("register");
                setMessage("");
              }}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                mode === "register"
                  ? "bg-primary text-text-dark"
                  : "text-text-dark/70 hover:text-text-dark"
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <CustomTextField
                id="name"
                label="Full Name"
                value={name}
                onChange={setName}
                placeholder="Jane Doe"
                required
                autoComplete="name"
              />
            )}

            <CustomTextField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@company.com"
              required
              autoComplete="email"
            />

            <CustomTextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              required
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
            />

            {message && (
              <p className="rounded-xl bg-background-light px-4 py-3 text-sm text-text-dark">
                {message}
              </p>
            )}

            <CustomButton
              fullWidth
              text={mode === "login" ? "Login to SecureSend" : "Create Account"}
              onClick={() => undefined}
            />
          </form>
        </section>
      </div>
    </main>
  );
}
