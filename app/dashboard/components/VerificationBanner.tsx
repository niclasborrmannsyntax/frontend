export default function VerificationBanner() {
  return (
    <div className="flex-1 bg-[#eaf6fb] rounded-2xl p-6 flex items-center gap-6 min-w-[320px]">
      <div>
        <div className="font-semibold text-lg text-[#1a2b3c] mb-1">
          Update your SecureSend Information
        </div>
        <div className="text-gray-600 text-sm mb-2">
          Please update/verify your information before{" "}
          <span className="font-medium text-[#1a2b3c]">13th July 2023</span> to
          unlock level benefits
        </div>
        <button className="mt-2 font-semibold text-[#1a2b3c] flex items-center gap-1">
          Complete Verification <span>→</span>
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        <span className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center">
          <span className="text-5xl text-lime-400">✅</span>
        </span>
      </div>
    </div>
  );
}
