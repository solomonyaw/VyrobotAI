import React from 'react';
import { PLATFORM_FEATURES, OFFICIAL_REFERRAL_URL } from '../constants';
import { Bot, Sparkles, TrendingUp, LayoutDashboard, ShieldCheck, ArrowDownToLine, ArrowRight } from 'lucide-react';

const iconMap = {
  Bot: Bot,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  LayoutDashboard: LayoutDashboard,
  ShieldCheck: ShieldCheck,
  ArrowDownToLine: ArrowDownToLine,
};

export const PlatformFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 relative overflow-hidden bg-[#03081a]/80 border-t border-b border-blue-900/30">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300 font-mono uppercase">
            <span>Platform Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Explore{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              VyRobot?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive algorithmic trading architecture built around automated prediction market execution.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PLATFORM_FEATURES.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Bot;

            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-gradient-to-b from-[#071330]/90 to-[#040a1b]/95 border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(0,102,255,0.25)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-200 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400/90 px-2.5 py-0.5 rounded-full bg-blue-950/50 border border-blue-900">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Architecture Component</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-mono">
                    Active <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-2xl bg-[#06112c]/80 border border-blue-900/50 text-center sm:flex sm:items-center sm:justify-between max-w-4xl mx-auto">
          <div className="text-sm text-slate-300 mb-4 sm:mb-0">
            Interested in exploring the live automated engine?
          </div>
          <a
            href={OFFICIAL_REFERRAL_URL}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_15px_rgba(0,102,255,0.4)]"
          >
            <span>Create Account on VyRobot</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
