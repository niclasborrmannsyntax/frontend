"use client";

import CustomButton from "@/app/components/shared/CustomButton";
import { sendMoney } from "../actions";
import { useState } from "react";

type TransferType = "deposit" | "withdraw";

interface SendMoneyDialogProps {
  userId: string;
}

export default function SendMoneyDialog({ userId }: SendMoneyDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<TransferType>("deposit");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    const parsedAmount = parseFloat(amount);
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      return;
    }

    await sendMoney(userId, type, parsedAmount);
    setAmount("");
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="ml-4 rounded-lg bg-lime-400 px-6 py-2 font-semibold text-white shadow transition hover:bg-lime-500"
      >
        Send money
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-[#1a2b3c]">
                Send money
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close send money dialog"
              >
                x
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="send-money-type"
                  className="text-sm font-semibold text-[#1a2b3c]"
                >
                  Type
                </label>
                <select
                  id="send-money-type"
                  value={type}
                  onChange={(event) =>
                    setType(event.target.value as TransferType)
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#1a2b3c] outline-none transition focus:border-lime-400"
                >
                  <option value="deposit">Deposit</option>
                  <option value="withdraw">Withdraw</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="send-money-amount"
                  className="text-sm font-semibold text-[#1a2b3c]"
                >
                  Amount (USD)
                </label>
                <input
                  id="send-money-amount"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="100.00"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#1a2b3c] outline-none transition focus:border-lime-400"
                />
              </div>
              <CustomButton text={"Transfer"} onClick={handleTransfer} />
              <div className="mt-6 h-10"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
