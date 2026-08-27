import React from 'react';
import { Logo } from './Logo';
import { OFFICIAL_REFERRAL_URL, OFFICIAL_REF_CODE } from '../constants';
import { ArrowUpRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#02050f] border-t border-blue-900/40 text-slate-400 text-sm relative overflow-hidden">
      
      {/* Ambient background styling */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1: VyRobot Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              VyRobot is an AI-powered automated trading and prediction-market platform designed to simplify algorithmic market opportunities without requiring continuous manual trading.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-950/70 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                Referral Code: <span className="font-bold text-white">{OFFICIAL_REF_CODE}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollTo(e, 'how-it-works')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#investment-plans"
                  onClick={(e) => scrollTo(e, 'investment-plans')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Investment Plans
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => scrollTo(e, 'features')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  onClick={(e) => scrollTo(e, 'technology')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  onClick={(e) => scrollTo(e, 'calculator')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Investment Calculator
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => scrollTo(e, 'faq')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Compliance Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#risk-disclaimer"
                  onClick={(e) => scrollTo(e, 'risk-disclaimer')}
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-1"
                >
                  <span>Risk Disclosure</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_REFERRAL_URL}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>Platform Terms</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_REFERRAL_URL}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_REFERRAL_URL}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>Official Support & Contact</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Join CTAs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Join Official Platform
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Register or access your active automated trading dashboard directly on VyRobot.
            </p>
            <div className="space-y-2 pt-1">
              <a
                id="footer-create-account-btn"
                href={OFFICIAL_REFERRAL_URL}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(0,102,255,0.4)] flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Create Account</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="footer-start-trading-btn"
                href={OFFICIAL_REFERRAL_URL}
                className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Start Trading</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 VyRobot-inspired website. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[11px] text-slate-400">
            This website is an independent promotional and informational interface.
          </div>
        </div>

      </div>
    </footer>
  );
};
