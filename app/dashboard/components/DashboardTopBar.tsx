import SendMoneyDialog from "./SendMoneyDialog";

export default function DashboardTopBar({
  userName,
  userId,
}: {
  userName: string;
  userId: string;
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold text-[#1a2b3c]">Hey {userName} 👋🏼</h2>
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
        <SendMoneyDialog userId={userId} />
      </div>
    </div>
  );
}
