export interface QuickSendCardProps {
  emoji: string;
  title: string;
  description: string;
  annualReturns: number;
  color: "purple" | "blue" | "green";
}

export default function QuickSendCard(props: QuickSendCardProps) {
  const colorClasses = {
    purple: "bg-purple-200 text-purple-500",
    blue: "bg-blue-200 text-blue-500",
    green: "bg-green-200 text-green-500",
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow flex-1 min-w-55">
      <div className="flex items-center mb-2">
        <span
          className={`w-12 h-8 ${colorClasses[props.color]} rounded-full flex items-center justify-center mr-2`}
        >
          {props.emoji}
        </span>
        <span className="font-bold text-black ">{props.title}</span>
      </div>
      <div className="text-gray-400 text-xs mb-2">{props.description}</div>
      <div className="flex items-center justify-between text-xs text-gray-300">
        <span>Annual Returns</span>
        <span className="text-green-500 font-semibold">
          {props.annualReturns}%
        </span>
      </div>
    </div>
  );
}
