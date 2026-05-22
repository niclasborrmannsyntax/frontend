import { cookies } from "next/headers";
import { quickSendOptions } from "../content";
import { getAccountRepository, getAuthRepository } from "../repositories";
import BalanceCard from "./components/BalanceCard";
import DashboardTopBar from "./components/DashboardTopBar";
import QuickSendCard from "./components/QuickSendCard";
import Sidebar from "./components/Sidebar";
import TransactionsList from "./components/TransactionsList";
import VerificationBanner from "./components/VerificationBanner";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const accountRepo = getAccountRepository();
  const authRepo = await getAuthRepository();

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const currentUser = await supabase.auth.getUser();
  if (!currentUser.data.user) {
    redirect("/auth");
  }
  const supabaseAuthId = currentUser.data.user.id;

  const user = await authRepo.getCurrentUser(supabaseAuthId);
  if (!user) {
    redirect("/auth");
  }

  const userId = user.id;
  const bankingDetails = await accountRepo.getBankingDetails(userId);
  const transactions = await accountRepo.getTransactions(userId);
  const balance = bankingDetails?.balance ?? 0;

  return (
    <div className="flex min-h-screen bg-[#f7fafd]">
      <Sidebar />
      <main className="flex-1 p-10">
        <DashboardTopBar userName={user.name} userId={userId} />
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <BalanceCard balance={balance} />
          <VerificationBanner />
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#1a2b3c]">Quick Send</h3>
            </div>
            <div className="flex gap-4">
              {quickSendOptions.map((option) => (
                <QuickSendCard key={option.title} {...option} />
              ))}
            </div>
          </div>
          <TransactionsList transactions={transactions} user={user} />
        </div>
      </main>
    </div>
  );
}
