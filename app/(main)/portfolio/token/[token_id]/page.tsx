"use client";

import AddTradeDialog from "@/components/add-trade-dialog";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, Coins } from "lucide-react";

const currentPrice = 2145.67;

const tradeHistory = [
  {
    date: "2023-06-01",
    type: "Buy",
    amount: 1.5,
    price: 2000,
    profitLoss: (currentPrice - 2000) * 1.5,
  },
  {
    date: "2023-06-02",
    type: "Sell",
    amount: 0.5,
    price: 2100,
    profitLoss: (2100 - currentPrice) * 0.5,
  },
  {
    date: "2023-06-03",
    type: "Buy",
    amount: 1.0,
    price: 2050,
    profitLoss: (currentPrice - 2050) * 1.0,
  },
  {
    date: "2023-06-04",
    type: "Sell",
    amount: 1.0,
    price: 2200,
    profitLoss: (2200 - currentPrice) * 1.0,
  },
  {
    date: "2023-06-05",
    type: "Buy",
    amount: 2.0,
    price: 2150,
    profitLoss: (currentPrice - 2150) * 2.0,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-center py-16 max-w-5xl mx-auto">
      <div className="w-full mx-auto max-w-2xl mb-4 ">
        <AddTradeDialog />
      </div>

      <div
        className={cn(
          "w-full max-w-2xl mx-auto",
          "bg-zinc-900/70",
          "border border-zinc-800",
          "rounded-xl shadow-sm backdrop-blur-xl"
        )}
      >
        {/* Token Details Section */}
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coins className="h-6 w-6 text-zinc-300" />
              <h1 className="text-2xl font-semibold text-zinc-100">ETH</h1>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-zinc-100">$2,145.67</p>
              <p className="text-xs text-green-400">+5.23%</p>
            </div>
          </div>

          {/* Price Chart */}
          <div className="mt-4 h-40">
            {/* <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <XAxis dataKey="date" hide />
                <YAxis hide domain={["auto", "auto"]} />
                <Tooltip
                  contentStyle={{ background: "#27272a", border: "none", borderRadius: "8px" }}
                  labelStyle={{ color: "#d4d4d8" }}
                  itemStyle={{ color: "#22c55e" }}
                />
                <Line type="monotone" dataKey="price" stroke="#22c55e" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer> */}
          </div>
        </div>

        {/* Profit Summary */}
        <div className="p-4 border-b border-zinc-800">
          <p className="text-xs text-zinc-400">Profit Summary</p>
          <h2 className="text-2xl font-semibold text-green-400 mt-1">+$1,234.56</h2>
          <div className="flex justify-between mt-2">
            <div>
              <p className="text-xs text-zinc-400">Successful Trades</p>
              <p className="text-sm font-medium text-zinc-100">15</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400">Failed Trades</p>
              <p className="text-sm font-medium text-zinc-100">3</p>
            </div>
          </div>
        </div>

        {/* Trade History */}
        <div className="p-3">
          <h2 className="text-xs font-medium text-zinc-100 mb-2">Trade History</h2>
          <div className="space-y-1">
            {tradeHistory.map((trade, index) => (
              <div
                key={index}
                className={cn(
                  "group flex items-center justify-between",
                  "p-2 rounded-lg",
                  "hover:bg-zinc-800/50",
                  "transition-all duration-200"
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn("p-1.5 rounded-lg", {
                      "bg-green-900/30": trade.type === "Buy",
                      "bg-red-900/30": trade.type === "Sell",
                    })}
                  >
                    {trade.type === "Buy" ? (
                      <ArrowDown className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <ArrowUp className="w-3.5 h-3.5 text-red-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-zinc-100">{trade.type}</h3>
                    <p className="text-[11px] text-zinc-400">{trade.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-zinc-100">{trade.amount} ETH</span>
                  <p className="text-[11px] text-zinc-400">
                    ${trade.price.toFixed(2)} / ${currentPrice.toFixed(2)}
                  </p>
                  <p className={cn("text-[11px]", trade.profitLoss > 0 ? "text-green-400" : "text-red-400")}>
                    ${Math.abs(trade.profitLoss).toFixed(2)} (
                    {((trade.profitLoss / (trade.amount * trade.price)) * 100).toFixed(2)}
                    %)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
