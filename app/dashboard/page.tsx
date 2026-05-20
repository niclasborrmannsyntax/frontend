import { transactionType } from "../models/transaction";
import { getAccountRepository, getAuthRepository } from "../repositories";
import { demoUser } from "../repositories/auth/mock-auth-repository";

interface TransactionUiData {
  emoji: string;
  sign: string;
}

export default async function DashboardPage() {
  const accountRepo = getAccountRepository();
  // const userRepo = getAuthRepository();
  const user = demoUser;
  const bankingDetails = user
    ? await accountRepo.getBankingDetailsByUserId(user.id)
    : null;
  const transactions = user
    ? await accountRepo.getTransactionsByUserId(user.id)
    : [];
  const balance = bankingDetails?.balance || 0;

  const generateTransactionEmoji = (
    type: transactionType,
    senderId: string,
  ): TransactionUiData => {
    if (type === "withdraw") return { emoji: "⬇️", sign: "-" };
    if (type === "deposit") return { emoji: "⬆️", sign: "+" };
    if (type === "transfer") {
      return senderId === user?.id
        ? { emoji: "⬇️", sign: "-" }
        : { emoji: "⬆️", sign: "+" };
    }
    return { emoji: "", sign: "" };
  };

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
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col p-6 min-h-screen">
        <div className="flex items-center mb-8">
          <span className="text-2xl font-bold text-[#1a2b3c] flex items-center gap-2">
            <span className="inline-block w-7 h-7 bg-lime-400 rounded-full"></span>
            SecureSend
          </span>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="mb-4 px-4 py-2 rounded-lg border bg-[#f7fafd] text-sm focus:outline-none"
        />
        <nav className="flex-1">
          <ul className="space-y-1">
            <li className="bg-lime-100 rounded-lg">
              <a
                href="#"
                className="flex items-center px-4 py-2 font-medium text-[#1a2b3c]"
              >
                <span className="mr-3">🏠</span> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600">
                <span className="mr-3">💳</span> Transactions
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600">
                <span className="mr-3">💸</span> Payments
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600">
                <span className="mr-3">📂</span> Subaccounts
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600">
                <span className="mr-3">💰</span> Save-as-you-earn
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600">
                <span className="mr-3">📈</span> Invest
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-600">
                <span className="mr-3">🎁</span> Refer & earn
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <a href="#" className="flex items-center px-4 py-2 text-gray-500">
            <span className="mr-3">🛟</span> Support
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-500">
            <span className="mr-3">⚙️</span> Settings
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#1a2b3c]">Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs">
              <span className="text-gray-400">Test</span>
              <span className="inline-block w-4 h-4 bg-lime-400 rounded-full"></span>
              <span className="text-gray-700 font-medium">Live</span>
            </div>
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1 right-1 bg-lime-400 text-xs rounded-full px-1">
                4
              </span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="text-xl">👤</span>
            </button>
            <button className="ml-4 px-6 py-2 bg-lime-400 text-white font-semibold rounded-lg shadow hover:bg-lime-500 transition">
              Send money
            </button>
          </div>
        </div>

        {/* Balance and Verification Row */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Balance Card */}
          <div className="flex-1 bg-[#10141a] rounded-2xl p-8 text-white relative min-w-[320px]">
            <div className="text-sm mb-2 text-gray-300">Available Balance</div>
            <div className="text-4xl font-bold tracking-tight">
              ${balance.toLocaleString()}
            </div>
            <div className="text-gray-400 mt-2 text-sm">
              Payout Balance:{" "}
              <span className="text-lime-400">${balance.toLocaleString()}</span>{" "}
              <span className="inline-block align-middle ml-1">🛈</span>
            </div>
            <button className="absolute top-6 right-6 text-gray-400 hover:text-white">
              <span className="text-2xl">🙈</span>
            </button>
          </div>
          {/* Verification Banner */}
          <div className="flex-1 bg-[#eaf6fb] rounded-2xl p-6 flex items-center gap-6 min-w-[320px]">
            <div>
              <div className="font-semibold text-lg text-[#1a2b3c] mb-1">
                Update your SecureSend Information
              </div>
              <div className="text-gray-600 text-sm mb-2">
                Please update/verify your information before{" "}
                <span className="font-medium text-[#1a2b3c]">
                  13th July 2023
                </span>{" "}
                to unlock level benefits
              </div>
              <button className="mt-2 font-semibold text-[#1a2b3c] flex items-center gap-1">
                Complete Verification <span>→</span>
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <span className="inline-block w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center">
                <span className="text-5xl text-lime-400">✅</span>
              </span>
            </div>
          </div>
        </div>

        {/* Quick Send & Recent Transactions Row */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Quick Send */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#1a2b3c]">Quick Send</h3>
            </div>
            <div className="flex gap-4">
              {/* Quick Send Cards */}
              <div className="bg-white rounded-xl p-5 shadow flex-1 min-w-[220px]">
                <div className="flex items-center mb-2">
                  <span className="inline-block w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-2">
                    ⚡️
                  </span>
                  <span className="font-medium">
                    United Capital Money Market Fund
                  </span>
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  United Capital Money Market Fund
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Annual Returns</span>
                  <span className="text-green-500 font-semibold">9.12%</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow flex-1 min-w-[220px]">
                <div className="flex items-center mb-2">
                  <span className="inline-block w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                    🪢
                  </span>
                  <span className="font-medium">
                    Growth Gains & Wealth Habor Fund
                  </span>
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  United Capital Money Market Fund
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Annual Returns</span>
                  <span className="text-green-500 font-semibold">9.12%</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow flex-1 min-w-[220px]">
                <div className="flex items-center mb-2">
                  <span className="inline-block w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                    ⭕️
                  </span>
                  <span className="font-medium">
                    Prosperity+Capitalclimb Portfolio
                  </span>
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  United Capital Money Market Fund
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Annual Returns</span>
                  <span className="text-green-500 font-semibold">9.12%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#1a2b3c]">
                Recent Transactions
              </h3>
              <button className="px-4 py-1 bg-lime-200 text-[#1a2b3c] font-semibold rounded-lg">
                See all
              </button>
            </div>
            <div className="bg-white rounded-xl p-5 shadow">
              <ul className="divide-y">
                {transactions.slice(0, 5).map((transaction) => {
                  const { emoji, sign } = generateTransactionEmoji(
                    transaction.type,
                    transaction.senderId,
                  );
                  return (
                    <li
                      key={transaction.id}
                      className="flex items-center py-3 gap-4"
                    >
                      <span
                        className={`inline-block w-8 h-8 rounded-full flex items-center justify-center text-2xl ${transaction.amount > 0 ? "bg-lime-100 text-lime-500" : "bg-gray-100 text-gray-400"}`}
                      >
                        {emoji}
                      </span>
                      <div className="flex-1">
                        <div className="font-medium text-[#1a2b3c]">
                          {transaction.amount > 0 ? "from " : "to "}
                          {transaction.type}
                        </div>
                        <div className="text-xs text-gray-400">Transfer</div>
                      </div>
                      <div
                        className={`font-semibold ${sign === "+" ? "text-green-500" : "text-red-500"}`}
                      >
                        {sign}$
                        {Math.abs(transaction.amount).toLocaleString(
                          undefined,
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          },
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
