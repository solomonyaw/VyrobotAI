import { FAQItem, InvestmentPlan, MarketTicker, TechStep } from './types';

// Official referral link specified by user
export const OFFICIAL_REFERRAL_URL = 'https://vyrobot.io?ref=C8C858AF';
export const OFFICIAL_REF_CODE = 'C8C858AF';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Investment Plans', href: '#investment-plans' },
  { name: 'Features', href: '#features' },
  { name: 'Technology', href: '#technology' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Risk Disclaimer', href: '#risk-disclaimer' },
];

export const MARKET_TICKERS: MarketTicker[] = [
  { symbol: 'BTC/USD', name: 'Bitcoin Market', price: '$94,820.50', change24h: '+2.45%', isPositive: true, type: 'crypto' },
  { symbol: 'ETH/USD', name: 'Ethereum Market', price: '$2,780.20', change24h: '+1.80%', isPositive: true, type: 'crypto' },
  { symbol: 'SOL/USD', name: 'Solana Market', price: '$188.40', change24h: '+4.12%', isPositive: true, type: 'crypto' },
  { symbol: 'PRED-BTC-Q1', name: 'BTC $100k Target', price: '68.4%', change24h: '+5.20%', isPositive: true, type: 'prediction' },
  { symbol: 'PRED-FED-RATE', name: 'Rate Decision Index', price: '82.1%', change24h: '-0.90%', isPositive: false, type: 'prediction' },
  { symbol: 'PRED-TECH-AI', name: 'AI Sector Momentum', price: '74.5%', change24h: '+3.15%', isPositive: true, type: 'prediction' },
];

export const TRUST_FEATURES = [
  {
    title: 'AI-Powered Strategy',
    description: 'Automated algorithms analyze available market opportunities according to predefined trading strategies.',
    icon: 'Cpu',
    tag: 'Algorithmic Model',
  },
  {
    title: 'Automated Execution',
    description: 'The system is designed to execute trading activity automatically instead of requiring users to manually place every trade.',
    icon: 'Zap',
    tag: 'Automated Execution',
  },
  {
    title: 'Simple User Experience',
    description: 'Users can access the platform through a straightforward account and investment interface.',
    icon: 'Layers',
    tag: 'Intuitive Interface',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Create Your Account',
    description: 'Register through the official VyRobot platform to create your personal account.',
    details: 'Quick registration via the official platform with referral link to unlock full dashboard access.',
    ctaText: 'Register on VyRobot',
    ctaLink: OFFICIAL_REFERRAL_URL,
    icon: 'UserPlus',
  },
  {
    stepNumber: '02',
    title: 'Fund Your Account',
    description: 'Deposit funds using the payment methods supported by the platform.',
    details: 'Fund your active balance according to current payment options and deposit guidelines verified on the platform.',
    icon: 'Wallet',
  },
  {
    stepNumber: '03',
    title: 'Select an Investment Option',
    description: 'Review the available investment options and choose one that matches your risk tolerance and available capital.',
    details: 'Explore available allocation tiers suited to your strategy and capital parameters.',
    icon: 'Sliders',
  },
  {
    stepNumber: '04',
    title: 'Monitor Your Results',
    description: 'Track account activity, trading results and withdrawals through your platform dashboard.',
    details: 'View live execution reports, daily returns, and manage balance allocations directly in your dashboard.',
    icon: 'LineChart',
  },
];

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    tagline: 'Accessible entry into automated prediction markets and algorithmic trading.',
    minAmount: 25,
    maxAmount: 199,
    reportedDailyRate: 'Around 5% to 7% daily',
    minDailyPercent: 5.0,
    maxDailyPercent: 7.0,
    cycleDays: 180,
    riskLevel: 'Moderate',
    riskColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    popular: false,
    features: [
      'Accessible entry deposit from $25 – $199',
      'Reported daily return: Around 5% to 7% daily',
      '180-Day duration cycle (renewal required afterward)',
      'Automated prediction-market strategy access',
      'Continuous algorithmic execution & real-time monitoring',
    ],
    notes: 'Runs on a 180-day duration cycle and requires renewal afterward. Verify current platform terms.',
  },
  {
    id: 'growth',
    name: 'Growth Plan',
    tagline: 'Enhanced capital allocation with optimized multi-vector algorithmic execution.',
    minAmount: 200,
    maxAmount: 2499,
    reportedDailyRate: 'Around 7% to 8% daily',
    minDailyPercent: 7.0,
    maxDailyPercent: 8.0,
    cycleDays: 180,
    riskLevel: 'Balanced',
    riskColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    popular: true,
    features: [
      'Target capital allocation: $200 – $2,499',
      'Reported daily return: Around 7% to 8% daily',
      '180-Day duration cycle (renewal required afterward)',
      'Multi-market prediction arbitrage & probability delta',
      'Priority strategy execution & analytics breakdown',
    ],
    notes: 'Runs on a 180-day duration cycle and requires renewal afterward. Verify current platform terms.',
  },
  {
    id: 'ultra',
    name: 'Ultra Plan',
    tagline: 'Maximum algorithmic scale and top-tier prediction market capacity.',
    minAmount: 2500,
    maxAmount: null,
    reportedDailyRate: 'Up to 9.5% daily',
    minDailyPercent: 8.5,
    maxDailyPercent: 9.5,
    cycleDays: 180,
    riskLevel: 'High Opportunity',
    riskColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10',
    popular: false,
    features: [
      'High-tier allocation: $2,500 and above',
      'Reported daily return: Up to 9.5% daily',
      '180-Day duration cycle (renewal required afterward)',
      'Full spectrum algorithmic prediction routing',
      'Maximum frequency execution & dedicated monitoring',
    ],
    notes: 'Runs on a 180-day duration cycle and requires renewal afterward. Verify current platform terms.',
  },
];

export const PLATFORM_FEATURES = [
  {
    id: 'automated-trading',
    title: 'Automated Trading',
    description: 'Designed to automate trading activity according to programmed strategies without needing 24/7 manual oversight.',
    icon: 'Bot',
    highlight: 'Continuous Execution',
  },
  {
    id: 'ai-algorithms',
    title: 'AI & Algorithms',
    description: 'Uses algorithmic systems as part of its automated trading approach to parse market patterns rapidly.',
    icon: 'Sparkles',
    highlight: 'Data-Driven Rules',
  },
  {
    id: 'prediction-markets',
    title: 'Prediction Markets',
    description: 'Focuses on opportunities associated with global prediction-market trading and probability shifts.',
    icon: 'TrendingUp',
    highlight: 'Probability Models',
  },
  {
    id: 'simple-dashboard',
    title: 'Simple Dashboard',
    description: 'Presents the concept of monitoring trading activity, portfolio values, and returns through an accessible dashboard.',
    icon: 'LayoutDashboard',
    highlight: 'Transparent View',
  },
  {
    id: 'flexible-investments',
    title: 'Flexible Investment Options',
    description: 'Presents available investment levels based only on currently verified platform information, starting from $50.',
    icon: 'ShieldCheck',
    highlight: 'Custom Tiers',
  },
  {
    id: 'withdrawal-access',
    title: 'Withdrawal Access',
    description: 'Users can request withdrawals according to the platform\'s current rules, verified balances, and platform conditions.',
    icon: 'ArrowDownToLine',
    highlight: 'Platform Policy',
  },
];

export const TECH_STEPS: TechStep[] = [
  {
    id: 1,
    title: 'Market Data',
    description: 'Continuous ingestion of global prediction market feeds, asset pricing, and volume signals.',
    iconName: 'Database',
    details: 'Aggregates real-time order books, event probability shifts, and liquidity levels across multiple market sources.',
  },
  {
    id: 2,
    title: 'Data Analysis',
    description: 'Algorithmic parsing of volatility metrics, statistical discrepancies, and historical patterns.',
    iconName: 'Cpu',
    details: 'Filters out market noise through mathematical models to evaluate viable statistical advantages.',
  },
  {
    id: 3,
    title: 'Algorithmic Strategy',
    description: 'Matching processed market indicators against predefined automated trading rules.',
    iconName: 'GitMerge',
    details: 'Applies predefined strategy constraints including position sizing, risk thresholds, and probability targets.',
  },
  {
    id: 4,
    title: 'Prediction / Decision',
    description: 'Generating calculated trade signals with rigorous confidence ratings and entry/exit criteria.',
    iconName: 'Target',
    details: 'Calculates expected value outcomes before executing positions to protect against unexpected slippage.',
  },
  {
    id: 5,
    title: 'Trade Execution',
    description: 'Rapid automated dispatch of orders to target liquidity pools and prediction markets.',
    iconName: 'Zap',
    details: 'Executes trades automatically in fractions of a second, avoiding human hesitation or manual delays.',
  },
  {
    id: 6,
    title: 'Portfolio Monitoring',
    description: 'Real-time tracking of active positions, dynamic risk adjustment, and balance updates.',
    iconName: 'Activity',
    details: 'Continuously monitors portfolio balances, logging all execution outcomes transparently in the user dashboard.',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'what-is-vyrobot',
    question: 'What is VyRobot?',
    answer: 'VyRobot is presented as an automated trading platform focused on algorithmic trading and prediction-market opportunities. It enables users to participate in algorithmic trading without requiring manual chart analysis or manual execution.',
    category: 'general',
  },
  {
    id: 'how-does-it-work',
    question: 'How does automated trading work?',
    answer: 'Automated trading uses programmed strategies and market information to execute trading decisions according to predefined rules, analyzing data and executing orders faster and more consistently than manual trading.',
    category: 'trading',
  },
  {
    id: 'manual-trading',
    question: 'Do I need to trade manually?',
    answer: 'No. The platform is designed around automated trading, reducing the need for users to manually execute every trade. Once an investment tier is selected, the algorithmic system manages execution according to its programmed rules.',
    category: 'trading',
  },
  {
    id: 'how-much-invest',
    question: 'How much can I invest and what are the plans?',
    answer: 'VyRobot offers tiered investment plans starting from $25: the Starter Plan ($25 to $199 with around 5% to 7% daily), the Growth Plan ($200 to $2,499 with around 7% to 8% daily), and the Ultra Plan ($2,500 and above with up to 9.5% daily). Plans generally run on a 180-day duration cycle and require renewal afterward.',
    category: 'account',
  },
  {
    id: 'are-returns-guaranteed',
    question: 'Are returns guaranteed?',
    answer: 'No. Trading returns are not guaranteed. Cryptocurrency trading and automated prediction-market systems involve substantial market and financial risk. Past or reported performance should never be interpreted as a guarantee of future profits.',
    category: 'risk',
  },
  {
    id: 'withdraw-funds',
    question: 'Can I withdraw my funds?',
    answer: 'Withdrawals depend on the platform\'s current rules, available balance, processing requirements, and applicable conditions. Users should check the current withdrawal policy, minimums, and processing timelines directly on the VyRobot platform.',
    category: 'account',
  },
  {
    id: 'payment-methods',
    question: 'What payment methods are supported?',
    answer: 'Only payment methods currently confirmed by the official VyRobot platform are supported. Check the deposit section of your official platform account upon registration to view currently active payment channels.',
    category: 'account',
  },
  {
    id: 'is-vyrobot-risk-free',
    question: 'Is VyRobot risk-free?',
    answer: 'No. Automated trading does not eliminate market, platform, liquidity, operational or systemic risks. Capital loss is possible, and users should only allocate funds they are comfortable putting at risk.',
    category: 'risk',
  },
  {
    id: 'where-to-register',
    question: 'Where can I register?',
    answer: 'You can register directly through the official VyRobot platform using the referral link: https://vyrobot.io?ref=C8C858AF to access the verified registration portal.',
    category: 'general',
  },
];
