export default function BalanceCard({ balance }: { balance: number }) {
  return (
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
  );
}
