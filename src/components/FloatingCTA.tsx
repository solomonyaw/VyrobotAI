import React, { useState, useEffect } from 'react';
import { OFFICIAL_REFERRAL_URL, OFFICIAL_REF_CODE } from '../constants';
import { ArrowUpRight, ArrowUp, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyRef = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(OFFICIAL_REFERRAL_URL);
    setCopied(true);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.9 },
      colors: ['#00F0FF', '#0052FF', '#FFFFFF'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5 duration-300">
      
      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-slate-900/90 border border-blue-900/60 text-slate-300 hover:text-white hover:border-cyan-400 flex items-center justify-center backdrop-blur-md shadow-xl transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Floating Join CTA pill */}
      <a
        id="floating-join-cta"
        href={OFFICIAL_REFERRAL_URL}
        className="px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(0,102,255,0.6)] border border-cyan-400/40 flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Join VyRobot</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>

      {/* Copy Code button */}
      <button
        type="button"
        onClick={copyRef}
        title="Copy Referral Link"
        className="px-3 py-2.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-mono font-semibold flex items-center gap-1.5 backdrop-blur-md shadow-lg transition-colors"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        <span className="hidden sm:inline">{copied ? 'Copied' : 'Ref Code'}</span>
      </button>

    </div>
  );
};
