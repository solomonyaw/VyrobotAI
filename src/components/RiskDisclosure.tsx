import React from 'react';
import { ShieldAlert, AlertTriangle, Scale, Lock } from 'lucide-react';

export const RiskDisclosure: React.FC = () => {
  return (
    <section id="risk-disclaimer" className="py-16 sm:py-24 relative overflow-hidden bg-[#030612] border-t border-slate-850">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Risk Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#060c1e] border-2 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.15)] relative overflow-hidden">
          
          {/* Top Amber Accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500" />

          <div className="flex flex-col sm:flex-row items-start gap-6">
            
            {/* Warning Shield Icon */}
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center flex-shrink-0 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <ShieldAlert className="w-9 h-9" />
            </div>

            <div className="space-y-4 flex-1">
              
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Important Risk Disclosure
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-500/50 uppercase">
                  Mandatory Warning
                </span>
              </div>

              {/* Exact mandated disclosure content */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Cryptocurrency and automated trading involve substantial financial risk. Trading results can vary and losses are possible, including the loss of some or all of the capital invested. Any rates, examples, calculations or historical performance shown on this website are not guarantees of future performance. Users should independently evaluate the risks and verify all current platform terms before depositing funds.
              </p>

              {/* Informational Disclaimer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-300/90 font-mono">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>This website is an informational/promotional interface and is not financial advice.</span>
              </div>

              {/* Bulleted Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-400">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 flex items-start gap-2">
                  <Scale className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>No guaranteed profits or zero-loss promises</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 flex items-start gap-2">
                  <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Always check verified terms on official VyRobot app</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 flex items-start gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Trade only with capital you can afford to lose</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
