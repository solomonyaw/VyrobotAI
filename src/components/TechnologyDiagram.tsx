import React, { useState } from 'react';
import { TECH_STEPS, OFFICIAL_REFERRAL_URL } from '../constants';
import { Database, Cpu, GitMerge, Target, Zap, Activity, ArrowDown, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const iconMap = {
  Database: Database,
  Cpu: Cpu,
  GitMerge: GitMerge,
  Target: Target,
  Zap: Zap,
  Activity: Activity,
};

export const TechnologyDiagram: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const activeStepData = TECH_STEPS.find((s) => s.id === selectedStep) || TECH_STEPS[0];
  const IconComponent = iconMap[activeStepData.iconName as keyof typeof iconMap] || Database;

  return (
    <section id="technology" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient background styling */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300 font-mono uppercase">
            <Cpu className="w-3.5 h-3.5" /> Conceptual Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technology Behind{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Automated Trading
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Automated trading systems can process market information and apply predefined algorithms much faster and more consistently than manual trading. VyRobot is presented as a platform built around this automated approach.
          </p>
        </div>

        {/* Interactive Technology Pipeline Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
          
          {/* Left Column: 6 Flow Nodes */}
          <div className="lg:col-span-7 space-y-3">
            {TECH_STEPS.map((step, idx) => {
              const NodeIcon = iconMap[step.iconName as keyof typeof iconMap] || Database;
              const isSelected = selectedStep === step.id;

              return (
                <div key={step.id}>
                  <div
                    onClick={() => setSelectedStep(step.id)}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-950/90 to-[#091a42] border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.25)] translate-x-2'
                        : 'bg-[#06112c]/70 border-blue-900/40 hover:border-blue-500/40 hover:bg-[#08173d]/60'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Indicator */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                          isSelected
                            ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(0,240,255,0.7)]'
                            : 'bg-slate-900 border border-blue-900 text-slate-400'
                        }`}
                      >
                        <NodeIcon className="w-5 h-5" />
                      </div>

                      {/* Title & Short info */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-cyan-400">0{step.id}</span>
                          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {isSelected && (
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                          Active Node
                        </span>
                      )}
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                    </div>
                  </div>

                  {/* Connecting Arrow between nodes */}
                  {idx < TECH_STEPS.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Deep-Dive Inspection Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0a1f4d] to-[#040d24] border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Sparkles className="w-32 h-32 text-cyan-300" />
            </div>

            {/* Stage Header */}
            <div className="flex items-center justify-between pb-4 border-b border-blue-900/80 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  Node 0{activeStepData.id} Inspection
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Algorithmic Stage</span>
            </div>

            {/* Icon & Title */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 mb-6 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              <div className="w-full h-full bg-[#071536] rounded-[14px] flex items-center justify-center text-cyan-300">
                <IconComponent className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
              {activeStepData.title}
            </h3>

            <p className="text-sm text-cyan-100/90 leading-relaxed mb-6 font-medium">
              {activeStepData.description}
            </p>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-950 mb-6">
              <div className="text-xs font-mono text-cyan-400 mb-1.5 flex items-center gap-1.5 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" /> Technical Execution Detail:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {activeStepData.details}
              </p>
            </div>

            <a
              href={OFFICIAL_REFERRAL_URL}
              className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors block border border-cyan-500/30"
            >
              Connect to VyRobot Trading Engine
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
