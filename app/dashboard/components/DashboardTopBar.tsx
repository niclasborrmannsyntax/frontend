import { cookies } from "next/headers";
import SendMoneyDialog from "./SendMoneyDialog";
import { createClient } from "../../utils/supabase/server";
import { redirect } from "next/navigation";
import { signOutAction } from "@/app/auth/actions";

interface DashboardTopBarProps {
  userName: string;
  userId: string;
}

export default function DashboardTopBar(props: DashboardTopBarProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold text-[#1a2b3c]">
        Hey {props.userName} 👋🏼
      </h2>
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
        <button
          type="button"
          onClick={signOutAction}
          className="ml-4 rounded-lg bg-lime-400 px-6 py-2 font-semibold text-white shadow transition hover:bg-lime-500"
        >
          Sign out
        </button>
        <SendMoneyDialog userId={props.userId} />
      </div>
    </div>
  );
}
