import { quickSendOptions } from "../content";
import { getAccountRepository, getAuthRepository } from "../repositories";
import { demoUser } from "../repositories/auth/mock-auth-repository";
import BalanceCard from "./components/BalanceCard";
import DashboardTopBar from "./components/DashboardTopBar";
import QuickSendCard from "./components/QuickSendCard";
import Sidebar from "./components/Sidebar";
import TransactionsList from "./components/TransactionsList";
import VerificationBanner from "./components/VerificationBanner";

interface DashboardPageProps {
  searchParams: Promise<{
    userId?: string | string[];
  }>;
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const resolvedSearchParams = await searchParams;
  const rawUserId = resolvedSearchParams?.userId;
  const userId = Array.isArray(rawUserId) ? rawUserId[0] : rawUserId;

  if (!userId) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7fafd]">
        <p className="text-xl text-[#1a2b3c]">No user ID provided.</p>
      </div>
    );
  }

  const accountRepo = getAccountRepository();
  const authRepo = await getAuthRepository();
  const user = (await authRepo.getCurrentUser(userId)) ?? demoUser;
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
          <TransactionsList transactions={transactions} user={demoUser} />
        </div>
      </main>
    </div>
  );
}
