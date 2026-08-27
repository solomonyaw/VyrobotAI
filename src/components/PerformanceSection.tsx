import React from 'react';
import { OFFICIAL_REFERRAL_URL } from '../constants';
import { LineChart, PieChart, Activity, ShieldAlert, ArrowUpRight, BarChart3, TrendingUp, Layers } from 'lucide-react';

export const PerformanceSection: React.FC = () => {
  const allocation = [
    { name: 'Prediction Market Arbitrage', percent: 55, color: 'bg-cyan-400', textColor: 'text-cyan-400' },
    { name: 'Algorithmic Probability Swaps', percent: 25, color: 'bg-blue-500', textColor: 'text-blue-400' },
    { name: 'Volatility Buffer & Liquidity', percent: 20, color: 'bg-indigo-400', textColor: 'text-indigo-300' },
  ];

  const dailySimulation = [
    { day: 'Mon', rate: '+1.45%', positive: true, volume: '$42.1K' },
    { day: 'Tue', rate: '+1.12%', positive: true, volume: '$38.9K' },
    { day: 'Wed', rate: '+1.68%', positive: true, volume: '$54.3K' },
    { day: 'Thu', rate: '+0.95%', positive: true, volume: '$31.8K' },
    { day: 'Fri', rate: '+1.54%', positive: true, volume: '$48.0K' },
    { day: 'Sat', rate: '+1.20%', positive: true, volume: '$29.4K' },
    { day: 'Sun', rate: '+1.35%', positive: true, volume: '$35.2K' },
  ];

  return (
    <section id="performance" className="py-20 sm:py-28 relative overflow-hidden bg-[#040a1b]/95">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold text-cyan-300 font-mono uppercase">
            <LineChart className="w-3.5 h-3.5" /> Analytics Overview
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Track Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trading Activity
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive look at algorithmic allocation models, historical simulation logs, and daily execution dynamics.
          </p>

          <div className="inline-block px-4 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 font-semibold">
            Illustrative data only.
          </div>
        </div>

        {/* 2-Column Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-12">
          
          {/* Left Column: Strategy Allocation Breakdown */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#06112c]/90 border border-blue-500/20 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-cyan-400" /> Model Allocation Distribution
                </span>
                <span className="text-[10px] font-mono text-slate-400">Target Strategy</span>
              </div>

              {/* Visual Progress Bar Distribution */}
              <div className="w-full h-4 rounded-full bg-slate-950 overflow-hidden flex mb-6 p-0.5 border border-slate-800">
                <div className="h-full bg-cyan-400 rounded-l-full" style={{ width: '55%' }} />
                <div className="h-full bg-blue-600" style={{ width: '25%' }} />
                <div className="h-full bg-indigo-500 rounded-r-full" style={{ width: '20%' }} />
              </div>

              {/* Allocation Items */}
              <div className="space-y-4 mb-6">
                {allocation.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-blue-950 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-xs font-semibold text-white">{item.name}</span>
                    </div>
                    <span className={`text-sm font-bold font-mono ${item.textColor}`}>{item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-900/60 text-[11px] text-slate-400 font-mono">
              Strategy weighting automatically adjusts based on prediction market event liquidity and volatility shifts.
            </div>
          </div>

          {/* Right Column: Weekly Simulated Execution Matrix */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#06112c]/90 border border-blue-500/20 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-400" /> 7-Day Performance Simulation
                </span>
                <span className="text-[10px] font-mono text-cyan-400">Sample Model Run</span>
              </div>

              {/* Daily Matrix Rows */}
              <div className="space-y-2 mb-6">
                {dailySimulation.map((d, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-900 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-slate-400 font-bold w-12">{d.day}</span>
                    <span className="text-slate-300">Simulated Vol: {d.volume}</span>
                    <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                      {d.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-mono">Illustrative sample run</span>
              <a
                href={OFFICIAL_REFERRAL_URL}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
              >
                <span>Join Official Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="max-w-4xl mx-auto p-4 rounded-2xl bg-slate-950 border border-blue-900/50 flex items-center gap-3 text-center sm:text-left">
          <ShieldAlert className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <p className="text-xs text-slate-400">
            All charts, allocations, and simulations are for demonstration of platform concepts only and do not reflect guaranteed future returns or specific trading results.
          </p>
        </div>

      </div>
    </section>
  );
};
