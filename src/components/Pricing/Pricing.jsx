import { useState, useRef, useEffect } from 'react';
import './Pricing.css';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'Perfect for small institutes getting started',
    monthlyPrice: 4999,
    yearlyPrice: 47990,
    color: '#2563EB',
    popular: false,
    features: [
      { text: 'Up to 200 students', included: true },
      { text: '5 trainer accounts', included: true },
      { text: 'Basic attendance tracking', included: true },
      { text: 'MCQ assessment engine', included: true },
      { text: 'Job board access', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'AI Resume Builder', included: false },
      { text: 'AI Placement Predictor', included: false },
      { text: 'Recruiter portal', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    desc: 'The complete platform for growing institutes',
    monthlyPrice: 12999,
    yearlyPrice: 124790,
    color: '#7C3AED',
    popular: true,
    features: [
      { text: 'Up to 2,000 students', included: true },
      { text: 'Unlimited trainers', included: true },
      { text: 'Smart attendance + analytics', included: true },
      { text: 'Full assessment engine + AI', included: true },
      { text: 'Recruiter portal (50 recruiters)', included: true },
      { text: 'Advanced analytics dashboard', included: true },
      { text: 'AI Resume Builder', included: true },
      { text: 'AI Placement Predictor', included: true },
      { text: 'Placement pipeline management', included: true },
      { text: 'Priority support (24/7)', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    desc: 'Unlimited power for large organizations',
    monthlyPrice: null,
    yearlyPrice: null,
    color: '#06B6D4',
    popular: false,
    features: [
      { text: 'Unlimited students', included: true },
      { text: 'Unlimited trainers', included: true },
      { text: 'Enterprise attendance suite', included: true },
      { text: 'White-label assessment engine', included: true },
      { text: 'Unlimited recruiter network', included: true },
      { text: 'Custom analytics & reports', included: true },
      { text: 'Full AI feature suite', included: true },
      { text: 'AI Career Guidance engine', included: true },
      { text: 'Custom integrations & API', included: true },
      { text: 'Dedicated success manager', included: true },
    ],
  },
];

const fmt = (n) => '₹' + n.toLocaleString('en-IN');

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-in');
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pricing-section" id="pricing" ref={sectionRef}>
      <div className="mesh-bg">
        <div className="mesh-orb orb-2" style={{ opacity: 0.08 }} />
      </div>

      <div className="pricing-inner">
        <div className="pricing-header fade-in">
          <div className="section-badge">◇ Pricing Plans</div>
          <h2 className="section-title">Simple, <span className="gradient-text">Transparent Pricing</span></h2>
          <p className="section-subtitle">
            Start free, scale as you grow. No hidden fees, no surprises — just results.
          </p>

          {/* Toggle */}
          <div className="pricing-toggle fade-in">
            <span className={!yearly ? 'toggle-active' : ''}>Monthly</span>
            <button className={`toggle-switch ${yearly ? 'on' : ''}`} onClick={() => setYearly(!yearly)}>
              <span className="toggle-thumb" />
            </button>
            <span className={yearly ? 'toggle-active' : ''}>
              Annual
              <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`pricing-card glass fade-in delay-${i + 1} ${plan.popular ? 'pricing-popular' : ''}`}
              style={{ '--plan-color': plan.color }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span><i className="bi bi-star-fill" style={{ color: '#F59E0B' }} /> Most Popular</span>
                </div>
              )}

              <div className="plan-header">
                <div className="plan-name" style={{ color: plan.color }}>{plan.name}</div>
                <p className="plan-desc">{plan.desc}</p>
              </div>

              <div className="plan-price">
                {plan.monthlyPrice ? (
                  <>
                    <span className="price-currency">₹</span>
                    <span className="price-amount">
                      {yearly
                        ? Math.round(plan.yearlyPrice / 12).toLocaleString('en-IN')
                        : plan.monthlyPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="price-period">/mo</span>
                    {yearly && (
                      <div className="price-yearly-note">
                        {fmt(plan.yearlyPrice)} billed annually
                      </div>
                    )}
                  </>
                ) : (
                  <span className="price-custom">Custom</span>
                )}
              </div>

              <a
                href="#demo"
                className={`plan-cta ${plan.popular ? 'plan-cta-primary' : 'plan-cta-outline'}`}
                style={plan.popular ? { background: `linear-gradient(135deg, ${plan.color}, #2563EB)` } : { borderColor: plan.color + '50', color: plan.color }}
              >
                {plan.monthlyPrice ? 'Start Free Trial' : 'Contact Sales'}
              </a>

              <div className="plan-features">
                {plan.features.map((f, j) => (
                  <div key={j} className={`plan-feature ${f.included ? '' : 'feat-missing'}`}>
                    <span className="feat-icon" style={f.included ? { color: plan.color } : {}}>
                      {f.included ? <i className="bi bi-check-circle-fill" /> : <i className="bi bi-x-circle" />}
                    </span>
                    {f.text}
                  </div>
                ))}
              </div>

              {plan.popular && <div className="popular-glow" style={{ background: plan.color }} />}
            </div>
          ))}
        </div>

        {/* ROI Callout */}
        <div className="roi-banner glass fade-in">
          <div className="roi-icon"><i className="bi bi-cash-coin" style={{ fontSize: 28, color: '#D97706' }} /></div>
          <div>
            <h3>Average ROI: 380% in the first year</h3>
            <p>Institutes save an average of ₹8L annually in operational costs while tripling placement outcomes.</p>
          </div>
          <a href="#demo" className="btn-primary">
            <span>Calculate Your ROI</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
