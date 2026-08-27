import React, { useState, useEffect } from 'react';
import { MARKET_TICKERS } from '../constants';
import { TrendingUp, TrendingDown, Activity, Sparkles } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  const [tickers, setTickers] = useState(MARKET_TICKERS);

  // Subtle simulated tick fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers(prev =>
        prev.map(ticker => {
          if (Math.random() > 0.6) {
            const delta = (Math.random() * 0.4 - 0.2);
            const currentPct = parseFloat(ticker.change24h.replace('%', '').replace('+', ''));
            const newPct = (currentPct + delta).toFixed(2);
            const isPos = parseFloat(newPct) >= 0;
            return {
              ...ticker,
              change24h: `${isPos ? '+' : ''}${newPct}%`,
              isPositive: isPos,
            };
          }
          return ticker;
        })
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050C1F]/90 border-y border-blue-900/40 py-2.5 overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Badge */}
        <div className="hidden md:flex items-center gap-2 pr-4 border-r border-blue-900/50 flex-shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[11px] font-mono font-semibold tracking-wider text-cyan-300 uppercase flex items-center gap-1">
            <Activity className="w-3 h-3 text-cyan-400" /> Market Signals
          </span>
        </div>

        {/* Scrolling Tickers */}
        <div className="flex-1 overflow-x-auto no-scrollbar flex items-center space-x-6 sm:space-x-8 px-2 sm:px-4">
          {tickers.map((t, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 flex-shrink-0 text-xs font-mono"
            >
              <span className="text-slate-400 font-medium">{t.symbol}</span>
              <span className="text-white font-semibold">{t.price}</span>
              <span
                className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                  t.isPositive
                    ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30'
                    : 'text-rose-400 bg-rose-950/60 border border-rose-500/30'
                }`}
              >
                {t.isPositive ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                {t.change24h}
              </span>
            </div>
          ))}
        </div>

        {/* Right Status */}
        <div className="hidden lg:flex items-center gap-1.5 pl-4 border-l border-blue-900/50 flex-shrink-0 text-[11px] font-mono text-slate-400">
          <Sparkles className="w-3 h-3 text-blue-400" />
          <span>Algorithmic Scan: <span className="text-cyan-400 font-semibold">24/7 Active</span></span>
        </div>
      </div>
    </div>
  );
};
