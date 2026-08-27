import React from 'react';
import { INVESTMENT_PLANS, OFFICIAL_REFERRAL_URL } from '../constants';
import { Check, ArrowUpRight, ShieldAlert, Sparkles, Info, Clock, RotateCcw, Zap } from 'lucide-react';

export const InvestmentPlans: React.FC = () => {
  return (
    <section id="investment-plans" className="py-20 sm:py-28 relative overflow-hidden bg-[#040919]/80 border-t border-b border-blue-900/30">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300 font-mono uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Platform Capital Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            VyRobot{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Investment Tiers
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Select an automated algorithmic tier based on your capital preferences. Plans run on a 180-day cycle with renewal required afterward.
          </p>

          {/* Cycle Highlight Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-blue-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Standard Duration: <strong>180-Day Cycle</strong> (Requires Renewal Afterward)</span>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {INVESTMENT_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#0a1b42] to-[#050f26] border-2 border-cyan-400/80 shadow-[0_0_40px_rgba(0,102,255,0.35)] lg:-translate-y-2'
                    : 'bg-[#06112c]/80 border border-blue-900/50 hover:border-blue-500/50 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-extrabold text-xs tracking-wider uppercase font-mono shadow-[0_0_15px_rgba(0,240,255,0.7)] flex items-center gap-1.5">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>Most Popular Tier</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${plan.riskColor}`}>
                      {plan.riskLevel}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Range and Daily Rate */}
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-blue-950 mb-6 space-y-3">
                    <div>
                      <div className="text-xs font-mono text-slate-400 mb-1">Deposit Range</div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                        ${plan.minAmount.toLocaleString()}{' '}
                        <span className="text-slate-400 text-lg font-normal">
                          {plan.maxAmount ? `– $${plan.maxAmount.toLocaleString()}` : 'and above'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Daily Return:</span>
                      <span className="text-sm font-black font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                        {plan.reportedDailyRate}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" /> Duration:
                      </span>
                      <span className="text-indigo-300 font-semibold">180 Days</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      Tier Highlights:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-cyan-400">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action & Verification Notice */}
                <div>
                  {/* Notice Pill */}
                  <div className="mb-4 p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/60 text-[11px] text-slate-300 flex items-start gap-2">
                    <RotateCcw className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{plan.notes}</span>
                  </div>

                  <a
                    id={`plan-cta-${plan.id}`}
                    href={OFFICIAL_REFERRAL_URL}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50'
                    }`}
                  >
                    <span>Invest in {plan.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <div className="text-[10px] text-center text-slate-400 mt-2 font-mono">
                    Official terms and verification on VyRobot
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 180-Day Cycle Rule & Capital Disclosure Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-800/50 flex items-start gap-4">
            <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">
                180-Day Investment Cycle
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All VyRobot investment plans run on a standard <strong>180-day cycle</strong>. Upon completion of the 180 days, renewal is required to continue automated trading allocations.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/40 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-300">
                Capital & Performance Disclosure
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Trading returns are subject to market conditions and risk of loss. Always independently review and verify current platform terms directly on the official VyRobot portal.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
