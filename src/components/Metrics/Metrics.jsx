import { useState, useEffect, useRef } from 'react';
import './Metrics.css';

const metrics = [
  { value: 500, suffix: '+', label: 'Institutes', sublabel: 'Across 20 states', icon: 'bi-building-fill', color: '#2563EB' },
  { value: 100000, suffix: '+', label: 'Students', sublabel: 'Active learners', icon: 'bi-mortarboard-fill', color: '#7C3AED' },
  { value: 10000, suffix: '+', label: 'Placements', sublabel: 'Successful hires', icon: 'bi-briefcase-fill', color: '#059669' },
  { value: 1000, suffix: '+', label: 'Recruiters', sublabel: 'Top companies', icon: 'bi-buildings-fill', color: '#0891B2' },
];

function AnimatedCounter({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  const fmt = (n) => n >= 1000 ? (n / 1000).toFixed(n >= 100000 ? 0 : 0) + (n >= 100000 ? ',000' : 'K') : n.toString();
  return <span>{fmt(count)}{suffix}</span>;
}

export default function Metrics() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="metrics-section" ref={ref}>
      <div className="glow-line" />
      <div className="metrics-inner">
        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <div key={i} className={`metric-card glass fade-in delay-${i + 1}`} style={{ '--accent-color': m.color }}>
              <div className="metric-icon-wrap">
                <i className={`bi ${m.icon} metric-icon`} style={{ color: m.color }} />
                <div className="metric-icon-glow" style={{ background: m.color }} />
              </div>
              <div className="metric-body">
                <div className="metric-value" style={{ color: m.color }}>
                  <AnimatedCounter target={m.value} suffix={m.suffix} active={active} />
                </div>
                <div className="metric-label">{m.label}</div>
                <div className="metric-sub">{m.sublabel}</div>
              </div>
              <div className="metric-line" style={{ background: m.color }} />
            </div>
          ))}
        </div>

        <div className="metrics-visual">
          <div className="pulse-ring" />
          <div className="metrics-center-text">
            <div className="center-stat">
              <span className="gradient-text" style={{ fontSize: 48, fontWeight: 800, fontFamily: 'var(--font-display)' }}>98%</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      <div className="glow-line" />
    </section>
  );
}
