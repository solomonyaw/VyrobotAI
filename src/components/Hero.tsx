import React, { useState, useEffect } from 'react';
import { OFFICIAL_REFERRAL_URL } from '../constants';
import { ArrowUpRight, ChevronRight, Shield, Zap, Cpu, Activity, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);

  const mockSignals = [
    { pair: 'PRED-BTC-Q1', action: 'PROBABILITY DELTA DETECTED', edge: '+1.42%', algo: 'Markov Chain v4' },
    { pair: 'ETH-MKT-SPR', action: 'CROSS-PLATFORM ARBITRAGE', edge: '+0.88%', algo: 'Latency Router' },
    { pair: 'PRED-TECH-AI', action: 'SENTIMENT MOMENTUM BUY', edge: '+1.65%', algo: 'Bayesian Model' },
    { pair: 'SOL-LIQ-CYCLE', action: 'AUTOMATED REBALANCING', edge: '+1.15%', algo: 'Dynamic Hedge' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignalIndex((prev) => (prev + 1) % mockSignals.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [mockSignals.length]);

  const scrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('investment-plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Decorative Gradients and Grid */}
      <div className="absolute inset-0 pointer-events-none cyber-grid opacity-70" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,102,255,0.25)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300 font-mono tracking-wide uppercase">
                AI-Powered Prediction Trading
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                <Shield className="w-3 h-3 text-cyan-400" /> Platform Verified
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Put Your Crypto to Work with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,102,255,0.4)]">
                AI-Powered Automated Trading
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-medium text-cyan-200/90 leading-relaxed">
              Explore automated trading powered by algorithms designed for global prediction markets.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              VyRobot is an automated trading platform designed to simplify access to algorithmic trading opportunities. Instead of manually monitoring markets around the clock, users can connect with an automated trading system designed to execute strategies according to predefined algorithms.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                id="hero-primary-cta"
                href={OFFICIAL_REFERRAL_URL}
                className="relative group overflow-hidden px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_30px_rgba(0,102,255,0.5)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all duration-300 flex items-center justify-center gap-2 border border-cyan-400/40"
              >
                <span>Start Trading with VyRobot</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#investment-plans"
                onClick={scrollToPlans}
                className="px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-1.5 backdrop-blur-md"
              >
                <span>Explore Investment Plans</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 w-full max-w-xl text-left">
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">$25</div>
                <div className="text-xs text-slate-400 font-medium">Starter Deposit</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-blue-400">180 Days</div>
                <div className="text-xs text-slate-400 font-medium">Standard Cycle</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">Up to 9.5%</div>
                <div className="text-xs text-slate-400 font-medium">Reported Daily</div>
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic AI / Trading Matrix Terminal */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Terminal Container */}
            <div className="relative rounded-2xl bg-[#06112c]/85 border border-blue-500/30 p-5 sm:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/60 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2 font-medium">VyRobot Core Engine v3.4</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950/80 text-cyan-400 border border-cyan-500/40">
                  LIVE MODEL
                </span>
              </div>

              {/* Central Matrix & Mascot Icon */}
              <div className="relative p-5 rounded-xl bg-slate-950/80 border border-blue-900/50 mb-5 overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                  <Cpu className="w-32 h-32 text-cyan-400" />
                </div>
                
                {/* Visual Orbit & Mascot representation */}
                <div className="flex items-center justify-between relative z-10 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 p-0.5 shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                      <div className="w-full h-full bg-[#071330] rounded-[10px] flex items-center justify-center">
                        <Zap className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">Active Strategy</div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        Prediction Arbitrage Matrix
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-slate-400">Algorithmic Edge</div>
                    <div className="text-base font-bold font-mono text-cyan-300">
                      {mockSignals[activeSignalIndex].edge}
                    </div>
                  </div>
                </div>

                {/* Animated Signal Feed */}
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-blue-950/40 border border-cyan-500/30 flex items-center justify-between text-cyan-300">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span className="font-semibold">{mockSignals[activeSignalIndex].pair}</span>
                    </div>
                    <span className="text-[11px] text-slate-300">{mockSignals[activeSignalIndex].action}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                    <span>Model: <span className="text-slate-200">{mockSignals[activeSignalIndex].algo}</span></span>
                    <span>Execution Latency: <span className="text-emerald-400 font-semibold">12ms</span></span>
                  </div>
                </div>
              </div>

              {/* Dynamic Mini Graph Simulation */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-blue-900/40 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Algorithmic Probability Wave
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">99.4% Uptime</span>
                </div>
                
                {/* SVG Synthetic Curve */}
                <div className="h-16 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroGraphGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,45 Q30,48 60,35 T120,38 T180,22 T240,25 T300,10 L300,60 L0,60 Z"
                      fill="url(#heroGraphGrad)"
                    />
                    <path
                      d="M0,45 Q30,48 60,35 T120,38 T180,22 T240,25 T300,10"
                      fill="none"
                      stroke="#00F0FF"
                      strokeWidth="2.5"
                    />
                    <circle cx="300" cy="10" r="4" fill="#FFFFFF" className="animate-ping" />
                    <circle cx="300" cy="10" r="3" fill="#00F0FF" />
                  </svg>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Automated Risk Protocols
                </span>
                <span className="text-cyan-400/80">Conceptual Simulation</span>
              </div>
            </div>

            {/* Floating Decorative Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg items-center gap-3 animate-float">
              <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Prediction Markets</div>
                <div className="text-[10px] text-slate-400">Algorithmic Routing</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
