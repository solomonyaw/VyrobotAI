import React, { useState } from 'react';
import { OFFICIAL_REFERRAL_URL } from '../constants';
import { SimulatedTrade } from '../types';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Wallet, 
  Layers, 
  Activity, 
  Shield, 
  Clock, 
  CheckCircle2, 
  Lock,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const mockTrades: SimulatedTrade[] = [
  {
    id: 'TX-8941',
    timestamp: '2 min ago',
    market: 'BTC Target > $95K (Prediction)',
    strategy: 'Probability Delta v4',
    type: 'PREDICTION_LONG',
    confidence: 94.2,
    simulatedReturn: '+1.45%',
    status: 'SETTLED',
  },
  {
    id: 'TX-8940',
    timestamp: '14 min ago',
    market: 'ETH Layer-2 Spread Arbitrage',
    strategy: 'Cross-Pool Route',
    type: 'ARBITRAGE_CAPTURE',
    confidence: 89.6,
    simulatedReturn: '+0.92%',
    status: 'SETTLED',
  },
  {
    id: 'TX-8939',
    timestamp: '42 min ago',
    market: 'AI Sector Momentum Index',
    strategy: 'Bayesian Filter',
    type: 'PREDICTION_LONG',
    confidence: 91.8,
    simulatedReturn: '+1.62%',
    status: 'SETTLED',
  },
  {
    id: 'TX-8938',
    timestamp: '1 hour ago',
    market: 'Global Macro Rate Settle',
    strategy: 'Volatility Hedge',
    type: 'ALGO_SETTLE',
    confidence: 88.0,
    simulatedReturn: '+1.10%',
    status: 'SETTLED',
  },
];

export const DashboardPreview: React.FC = () => {
  const [activeTimeframe, setActiveTimeframe] = useState<'24H' | '7D' | '30D' | 'ALL'>('7D');
  const [showActionModal, setShowActionModal] = useState<'deposit' | 'withdraw' | null>(null);

  return (
    <section id="dashboard-preview" className="py-20 sm:py-28 relative overflow-hidden bg-[#030717]/90 border-t border-b border-blue-900/40">
      
      {/* Glow Effects */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-semibold text-cyan-300 font-mono uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Conceptual User Interface
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Dashboard{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Preview
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A visual overview of how automated portfolio monitoring and algorithmic positions are organized.
          </p>

          {/* Mandatory Prominent Disclaimer Badge */}
          <div className="inline-block px-4 py-1.5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
            Demo Interface — For Illustration Only
          </div>
        </div>

        {/* Fictional Dashboard Container */}
        <div className="rounded-3xl bg-[#06112c]/95 border-2 border-blue-500/30 p-4 sm:p-8 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl max-w-6xl mx-auto relative">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-blue-900/60 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400">DEMO USER DASHBOARD</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  ALGO ACTIVE
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Portfolio Overview
              </h3>
            </div>

            {/* Quick Actions (Deposit / Withdraw) */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setShowActionModal('deposit')}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(0,102,255,0.4)] flex items-center justify-center gap-1.5"
              >
                <ArrowDownLeft className="w-4 h-4" />
                <span>Deposit Funds</span>
              </button>

              <button
                type="button"
                onClick={() => setShowActionModal('withdraw')}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center justify-center gap-1.5"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Withdrawal</span>
              </button>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            
            {/* Portfolio Value */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-blue-900/50">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between mb-1">
                <span>Total Portfolio Value</span>
                <Wallet className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl font-extrabold font-mono text-white">$12,450.80</div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">Illustrative balance</div>
            </div>

            {/* Available Balance */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-blue-900/50">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between mb-1">
                <span>Available Balance</span>
                <Layers className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-2xl font-extrabold font-mono text-white">$3,210.40</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1">Ready for allocation</div>
            </div>

            {/* Active Investment */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-blue-900/50">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between mb-1">
                <span>Active Investment</span>
                <Activity className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl font-extrabold font-mono text-cyan-300">$9,240.40</div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">Engaged in prediction models</div>
            </div>

            {/* Daily Performance */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/60 to-slate-950 border border-cyan-500/30">
              <div className="text-xs font-mono text-cyan-300 flex items-center justify-between mb-1">
                <span>Daily Performance</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold font-mono text-emerald-400">+1.48%</div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">Today's simulated metric</div>
            </div>

          </div>

          {/* Chart & Live Activity Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Performance Chart Section */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/70 border border-blue-900/50 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Performance Trajectory</h4>
                  <p className="text-xs text-slate-400">Algorithmic Simulation (Demo Data)</p>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  {(['24H', '7D', '30D', 'ALL'] as const).map((tf) => (
                    <button
                      key={tf}
                      type="button"
                      onClick={() => setActiveTimeframe(tf)}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono font-semibold transition-colors ${
                        activeTimeframe === tf
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic SVG Mock Graph */}
              <div className="h-44 w-full relative pt-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dashGraphGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Grid horizontal lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="#1e293b" strokeDasharray="4 4" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="#1e293b" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#1e293b" strokeDasharray="4 4" />

                  {/* Area Fill */}
                  <path
                    d="M0,90 Q80,75 140,55 T260,35 T340,25 T400,10 L400,120 L0,120 Z"
                    fill="url(#dashGraphGrad)"
                  />

                  {/* High Contrast Line */}
                  <path
                    d="M0,90 Q80,75 140,55 T260,35 T340,25 T400,10"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="3"
                  />

                  {/* Ping dot */}
                  <circle cx="400" cy="10" r="4" fill="#00F0FF" />
                  <circle cx="400" cy="10" r="8" fill="#00F0FF" opacity="0.3" className="animate-ping" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-900">
                <span>Start: $10,000.00</span>
                <span className="text-cyan-400">Current: $12,450.80 (+24.5%)</span>
              </div>
            </div>

            {/* Live Trading Activity Stream */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950/70 border border-blue-900/50 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-400" /> Algorithmic Activity
                </h4>
                <span className="text-[10px] font-mono text-slate-400">Live Log</span>
              </div>

              <div className="space-y-2.5">
                {mockTrades.map((t) => (
                  <div
                    key={t.id}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono flex items-start justify-between"
                  >
                    <div className="space-y-0.5">
                      <div className="text-white font-semibold text-[11px] leading-tight">
                        {t.market}
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-2">
                        <span>{t.strategy}</span>
                        <span>•</span>
                        <span>{t.timestamp}</span>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-emerald-400 font-bold text-xs">
                        {t.simulatedReturn}
                      </div>
                      <div className="text-[9px] text-slate-400 uppercase">
                        {t.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Direct CTA */}
          <div className="mt-8 pt-6 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              To activate real algorithmic trading on your own account, connect via the official platform:
            </span>
            <a
              id="dashboard-cta-btn"
              href={OFFICIAL_REFERRAL_URL}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,102,255,0.4)]"
            >
              <span>Access Official VyRobot Platform</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Modal for Deposit / Withdrawal preview */}
        {showActionModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="max-w-md w-full p-6 rounded-3xl bg-[#081533] border border-cyan-500/50 shadow-2xl text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-cyan-500/40 flex items-center justify-center mx-auto text-cyan-300">
                {showActionModal === 'deposit' ? <ArrowDownLeft className="w-7 h-7" /> : <ArrowUpRight className="w-7 h-7" />}
              </div>
              <h3 className="text-xl font-bold text-white">
                {showActionModal === 'deposit' ? 'Account Deposit Protocol' : 'Withdrawal Processing'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {showActionModal === 'deposit'
                  ? 'Deposits are handled directly inside the official VyRobot platform via verified payment gateways. Create or access your account to proceed.'
                  : 'Withdrawals are processed according to the official VyRobot terms, available balances, and platform conditions.'}
              </p>
              <div className="pt-2 space-y-2">
                <a
                  href={OFFICIAL_REFERRAL_URL}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 block shadow-lg"
                >
                  Proceed to Official VyRobot Platform
                </a>
                <button
                  type="button"
                  onClick={() => setShowActionModal(null)}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-400 hover:text-white bg-slate-900/60"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
