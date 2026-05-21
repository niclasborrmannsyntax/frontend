import { Transaction, transactionType } from "@/app/models/transaction";

interface TransactionUiData {
  emoji: string;
  sign: string;
}

export default function TransactionsList({
  transactions,
  user,
}: {
  transactions: Transaction[];
  user: { id: string } | null;
}) {
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

  return (
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
              <li key={transaction.id} className="flex items-center py-3 gap-4">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-2xl ${transaction.amount > 0 ? "bg-lime-100 text-lime-500" : "bg-gray-100 text-gray-400"}`}
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
                  {Math.abs(transaction.amount).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
