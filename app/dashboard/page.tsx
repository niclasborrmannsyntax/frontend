import { quickSendOptions } from "../content";
import { getAccountRepository } from "../repositories";
import { demoUser } from "../repositories/auth/mock-auth-repository";
import BalanceCard from "./components/BalanceCard";
import DashboardTopBar from "./components/DashboardTopBar";
import QuickSendCard from "./components/QuickSendCard";
import Sidebar from "./components/Sidebar";
import TransactionsList from "./components/TransactionsList";
import VerificationBanner from "./components/VerificationBanner";

export default async function DashboardPage() {
  const accountRepo = getAccountRepository();
  const user = demoUser;
  const bankingDetails = user
    ? await accountRepo.getBankingDetailsByUserId(user.id)
    : null;
  const transactions = user
    ? await accountRepo.getTransactionsByUserId(user.id)
    : [];
  const balance = bankingDetails?.balance || 0;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <p className="text-lg text-gray-700">
          User not found in mock repository.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f7fafd]">
      <Sidebar />
      <main className="flex-1 p-10">
        <DashboardTopBar />
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <BalanceCard />
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
