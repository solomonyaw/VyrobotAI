import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS, OFFICIAL_REFERRAL_URL } from '../constants';
import { UserPlus, Wallet, Sliders, LineChart, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';

const iconMap = {
  UserPlus: UserPlus,
  Wallet: Wallet,
  Sliders: Sliders,
  LineChart: LineChart,
};

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 cyber-grid-dense opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-cyan-300 font-mono uppercase">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              VyRobot
            </span>{' '}
            Works
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A straightforward workflow designed to connect your funds with automated algorithmic prediction trading.
          </p>
        </div>

        {/* Desktop Connected Step Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative mb-12">
          
          {/* Connecting glowing line behind cards */}
          <div className="absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 -translate-y-10 z-0 opacity-40" />

          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap] || UserPlus;
            const isSelected = activeStep === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 cursor-pointer p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#08183d] border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.25)] -translate-y-2'
                    : 'bg-[#050e24]/90 border border-blue-900/50 hover:border-blue-500/40 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-mono text-2xl font-black ${
                        isSelected ? 'text-cyan-300 text-glow-cyan' : 'text-slate-600'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.6)] font-bold'
                          : 'bg-blue-950/70 border border-blue-800 text-cyan-400'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Step Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Details Callout */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  {step.details}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4 mb-10">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap] || UserPlus;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#06112c]/90 border border-blue-500/30 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-cyan-500/40 flex-shrink-0 flex items-center justify-center text-cyan-400">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">STEP {step.stepNumber}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">{step.description}</p>
                  <p className="text-[11px] text-slate-400 font-mono">{step.details}</p>
                  {step.ctaLink && (
                    <a
                      href={step.ctaLink}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-blue-950/80 px-3 py-1.5 rounded-lg border border-cyan-500/30"
                    >
                      <span>{step.ctaText || 'Get Started'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/70 via-[#071330] to-blue-950/70 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>Ready to start step 1?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Create your account on the official VyRobot platform to explore active trading options.
            </p>
          </div>

          <a
            href={OFFICIAL_REFERRAL_URL}
            className="flex-shrink-0 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all flex items-center gap-2"
          >
            <span>Register on VyRobot</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
