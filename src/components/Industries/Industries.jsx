import { useRef, useEffect } from 'react';
import './Industries.css';

const industries = [
  { icon: 'bi-building-fill', title: 'Training Institutes', desc: 'End-to-end management for vocational and skill training centers', count: '200+', color: '#2563EB' },
  { icon: 'bi-mortarboard-fill', title: 'Colleges', desc: 'Complete campus placement and academic management platform', count: '150+', color: '#7C3AED' },
  { icon: 'bi-bank2', title: 'Universities', desc: 'Large-scale multi-department student and placement systems', count: '50+', color: '#0891B2' },
  { icon: 'bi-laptop-fill', title: 'EdTech Companies', desc: 'Scale online learning with powerful placement integration', count: '80+', color: '#059669' },
  { icon: 'bi-lightning-charge-fill', title: 'Skill Development', desc: 'Government and private skill development center management', count: '120+', color: '#D97706' },
  { icon: 'bi-buildings-fill', title: 'Corporate Academies', desc: 'Internal training and talent management for enterprises', count: '40+', color: '#DB2777' },
];

export default function Industries() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-in, .ind-card');
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="industries-section" id="industries" ref={sectionRef}>
      <div className="glow-line" />
      <div className="ind-inner">
        <div className="ind-header fade-in">
          <div className="section-badge"><i className="bi bi-globe2" /> Industries We Serve</div>
          <h2 className="section-title">Built For Every <span className="gradient-text">Education Vertical</span></h2>
          <p className="section-subtitle">
            From small training institutes to large universities — TalentOS adapts to your scale and needs.
          </p>
        </div>

        <div className="ind-grid">
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`ind-card glass fade-in delay-${(i % 3) + 1}`}
              style={{ '--ind-color': ind.color }}
            >
              <div className="ind-top">
                <div className="ind-icon" style={{ background: ind.color + '15', border: `1px solid ${ind.color}25` }}>
                <i className={`bi ${ind.icon}`} style={{ fontSize: 20, color: ind.color }} />
              </div>
                <div className="ind-count" style={{ color: ind.color }}>{ind.count}</div>
              </div>
              <h3 className="ind-title">{ind.title}</h3>
              <p className="ind-desc">{ind.desc}</p>
              <div className="ind-bar" style={{ background: ind.color }} />
              <a href="#demo" className="ind-link" style={{ color: ind.color }}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="glow-line" />
    </section>
  );
}
