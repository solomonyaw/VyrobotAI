import React, { useState, useMemo } from 'react';
import { OFFICIAL_REFERRAL_URL } from '../constants';
import { Calculator as CalcIcon, RefreshCw, Sparkles, ArrowUpRight, DollarSign, Calendar, Percent, Clock, Zap, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InvestmentCalculator: React.FC = () => {
  const initialValues = {
    amount: 250,
    dailyRate: 7.0,
    days: 180,
    isCompounding: false,
  };

  const [amount, setAmount] = useState<number>(initialValues.amount);
  const [dailyRate, setDailyRate] = useState<number>(initialValues.dailyRate);
  const [days, setDays] = useState<number>(initialValues.days);
  const [isCompounding, setIsCompounding] = useState<boolean>(initialValues.isCompounding);

  // Identify matching tier based on current amount
  const matchedTier = useMemo(() => {
    if (amount < 200) {
      return {
        name: 'Starter Plan',
        range: '$25 – $199',
        rateGuideline: '5% to 7% daily',
        color: 'text-cyan-300 border-cyan-500/40 bg-cyan-950/60',
        badge: 'Starter Tier',
        defaultRate: 6.0,
      };
    } else if (amount <= 2499) {
      return {
        name: 'Growth Plan',
        range: '$200 – $2,499',
        rateGuideline: '7% to 8% daily',
        color: 'text-blue-300 border-blue-500/40 bg-blue-950/60',
        badge: 'Growth Tier (Popular)',
        defaultRate: 7.5,
      };
    } else {
      return {
        name: 'Ultra Plan',
        range: '$2,500+',
        rateGuideline: 'Up to 9.5% daily',
        color: 'text-indigo-300 border-indigo-500/40 bg-indigo-950/60',
        badge: 'Ultra Tier',
        defaultRate: 9.5,
      };
    }
  }, [amount]);

  const calculations = useMemo(() => {
    const rateDecimal = dailyRate / 100;
    const initialDeposit = Math.max(0, amount);

    let estimatedDailyResult = initialDeposit * rateDecimal;
    let estimatedCumulativeResult = 0;
    let estimatedTotalValue = initialDeposit;

    if (!isCompounding) {
      // Linear (Simple daily return without reinvesting)
      estimatedDailyResult = initialDeposit * rateDecimal;
      estimatedCumulativeResult = initialDeposit * rateDecimal * days;
      estimatedTotalValue = initialDeposit + estimatedCumulativeResult;
    } else {
      // Compounding daily
      estimatedTotalValue = initialDeposit * Math.pow(1 + rateDecimal, days);
      estimatedCumulativeResult = estimatedTotalValue - initialDeposit;
      // Average daily over period
      estimatedDailyResult = days > 0 ? estimatedCumulativeResult / days : 0;
    }

    // Generate graph coordinates for mini SVG curve
    const points: { day: number; value: number }[] = [];
    const stepCount = 10;
    for (let i = 0; i <= stepCount; i++) {
      const currentDay = Math.round((days / stepCount) * i);
      let val = initialDeposit;
      if (!isCompounding) {
        val = initialDeposit + initialDeposit * rateDecimal * currentDay;
      } else {
        val = initialDeposit * Math.pow(1 + rateDecimal, currentDay);
      }
      points.push({ day: currentDay, value: val });
    }

    return {
      daily: estimatedDailyResult,
      cumulative: estimatedCumulativeResult,
      total: estimatedTotalValue,
      points,
    };
  }, [amount, dailyRate, days, isCompounding]);

  const handleReset = () => {
    setAmount(initialValues.amount);
    setDailyRate(initialValues.dailyRate);
    setDays(initialValues.days);
    setIsCompounding(initialValues.isCompounding);
  };

  const handleSelectTierAmount = (amt: number, recommendedRate?: number) => {
    setAmount(amt);
    if (recommendedRate) {
      setDailyRate(recommendedRate);
    }
  };

  const triggerCelebrate = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00F0FF', '#0052FF', '#38BDF8', '#FFFFFF'],
    });
  };

  const quickAmounts = [25, 100, 200, 500, 1000, 2500, 5000];
  const quickRates = [5.0, 6.0, 7.0, 8.0, 9.5];
  const quickDays = [7, 30, 60, 90, 180];

  return (
    <section id="calculator" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold text-cyan-300 font-mono uppercase">
            <CalcIcon className="w-3.5 h-3.5" /> Interactive Tool
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Investment{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Calculator
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Simulate potential algorithmic trading outcomes across Starter (5%–7%), Growth (7%–8%), and Ultra (Up to 9.5%) plans for standard 180-day cycles.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#06112c]/90 border border-blue-500/30 backdrop-blur-xl shadow-2xl space-y-6">
            
            {/* Top Bar with Matched Tier Detection */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" /> Simulation Parameters
                </span>
                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${matchedTier.color}`}>
                  {matchedTier.name} ({matchedTier.rateGuideline})
                </span>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 self-start sm:self-auto"
              >
                <RefreshCw className="w-3 h-3" /> Reset Defaults
              </button>
            </div>

            {/* Input 1: Amount */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-cyan-400" /> Deposit Amount ($)
                </label>
                <div className="text-right">
                  <span className="text-xl font-extrabold font-mono text-cyan-300">
                    ${amount.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono ml-2">
                    Tier: {matchedTier.name}
                  </span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="25"
                max="10000"
                step="25"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              {/* Quick Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {quickAmounts.map((amt) => {
                  let planBadge = 'Starter';
                  if (amt >= 2500) planBadge = 'Ultra';
                  else if (amt >= 200) planBadge = 'Growth';

                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleSelectTierAmount(amt)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors flex items-center gap-1 ${
                        amount === amt
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(0,240,255,0.6)]'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      <span>${amt}</span>
                      <span className="text-[9px] opacity-70">({planBadge})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 2: Rate */}
            <div className="space-y-2 pt-2 border-t border-slate-850">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Percent className="w-3.5 h-3.5 text-cyan-400" /> Daily Return Rate (%)
                  </label>
                  <div className="text-[11px] text-slate-400">
                    Recommended for {matchedTier.name}: <strong>{matchedTier.rateGuideline}</strong>
                  </div>
                </div>
                <span className="text-xl font-extrabold font-mono text-cyan-300">
                  {dailyRate.toFixed(1)}% / day
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="1.0"
                max="12.0"
                step="0.1"
                value={dailyRate}
                onChange={(e) => setDailyRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
              />

              {/* Quick Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {quickRates.map((rt) => (
                  <button
                    key={rt}
                    type="button"
                    onClick={() => setDailyRate(rt)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                      dailyRate === rt
                        ? 'bg-blue-600 text-white font-bold shadow-[0_0_10px_rgba(0,102,255,0.6)]'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {rt}%
                    {rt === 6.0 && ' (Starter)'}
                    {rt === 7.0 && ' (Starter/Growth)'}
                    {rt === 8.0 && ' (Growth)'}
                    {rt === 9.5 && ' (Ultra Max)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Days */}
            <div className="space-y-2 pt-2 border-t border-slate-850">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Duration (Days)
                  </label>
                  <div className="text-[11px] text-cyan-400 font-mono">
                    Standard VyRobot Cycle: 180 Days (Renewal required afterward)
                  </div>
                </div>
                <span className="text-xl font-extrabold font-mono text-cyan-300">
                  {days} Days
                </span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="1"
                max="180"
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
              />

              {/* Quick Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {quickDays.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                      days === d
                        ? 'bg-indigo-600 text-white font-bold shadow-[0_0_10px_rgba(99,102,241,0.6)]'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    } ${d === 180 ? 'border-cyan-500/50' : ''}`}
                  >
                    {d} Days {d === 180 && '★ Full Cycle'}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4: Compounding Toggle */}
            <div className="pt-2 border-t border-slate-850 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Daily Compounding (Reinvestment)</div>
                <div className="text-[11px] text-slate-400">Reinvests simulated daily returns back into active capital</div>
              </div>
              <button
                type="button"
                onClick={() => setIsCompounding(!isCompounding)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isCompounding ? 'bg-cyan-500 shadow-[0_0_12px_rgba(0,240,255,0.6)]' : 'bg-slate-800'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isCompounding ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0a1c47] to-[#040c21] border-2 border-cyan-400/50 shadow-2xl flex flex-col justify-between">
            <div>
              
              {/* Output Header */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/60 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                    Simulation Outputs
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {matchedTier.name} • {days}-Day Simulation
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-800">
                  {isCompounding ? 'Compounded' : 'Linear Growth'}
                </span>
              </div>

              {/* 3 Result Cards */}
              <div className="space-y-4 mb-6">
                
                {/* Daily Result */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-900/60">
                  <div className="text-xs font-mono text-slate-400">Estimated Daily Return ({dailyRate.toFixed(1)}%):</div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-white">
                    ${calculations.daily.toFixed(2)}
                    <span className="text-xs text-slate-400 font-normal ml-1">/ day</span>
                  </div>
                  <div className="text-[10px] text-amber-300 font-mono mt-1">
                    Illustrative estimate — not a guaranteed return.
                  </div>
                </div>

                {/* Cumulative Result */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-900/60">
                  <div className="text-xs font-mono text-slate-400">Estimated Cumulative Return ({days} days):</div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-cyan-300">
                    +${calculations.cumulative.toFixed(2)}
                  </div>
                  <div className="text-[10px] text-amber-300 font-mono mt-1">
                    Illustrative estimate — not a guaranteed return.
                  </div>
                </div>

                {/* Total Value */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-[#07173e] border border-cyan-500/40 shadow-inner">
                  <div className="text-xs font-mono text-cyan-300">Estimated Total Capital at {days} Days:</div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                    ${calculations.total.toFixed(2)}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>Cycle length: 180 days (renewal required)</span>
                  </div>
                </div>

              </div>

              {/* Mini SVG Trajectory graph */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-950 mb-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>Growth Trajectory ({days}d)</span>
                  <span className="text-cyan-400 font-bold">${calculations.total.toFixed(0)}</span>
                </div>
                <div className="h-14 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40" preserveAspectRatio="none">
                    <path
                      d="M0,35 Q60,30 120,18 T200,4 L200,40 L0,40 Z"
                      fill="rgba(0, 240, 255, 0.15)"
                    />
                    <path
                      d="M0,35 Q60,30 120,18 T200,4"
                      fill="none"
                      stroke="#00F0FF"
                      strokeWidth="2"
                    />
                    <circle cx="200" cy="4" r="3" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Bottom Action & Strict Disclaimer */}
            <div>
              <a
                href={OFFICIAL_REFERRAL_URL}
                onClick={triggerCelebrate}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(0,102,255,0.5)] transition-all"
              >
                <span>Start with {matchedTier.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <p className="text-[10px] text-slate-400 text-center mt-3 leading-tight">
                This calculator provides mathematical simulations only and does not represent an actual VyRobot payout or promise of profit.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
