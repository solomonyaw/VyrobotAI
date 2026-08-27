import React, { useState } from 'react';
import { FAQ_LIST, OFFICIAL_REFERRAL_URL } from '../constants';
import { HelpCircle, ChevronDown, ArrowUpRight, Search, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(FAQ_LIST[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFAQs = FAQ_LIST.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-[#04091a]/85 border-t border-b border-blue-900/30">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-semibold text-cyan-300 font-mono uppercase">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Common{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Clear, transparent answers about VyRobot, automated trading, capital options, and platform rules.
          </p>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. returns, withdrawal, minimums)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#06112c]/90 border border-blue-900/60 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'general', label: 'Platform Basics' },
              { id: 'trading', label: 'Trading & Algos' },
              { id: 'account', label: 'Account & Deposits' },
              { id: 'risk', label: 'Risk & Policies' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(0,102,255,0.4)]'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#08173d] border-cyan-400/60 shadow-[0_0_20px_rgba(0,102,255,0.25)]'
                    : 'bg-[#06112c]/80 border-blue-900/40 hover:border-blue-700/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-cyan-500 text-slate-950 rotate-180 shadow-[0_0_10px_rgba(0,240,255,0.6)]'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-blue-900/50 space-y-3">
                    <p>{faq.answer}</p>
                    {faq.id === 'where-to-register' && (
                      <a
                        href={OFFICIAL_REFERRAL_URL}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md"
                      >
                        <span>Access Official Registration Link</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more assistance */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/70 border border-blue-900/50 text-center">
          <p className="text-xs text-slate-400 mb-3">
            Have further questions regarding active packages, terms, or account verification?
          </p>
          <a
            href={OFFICIAL_REFERRAL_URL}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 font-mono"
          >
            <span>Visit the official VyRobot support & registration portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
