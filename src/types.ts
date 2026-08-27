export interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface InvestmentPlan {
  id: string;
  name: string;
  tagline: string;
  minAmount: number;
  maxAmount: number | null;
  reportedDailyRate: string;
  minDailyPercent: number;
  maxDailyPercent: number;
  cycleDays: number;
  riskLevel: 'Moderate' | 'Balanced' | 'High Opportunity';
  riskColor: string;
  features: string[];
  popular?: boolean;
  notes: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'trading' | 'account' | 'risk';
}

export interface TechStep {
  id: number;
  title: string;
  description: string;
  iconName: string;
  details: string;
}

export interface SimulatedTrade {
  id: string;
  timestamp: string;
  market: string;
  strategy: string;
  type: 'PREDICTION_LONG' | 'PREDICTION_SHORT' | 'ARBITRAGE_CAPTURE' | 'ALGO_SETTLE';
  confidence: number;
  simulatedReturn: string;
  status: 'EXECUTED' | 'MONITORING' | 'SETTLED';
}

export interface MarketTicker {
  symbol: string;
  name: string;
  price: string;
  change24h: string;
  isPositive: boolean;
  type: 'crypto' | 'prediction';
}
