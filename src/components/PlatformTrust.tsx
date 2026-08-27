import React from 'react';
import { TRUST_FEATURES, OFFICIAL_REFERRAL_URL } from '../constants';
import { Cpu, Zap, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Zap: Zap,
  Layers: Layers,
};

export const PlatformTrust: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#040a1b]/60 border-t border-b border-blue-900/30">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold text-cyan-400 font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5" /> Core Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Automated Trading.{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Simplified.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            VyRobot is designed around the idea of automating the trading process through algorithmic systems. The platform focuses on prediction-market opportunities and automated execution, allowing users to participate without having to manually analyze every market movement themselves.
          </p>
        </div>

        {/* 3 Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRUST_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Cpu;
            return (
              <div
                key={idx}
                className="relative group p-8 rounded-2xl bg-gradient-to-b from-[#081533]/80 to-[#040a1b]/90 border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_-10px_rgba(0,102,255,0.3)] hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-200">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-400 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Paragraph */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center text-xs font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors">
                  <span>Explore in platform</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Transition Callout */}
        <div className="mt-12 text-center">
          <a
            href={OFFICIAL_REFERRAL_URL}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-300 transition-all"
          >
            <span>Learn more about automated trading on VyRobot</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
