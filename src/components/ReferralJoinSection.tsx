import React, { useState } from 'react';
import { OFFICIAL_REFERRAL_URL, OFFICIAL_REF_CODE } from '../constants';
import { ArrowUpRight, Copy, Check, ShieldCheck, Zap, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ReferralJoinSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard.writeText(OFFICIAL_REFERRAL_URL);
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#00F0FF', '#0052FF', '#FFFFFF'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Gradients and Matrix Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#081b47] via-[#05112c] to-[#03081a] border-2 border-cyan-400/60 p-8 sm:p-14 text-center shadow-[0_0_60px_rgba(0,102,255,0.4)] relative overflow-hidden">
          
          {/* Top glowing bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-cyan-500/40 text-xs font-semibold text-cyan-300 font-mono uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Official Portal
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Ready to Explore{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,102,255,0.5)]">
              Automated Trading?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Visit VyRobot and create your account to explore the platform, available investment options and current terms.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              id="cta-join-vyrobot-btn"
              href={OFFICIAL_REFERRAL_URL}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl font-extrabold text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_30px_rgba(0,102,255,0.6)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] transition-all flex items-center justify-center gap-2 border border-cyan-300/40"
            >
              <span>Join VyRobot</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="#how-it-works"
              onClick={scrollToHowItWorks}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
            >
              <span>Learn How It Works</span>
            </a>
          </div>

          {/* Referral Link Quick Copy Box */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-900/60 max-w-md mx-auto flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 overflow-hidden text-left">
              <span className="text-slate-400 flex-shrink-0">Ref:</span>
              <span className="text-cyan-300 font-bold truncate">{OFFICIAL_REF_CODE}</span>
            </div>

            <button
              type="button"
              onClick={copyReferralLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex-shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Official Link
            </span>
            <span>•</span>
            <span>Zero Platform Setup Fee</span>
            <span>•</span>
            <span>24/7 Access</span>
          </div>

        </div>

      </div>
    </section>
  );
};
