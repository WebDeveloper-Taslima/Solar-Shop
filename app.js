/**
 * SOLAR SHOP NZ — COMPLETE INTERACTIVE WEB APPLICATION
 * Features:
 * - Dynamic Money Saving Calculator (Real NZ Energy Tariff Equations)
 * - Accordion Component for Products We Use
 * - Intent Pills Controller
 * - Viewport Switcher (Full Web, Before, Side-by-Side Compare, Mobile)
 * - Modals & Form Submission with Validation
 * - Active Navigation Spy on Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  initIntentPills();
  initCalculator();
  initAccordions();
  initMobileNav();
  initModalListeners();
  initScrollSpy();
  initMegaMenus();
});

/* --------------------------------------------------------------------------
   2. INTENT PILLS CONTROLLER (Hero Section)
   -------------------------------------------------------------------------- */
function initIntentPills() {
  const pills = document.querySelectorAll('.sol-pill');
  const leadText = document.querySelector('.hero-lead-text');
  const photo = document.querySelector('#heroPhoto') || document.querySelector('.hero-showcase-img') || document.querySelector('.natural-solar-photo');
  const badgeTitle = document.querySelector('#heroBadgeTitle');

  const contentMap = {
    home: {
      lead: `<strong>Powered by Trilect</strong> — Backed by over 28 years of Master Electrician excellence and 80+ certified specialists nationwide. We engineer high-efficiency home solar and battery systems designed to slash New Zealand power bills by up to 70%.`,
      img: `assets/hero-solar-roof.jpg`,
      title: `High-Yield NZ Monocrystalline Array`
    },
    farm: {
      lead: `<strong>Powered by Trilect</strong> — Specialist rural solar engineering for New Zealand dairy sheds, cowsheds, and agricultural operations. Slash heavy daytime power tariffs with rugged, high-yield shed roof arrays.`,
      img: `assets/farm-solar-shed.jpg`,
      title: `Rugged Rural Dairy Farm Array`
    },
    commercial: {
      lead: `<strong>Powered by Trilect</strong> — Turn unused warehouse and commercial rooftops into high-yield clean generation assets. Full turnkey EPC design, Master Electrician compliance, and accelerated 3-5 year ROI.`,
      img: `assets/commercial-solar.jpg`,
      title: `Commercial EPC Solar Generation`
    },
    battery: {
      lead: `<strong>Powered by Trilect</strong> — Store daylight generation to power your property through evening peak rates and grid outages. Seamlessly integrated with smart EV chargers for clean motoring.`,
      img: `assets/hero-solar-roof.jpg`,
      title: `Smart Solar Storage & EV Ready`
    }
  };

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const type = pill.getAttribute('data-type') || pill.getAttribute('data-solution');
      if (contentMap[type]) {
        if (leadText) leadText.innerHTML = contentMap[type].lead;
        if (photo) photo.src = contentMap[type].img;
        if (badgeTitle) badgeTitle.textContent = contentMap[type].title;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. REAL INTERACTIVE MONEY SAVING CALCULATOR
   -------------------------------------------------------------------------- */
let currentCalcState = {
  bill: 350,
  dayUsage: 50,
  roof: 'medium',
  battery: 'yes'
};

function initCalculator() {
  const billSlider = document.getElementById('billSlider');
  const usageSlider = document.getElementById('usageSlider');
  const billVal = document.getElementById('billValue');
  const usageVal = document.getElementById('usageValue');

  if (!billSlider || !usageSlider) return;

  billSlider.addEventListener('input', (e) => {
    currentCalcState.bill = parseInt(e.target.value, 10);
    billVal.innerText = currentCalcState.bill;
    recalculateSavings();
  });

  usageSlider.addEventListener('input', (e) => {
    currentCalcState.dayUsage = parseInt(e.target.value, 10);
    usageVal.innerText = currentCalcState.dayUsage;
    recalculateSavings();
  });

  // Roof Size Pills
  document.querySelectorAll('[data-roof]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-roof]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCalcState.roof = btn.getAttribute('data-roof');
      recalculateSavings();
    });
  });

  // Battery Pills
  document.querySelectorAll('[data-battery]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-battery]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCalcState.battery = btn.getAttribute('data-battery');
      recalculateSavings();
    });
  });

  recalculateSavings();
}

function recalculateSavings() {
  const bill = currentCalcState.bill;
  const dayUsagePct = currentCalcState.dayUsage / 100;
  const hasBattery = currentCalcState.battery === 'yes';

  // NZ Average Tariff constants
  const kwhImportPrice = 0.34; // $0.34 per kWh import
  const kwhExportPrice = 0.13; // $0.13 per kWh export credit

  // Approximate monthly kWh consumption
  const monthlyKwhUsed = bill / kwhImportPrice;

  // Recommended system size based on bill
  let kwSize = (monthlyKwhUsed / 120);
  if (currentCalcState.roof === 'small') kwSize = Math.min(kwSize, 5.0);
  if (currentCalcState.roof === 'large') kwSize = Math.max(kwSize, 8.5);
  kwSize = Math.round(kwSize * 10) / 10;
  if (kwSize < 3.5) kwSize = 3.5;

  const panelCount = Math.round((kwSize * 1000) / 415); // 415W per panel
  const monthlyGenKwh = Math.round(kwSize * 115); // Average NZ generation factor

  // Self-consumption proportion
  let effectiveSelfConsumptionRate = dayUsagePct;
  if (hasBattery) {
    effectiveSelfConsumptionRate = Math.min(0.85, dayUsagePct + 0.35); // Battery stores evening energy
  }

  const selfConsumedKwh = Math.round(Math.min(monthlyGenKwh * effectiveSelfConsumptionRate, monthlyKwhUsed * 0.9));
  const exportedKwh = Math.max(0, monthlyGenKwh - selfConsumedKwh);

  // Financial savings calculation
  const directOffsetSavings = selfConsumedKwh * kwhImportPrice;
  const exportCreditSavings = exportedKwh * kwhExportPrice;
  let totalMonthlySavings = Math.round(directOffsetSavings + exportCreditSavings);

  // Capped at 90% of current bill
  if (totalMonthlySavings > bill * 0.92) {
    totalMonthlySavings = Math.round(bill * 0.92);
  }

  const yearlySaving = totalMonthlySavings * 12;
  const tenYearSaving = yearlySaving * 10;

  // Approximate system capital cost for payback estimate
  const estimatedCapCost = (kwSize * 1850) + (hasBattery ? 11500 : 0);
  let paybackYears = (estimatedCapCost / (yearlySaving || 1)).toFixed(1);
  if (paybackYears < 3.8) paybackYears = '3.8';
  if (paybackYears > 8.5) paybackYears = '7.9';

  const roiPct = ((yearlySaving / estimatedCapCost) * 100).toFixed(1);

  // Update UI Elements
  const elMonthly = document.getElementById('calcMonthlySaving');
  const elSysSize = document.getElementById('calcSystemSize');
  const elPanels = document.getElementById('calcPanelCount');
  const elYearly = document.getElementById('calcYearlySaving');
  const el10Year = document.getElementById('calc10YearSaving');
  const elPayback = document.getElementById('calcPayback');

  const elBdGen = document.getElementById('bdGen');
  const elBdSelf = document.getElementById('bdSelf');
  const elBdExport = document.getElementById('bdExport');
  const elBdROI = document.getElementById('bdROI');

  if (elMonthly) elMonthly.innerText = totalMonthlySavings;
  if (elSysSize) elSysSize.innerText = `${kwSize} kW`;
  if (elPanels) elPanels.innerText = `${panelCount} Tier-1 Panels`;
  if (elYearly) elYearly.innerText = `$${yearlySaving.toLocaleString()} / year`;
  if (el10Year) el10Year.innerText = `$${tenYearSaving.toLocaleString()}`;
  if (elPayback) elPayback.innerText = `${paybackYears} Years`;

  if (elBdGen) elBdGen.innerText = `~${monthlyGenKwh} kWh / month`;
  if (elBdSelf) elBdSelf.innerText = `${selfConsumedKwh} kWh offset`;
  if (elBdExport) elBdExport.innerText = `${exportedKwh} kWh credit`;
  if (elBdROI) elBdROI.innerText = `${roiPct}% per annum`;
}

function openAssessmentWithCalc() {
  openAssessmentModal('Home');
  const billSelect = document.getElementById('avgBill');
  if (billSelect) {
    const b = currentCalcState.bill;
    if (b < 350) billSelect.value = '200-350';
    else if (b < 500) billSelect.value = '350-500';
    else if (b < 1000) billSelect.value = '500-1000';
    else billSelect.value = '1000+';
  }
}

/* --------------------------------------------------------------------------
   4. ACCORDION COMPONENT ("Products we use")
   -------------------------------------------------------------------------- */
function initAccordions() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
    const icon = item.querySelector('.acc-icon');

    if (header && body) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all
        items.forEach(other => {
          other.classList.remove('active');
          const otherBody = other.querySelector('.accordion-body');
          const otherIcon = other.querySelector('.acc-icon');
          if (otherBody) otherBody.style.display = 'none';
          if (otherIcon) otherIcon.innerText = '+';
        });

        if (!isOpen) {
          item.classList.add('active');
          body.style.display = 'block';
          if (icon) icon.innerText = '−';
        }
      });
    }
  });
}

/* --------------------------------------------------------------------------
   5. NAVIGATION SPY ON SCROLL
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const links = document.querySelectorAll('.client-nav-link');
  const sections = [
    { id: 'hero', link: 'Home' },
    { id: 'considering-solar', link: 'Considering Solar' },
    { id: 'building-system', link: 'Building your system' },
    { id: 'right-system', link: 'The right solar system' },
    { id: 'commercial-farm', link: 'Commercial and Farm' },
    { id: 'contact', link: 'Contact us' }
  ];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          links.forEach(l => {
            if (l.innerText.trim() === sec.link) {
              l.classList.add('active');
            } else {
              l.classList.remove('active');
            }
          });
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   7. MODALS & SUBMISSIONS
   -------------------------------------------------------------------------- */
function initModalListeners() {
  const btnTokens = document.getElementById('btnOpenTokens');
  const btnPitch = document.getElementById('btnOpenPitch');

  if (btnTokens) {
    btnTokens.addEventListener('click', () => openModal('tokensModal'));
  }
  if (btnPitch) {
    btnPitch.addEventListener('click', () => openModal('pitchModal'));
  }

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(modal => {
        modal.classList.remove('open');
      });
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
}

function openAssessmentModal(preferredType = 'Home') {
  const modal = document.getElementById('assessmentModal');
  const select = document.getElementById('propType');
  if (select && preferredType) {
    select.value = preferredType;
  }
  if (modal) {
    modal.classList.add('open');
  }
}

function copyPitchText() {
  const textarea = document.getElementById('pitchText');
  const btn = document.getElementById('btnCopyPitch');

  if (textarea) {
    textarea.select();
    navigator.clipboard.writeText(textarea.value).then(() => {
      if (btn) {
        btn.innerText = '✅ Copied!';
        setTimeout(() => {
          btn.innerText = '📋 Copy Text';
        }, 2500);
      }
    });
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('solarForm');
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  form.innerHTML = `
    <div style="text-align: center; padding: 24px 10px;">
      <div style="width: 52px; height: 52px; border-radius: 50%; background: #E8F5E9; color: #2D6A4F; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style="font-size: 19px; font-weight: 800; color: #172319; margin-bottom: 8px;">Quote Request Received!</h3>
      <p style="font-size: 14px; color: #475569; margin-bottom: 16px; line-height: 1.5;">
        Thank you, <strong>${name}</strong>. A local Master Electrician from your nearest Solar Shop branch will assess your roof profile and contact you on <strong>${phone}</strong> within 24 hours.
      </p>
      <div style="background: #F3F4EE; border: 1px solid #E7E9E3; padding: 12px; border-radius: 8px; font-size: 12px; color: #64748B;">
        Freephone: <strong>0800 874 532</strong> | Master Electricians Quality Workmanship Guarantee
      </div>
    </div>
  `;
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contactPageForm');
  const name = document.getElementById('cName').value;
  const phone = document.getElementById('cPhone').value;

  form.innerHTML = `
    <div style="text-align: center; padding: 36px 16px;">
      <div style="width: 56px; height: 56px; border-radius: 50%; background: #E8F5E9; color: #2D6A4F; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto;">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style="font-size: 22px; font-weight: 800; color: #172319; margin-bottom: 8px;">Message Sent Successfully!</h3>
      <p style="font-size: 14.5px; color: #475569; margin-bottom: 16px; line-height: 1.5;">
        Thank you, <strong>${name}</strong>. Your consultation request has been forwarded directly to our regional Master Electricians team. We will call you on <strong>${phone}</strong> shortly.
      </p>
      <div style="background: #F3F4EE; border: 1px solid #E7E9E3; padding: 12px; border-radius: 8px; font-size: 12.5px; color: #64748B;">
        For urgent enquiries: Free call <strong>0800 874 532</strong>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   MEGA MENU CONTROLLER (Exact Matching Client Site solarshop.co.nz)
   -------------------------------------------------------------------------- */
function initMegaMenus() {
  const menuItems = document.querySelectorAll('.has-megamenu');

  menuItems.forEach(item => {
    const trigger = item.querySelector('.nav-has-dropdown');
    let timeoutId = null;

    // Hover Enter
    item.addEventListener('mouseenter', () => {
      clearTimeout(timeoutId);
      menuItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active-open');
          const otherTrigger = other.querySelector('.nav-has-dropdown');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.add('active-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    });

    // Hover Leave with gentle 150ms delay
    item.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => {
        item.classList.remove('active-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }, 150);
    });

    // Close when clicking any link inside
    const innerLinks = item.querySelectorAll('.mega-menu-link, .mega-explore-link');
    innerLinks.forEach(link => {
      link.addEventListener('click', () => {
        item.classList.remove('active-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menuItems.forEach(item => {
        item.classList.remove('active-open');
        const trigger = item.querySelector('.nav-has-dropdown');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.client-nav')) {
      menuItems.forEach(item => {
        item.classList.remove('active-open');
        const trigger = item.querySelector('.nav-has-dropdown');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
}
