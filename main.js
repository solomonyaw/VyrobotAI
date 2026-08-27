/**
 * VyRobot - Main JavaScript Engine
 * Pure Vanilla JavaScript (No frameworks, pure DOM & Browser APIs)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Official Constants
  const REFERRAL_CODE = 'C8C858AF';
  const OFFICIAL_URL = `https://vyrobot.io?ref=${REFERRAL_CODE}`;

  // ==========================================
  // 1. NAVBAR & MOBILE MENU
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navbar = document.getElementById('navbar');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ==========================================
  // 2. SCROLL EVENTS (Navbar, Floating CTA, Back-to-Top)
  // ==========================================
  const floatingBar = document.getElementById('floatingBar');
  const btnScrollTop = document.getElementById('btnScrollTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar style on scroll
    if (navbar) {
      if (scrollY > 40) {
        navbar.style.borderBottomColor = 'rgba(0, 240, 255, 0.3)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
      } else {
        navbar.style.borderBottomColor = 'rgba(59, 130, 246, 0.15)';
        navbar.style.boxShadow = 'none';
      }
    }

    // Floating bar visibility
    if (floatingBar) {
      if (scrollY > 450) {
        floatingBar.classList.add('visible');
      } else {
        floatingBar.classList.remove('visible');
      }
    }
  });

  if (btnScrollTop) {
    btnScrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 3. COPY REFERRAL CODE & CELEBRATION
  // ==========================================
  const copyBtns = document.querySelectorAll('.btn-copy-ref');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(REFERRAL_CODE).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
        btn.style.borderColor = '#00f0ff';
        btn.style.color = '#00f0ff';

        triggerConfetti();

        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2500);
      }).catch(() => {
        alert(`Referral code: ${REFERRAL_CODE}`);
      });
    });
  });

  function triggerConfetti() {
    if (typeof window.confetti === 'function') {
      window.confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85 }
      });
    }
  }

  // Bind confetti to all main CTA buttons
  const ctaLinks = document.querySelectorAll('.cta-celebrate');
  ctaLinks.forEach(link => {
    link.addEventListener('click', () => {
      triggerConfetti();
    });
  });

  // ==========================================
  // 4. LIVE TERMINAL SIMULATOR
  // ==========================================
  const terminalLogContainer = document.getElementById('terminalLogs');
  const metricTrades = document.getElementById('metricTrades');
  const metricConfidence = document.getElementById('metricConfidence');
  const metricLatency = document.getElementById('metricLatency');
  const metricDelta = document.getElementById('metricDelta');

  let tradesCount = 142890;
  const sampleEvents = [
    { market: 'BTC/USDT 5m Delta', type: 'ARBITRAGE EXEC', profit: '+1.42%', color: 'pos' },
    { market: 'ETH/USD PolyPredict', type: 'PROBABILITY SPREAD', profit: '+0.88%', color: 'pos' },
    { market: 'SOL/USDC Momentum', type: 'QUANT SCAN', profit: '+2.10%', color: 'pos' },
    { market: 'POL/USDT Predict', type: 'MICRO DRIFT', profit: '+0.65%', color: 'pos' },
    { market: 'BNB Multi-Node', type: 'ORDER ROUTE', profit: '+1.15%', color: 'pos' }
  ];

  if (terminalLogContainer) {
    setInterval(() => {
      // Pick random event
      const ev = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      const logRow = document.createElement('div');
      logRow.className = 'log-entry';
      logRow.innerHTML = `
        <span class="log-time">[${timeStr}]</span>
        <span class="log-tag">${ev.type}</span>
        <span>${ev.market}</span>
        <span class="log-val ${ev.color}">${ev.profit}</span>
      `;

      terminalLogContainer.prepend(logRow);
      if (terminalLogContainer.children.length > 5) {
        terminalLogContainer.removeChild(terminalLogContainer.lastChild);
      }

      // Update terminal metrics
      tradesCount += Math.floor(Math.random() * 4) + 1;
      if (metricTrades) metricTrades.textContent = tradesCount.toLocaleString();
      if (metricConfidence) metricConfidence.textContent = (98.4 + (Math.random() * 1.2)).toFixed(1) + '%';
      if (metricLatency) metricLatency.textContent = (3.2 + (Math.random() * 1.5)).toFixed(1) + 'ms';
      if (metricDelta) metricDelta.textContent = '+0.' + (Math.floor(Math.random() * 8) + 2) + '%';
    }, 2800);
  }

  // ==========================================
  // 5. TECHNOLOGY PIPELINE INTERACTIVE INSPECTOR
  // ==========================================
  const techSteps = [
    {
      id: 'ingestion',
      stepNum: '01',
      title: 'Real-Time Market Ingestion',
      category: 'Data Feeds',
      description: 'Sub-millisecond WebSockets stream probability spreads, order books, and outcome deltas across prediction platforms and DEX/CEX order books.',
      latency: '2.4ms',
      activeData: '14,200 data points / sec',
      status: 'Active Streaming'
    },
    {
      id: 'delta',
      stepNum: '02',
      title: 'Probability Delta Analysis',
      category: 'Algorithmic Filtering',
      description: 'Proprietary quantitative algorithms identify mispriced prediction contracts and cross-venue probability differences in real time.',
      latency: '1.8ms',
      activeData: 'Cross-platform arbitrage filter',
      status: 'Continuous Validation'
    },
    {
      id: 'scoring',
      stepNum: '03',
      title: 'Risk & Volatility Scoring',
      category: 'Risk Engine',
      description: 'Every trade candidate is evaluated through real-time value-at-risk (VaR) matrices, liquidity caps, and historical event volatility limits.',
      latency: '0.9ms',
      activeData: 'Max position sizing: Dynamic',
      status: 'Shield Engaged'
    },
    {
      id: 'execution',
      stepNum: '04',
      title: 'Sub-Second Algorithmic Execution',
      category: 'Routing Core',
      description: 'Automated order dispatch executes position entries with smart slippage protection and optimal routing across supported liquidity pools.',
      latency: '3.1ms',
      activeData: 'Smart order router V4',
      status: 'Executing 24/7'
    },
    {
      id: 'monitoring',
      stepNum: '05',
      title: 'Automated Position Management',
      category: 'Position Tracking',
      description: 'Dynamic take-profit targets, trailing stops, and hedge balancing manage market shifts continuously without manual intervention.',
      latency: '1.2ms',
      activeData: 'Continuous rebalance logic',
      status: 'Real-time Guard'
    },
    {
      id: 'reporting',
      stepNum: '06',
      title: 'Ledger Audit & User Credit',
      category: 'Settlement',
      description: 'Trade outcomes and daily platform yields are securely settled, reconciled, and updated to the user dashboard on a 180-day cycle basis.',
      latency: 'Instant Sync',
      activeData: 'Audit log integrity verified',
      status: 'Synchronized'
    }
  ];

  const techButtonsContainer = document.getElementById('techButtonsContainer');
  const techInspector = document.getElementById('techInspector');

  function renderTechInspector(stepIndex) {
    const step = techSteps[stepIndex];
    if (!techInspector) return;

    techInspector.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <span class="badge badge-indigo">Node ${step.stepNum} • ${step.category}</span>
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #34d399; display: flex; align-items: center; gap: 0.35rem;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: #34d399; box-shadow: 0 0 8px #34d399;"></span>
          ${step.status}
        </span>
      </div>
      <h3 style="font-size: 1.5rem; font-weight: 800; color: #ffffff; margin-bottom: 0.75rem;">${step.title}</h3>
      <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">${step.description}</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding: 1rem; border-radius: var(--radius-lg); background-color: rgba(2, 5, 15, 0.7); border: 1px solid rgba(59, 130, 246, 0.2);">
        <div>
          <div style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--text-dim);">LATENCY BENCHMARK</div>
          <div style="font-size: 1.125rem; font-family: var(--font-mono); font-weight: 700; color: var(--cyan-accent);">${step.latency}</div>
        </div>
        <div>
          <div style="font-size: 0.7rem; font-family: var(--font-mono); color: var(--text-dim);">THROUGHPUT METRIC</div>
          <div style="font-size: 0.9rem; font-family: var(--font-mono); font-weight: 600; color: #ffffff; margin-top: 2px;">${step.activeData}</div>
        </div>
      </div>
    `;

    // Highlight button
    const buttons = techButtonsContainer.querySelectorAll('.tech-step-btn');
    buttons.forEach((btn, idx) => {
      if (idx === stepIndex) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  if (techButtonsContainer) {
    techSteps.forEach((step, idx) => {
      const btn = document.createElement('button');
      btn.className = `tech-step-btn ${idx === 0 ? 'active' : ''}`;
      btn.innerHTML = `
        <div style="display: flex; align-items: center;">
          <span class="tech-step-num">${step.stepNum}</span>
          <span class="tech-step-title">${step.title}</span>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--cyan-accent);"><polyline points="9 18 15 12 9 6"></polyline></svg>
      `;
      btn.addEventListener('click', () => {
        renderTechInspector(idx);
      });
      techButtonsContainer.appendChild(btn);
    });

    renderTechInspector(0);
  }

  // ==========================================
  // 6. INVESTMENT CALCULATOR (TIER DETECTOR & 180 DAYS)
  // ==========================================
  const calcAmountSlider = document.getElementById('calcAmount');
  const calcAmountDisplay = document.getElementById('calcAmountDisplay');
  const calcTierBadge = document.getElementById('calcTierBadge');

  const calcRateSlider = document.getElementById('calcRate');
  const calcRateDisplay = document.getElementById('calcRateDisplay');
  const calcRateRec = document.getElementById('calcRateRec');

  const calcDaysSlider = document.getElementById('calcDays');
  const calcDaysDisplay = document.getElementById('calcDaysDisplay');

  const calcCompoundCheckbox = document.getElementById('calcCompound');
  const calcModeBadge = document.getElementById('calcModeBadge');

  const outDailyVal = document.getElementById('outDailyVal');
  const outCumulativeVal = document.getElementById('outCumulativeVal');
  const outTotalVal = document.getElementById('outTotalVal');
  const outTotalGraph = document.getElementById('outTotalGraph');
  const calcSvgPath = document.getElementById('calcSvgPath');
  const calcGraphArea = document.getElementById('calcGraphArea');
  const calcCtaBtnText = document.getElementById('calcCtaBtnText');

  let currentAmount = 250;
  let currentRate = 7.0;
  let currentDays = 180;
  let isCompounding = false;

  function getMatchingTier(amount) {
    if (amount < 200) {
      return {
        name: 'Starter Plan',
        range: '$25 – $199',
        rateGuideline: '5% to 7% daily',
        defaultRate: 6.0,
        badgeClass: 'badge-emerald'
      };
    } else if (amount <= 2499) {
      return {
        name: 'Growth Plan',
        range: '$200 – $2,499',
        rateGuideline: '7% to 8% daily',
        defaultRate: 7.5,
        badgeClass: 'badge'
      };
    } else {
      return {
        name: 'Ultra Plan',
        range: '$2,500 and above',
        rateGuideline: 'Up to 9.5% daily',
        defaultRate: 9.5,
        badgeClass: 'badge-indigo'
      };
    }
  }

  function updateCalculator() {
    const tier = getMatchingTier(currentAmount);

    // Update displays
    if (calcAmountDisplay) calcAmountDisplay.textContent = `$${currentAmount.toLocaleString()}`;
    if (calcTierBadge) {
      calcTierBadge.textContent = `${tier.name} (${tier.rateGuideline})`;
      calcTierBadge.className = `badge ${tier.badgeClass}`;
    }

    if (calcRateDisplay) calcRateDisplay.textContent = `${currentRate.toFixed(1)}% / day`;
    if (calcRateRec) calcRateRec.textContent = `Recommended for ${tier.name}: ${tier.rateGuideline}`;

    if (calcDaysDisplay) calcDaysDisplay.textContent = `${currentDays} Days`;
    if (calcModeBadge) calcModeBadge.textContent = isCompounding ? 'Compounded Simulation' : 'Linear Growth Simulation';
    if (calcCtaBtnText) calcCtaBtnText.textContent = `Start with ${tier.name}`;

    // Perform math
    const rateDecimal = currentRate / 100;
    let dailyEst = 0;
    let cumulativeEst = 0;
    let totalEst = 0;

    if (isCompounding) {
      totalEst = currentAmount * Math.pow(1 + rateDecimal, currentDays);
      cumulativeEst = totalEst - currentAmount;
      dailyEst = (currentAmount * rateDecimal);
    } else {
      dailyEst = currentAmount * rateDecimal;
      cumulativeEst = dailyEst * currentDays;
      totalEst = currentAmount + cumulativeEst;
    }

    if (outDailyVal) outDailyVal.textContent = `$${dailyEst.toFixed(2)}`;
    if (outCumulativeVal) outCumulativeVal.textContent = `+$${cumulativeEst.toFixed(2)}`;
    if (outTotalVal) outTotalVal.textContent = `$${totalEst.toFixed(2)}`;
    if (outTotalGraph) outTotalGraph.textContent = `$${Math.round(totalEst).toLocaleString()}`;

    // Render dynamic SVG curve
    updateSvgGraph(currentAmount, totalEst, currentDays, isCompounding);

    // Update active quick pills
    updateQuickPills();
  }

  function updateSvgGraph(startVal, endVal, daysCount, compounding) {
    if (!calcSvgPath) return;

    const points = [];
    const stepCount = 10;
    for (let i = 0; i <= stepCount; i++) {
      const x = (i / stepCount) * 200;
      let ratio = i / stepCount;
      if (compounding) {
        ratio = Math.pow(ratio, 2.2);
      }
      const y = 35 - (ratio * 30);
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }

    const pathD = `M ${points.join(' L ')}`;
    calcSvgPath.setAttribute('d', pathD);

    if (calcGraphArea) {
      const areaD = `M 0,40 L ${points.join(' L ')} L 200,40 Z`;
      calcGraphArea.setAttribute('d', areaD);
    }
  }

  function updateQuickPills() {
    // Amount pills
    document.querySelectorAll('[data-amt]').forEach(pill => {
      const val = Number(pill.getAttribute('data-amt'));
      if (val === currentAmount) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Rate pills
    document.querySelectorAll('[data-rate]').forEach(pill => {
      const val = parseFloat(pill.getAttribute('data-rate'));
      if (Math.abs(val - currentRate) < 0.05) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Day pills
    document.querySelectorAll('[data-days]').forEach(pill => {
      const val = Number(pill.getAttribute('data-days'));
      if (val === currentDays) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // Listeners for Sliders
  if (calcAmountSlider) {
    calcAmountSlider.addEventListener('input', (e) => {
      currentAmount = Number(e.target.value);
      updateCalculator();
    });
  }

  if (calcRateSlider) {
    calcRateSlider.addEventListener('input', (e) => {
      currentRate = parseFloat(e.target.value);
      updateCalculator();
    });
  }

  if (calcDaysSlider) {
    calcDaysSlider.addEventListener('input', (e) => {
      currentDays = Number(e.target.value);
      updateCalculator();
    });
  }

  if (calcCompoundCheckbox) {
    calcCompoundCheckbox.addEventListener('change', (e) => {
      isCompounding = e.target.checked;
      updateCalculator();
    });
  }

  // Quick Amount Buttons
  document.querySelectorAll('[data-amt]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = Number(btn.getAttribute('data-amt'));
      currentAmount = val;
      if (calcAmountSlider) calcAmountSlider.value = val;
      updateCalculator();
    });
  });

  // Quick Rate Buttons
  document.querySelectorAll('[data-rate]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseFloat(btn.getAttribute('data-rate'));
      currentRate = val;
      if (calcRateSlider) calcRateSlider.value = val;
      updateCalculator();
    });
  });

  // Quick Day Buttons
  document.querySelectorAll('[data-days]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = Number(btn.getAttribute('data-days'));
      currentDays = val;
      if (calcDaysSlider) calcDaysSlider.value = val;
      updateCalculator();
    });
  });

  // Reset button
  const calcResetBtn = document.getElementById('calcResetBtn');
  if (calcResetBtn) {
    calcResetBtn.addEventListener('click', () => {
      currentAmount = 250;
      currentRate = 7.0;
      currentDays = 180;
      isCompounding = false;

      if (calcAmountSlider) calcAmountSlider.value = 250;
      if (calcRateSlider) calcRateSlider.value = 7.0;
      if (calcDaysSlider) calcDaysSlider.value = 180;
      if (calcCompoundCheckbox) calcCompoundCheckbox.checked = false;

      updateCalculator();
    });
  }

  // Initialize Calculator
  updateCalculator();

  // ==========================================
  // 7. DEMO DASHBOARD (TIMEFRAMES & MODALS)
  // ==========================================
  const timeBtns = document.querySelectorAll('.dash-time-btn');
  const dashProfitVal = document.getElementById('dashProfitVal');
  const dashRoiVal = document.getElementById('dashRoiVal');

  const timeframeData = {
    '24H': { profit: '+$142.50', roi: '+7.1%' },
    '7D': { profit: '+$997.50', roi: '+49.8%' },
    '30D': { profit: '+$4,275.00', roi: '+213.7%' },
    'ALL': { profit: '+$25,650.00', roi: '+1,282.5%' }
  };

  timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tf = btn.getAttribute('data-tf') || '24H';
      if (dashProfitVal && timeframeData[tf]) {
        dashProfitVal.textContent = timeframeData[tf].profit;
      }
      if (dashRoiVal && timeframeData[tf]) {
        dashRoiVal.textContent = timeframeData[tf].roi;
      }
    });
  });

  // Modals for Deposit & Withdraw
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function openModal(title, message) {
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.textContent = message;
    if (modalBackdrop) modalBackdrop.classList.add('open');
  }

  if (modalClose && modalBackdrop) {
    modalClose.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
    });
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
      }
    });
  }

  const btnOpenDeposit = document.getElementById('btnOpenDeposit');
  const btnOpenWithdraw = document.getElementById('btnOpenWithdraw');

  if (btnOpenDeposit) {
    btnOpenDeposit.addEventListener('click', () => {
      openModal(
        'Deposit into VyRobot',
        'To deposit funds and activate your 180-day automated algorithmic plan (Starter, Growth, or Ultra), visit the official VyRobot dashboard using your referral link.'
      );
    });
  }

  if (btnOpenWithdraw) {
    btnOpenWithdraw.addEventListener('click', () => {
      openModal(
        'VyRobot Withdrawals',
        'Withdrawal requests are processed via the official platform per your selected plan rules. Log in to your VyRobot account to initiate or review withdrawal transactions.'
      );
    });
  }

  // ==========================================
  // 8. FAQ SEARCH & CATEGORY FILTER ACCORDION
  // ==========================================
  const faqSearchInput = document.getElementById('faqSearch');
  const faqCategoryPills = document.querySelectorAll('.faq-cat-pill');
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  let activeCategory = 'all';
  let searchTerm = '';

  function filterFaqs() {
    faqItems.forEach(item => {
      const itemCat = item.getAttribute('data-cat') || 'basics';
      const qText = item.querySelector('.faq-q-text')?.textContent.toLowerCase() || '';
      const aText = item.querySelector('.faq-content')?.textContent.toLowerCase() || '';

      const matchesCat = (activeCategory === 'all' || itemCat === activeCategory);
      const matchesSearch = (!searchTerm || qText.includes(searchTerm) || aText.includes(searchTerm));

      if (matchesCat && matchesSearch) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      filterFaqs();
    });
  }

  faqCategoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      faqCategoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-cat') || 'all';
      filterFaqs();
    });
  });

  // Accordion Toggle
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close other items
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

});
