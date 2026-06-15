import { useRef, useEffect } from 'react';
import './WhyTalentOS.css';

const before = [
  { icon: 'bi-table', text: 'Excel sheets everywhere', pain: true },
  { icon: 'bi-hand-raised-fill', text: 'Manual attendance tracking', pain: true },
  { icon: 'bi-emoji-frown-fill', text: 'Placement confusion & delays', pain: true },
  { icon: 'bi-plug-fill', text: 'Multiple disconnected systems', pain: true },
  { icon: 'bi-telephone-fill', text: 'Manual recruiter coordination', pain: true },
  { icon: 'bi-graph-down-arrow', text: 'No real-time analytics', pain: true },
];

const after = [
  { icon: 'bi-robot', text: 'AI-powered full automation', gain: true },
  { icon: 'bi-bullseye', text: 'Smart attendance with insights', gain: true },
  { icon: 'bi-rocket-takeoff-fill', text: 'Placement intelligence engine', gain: true },
  { icon: 'bi-globe2', text: 'One unified platform for all', gain: true },
  { icon: 'bi-people-fill', text: '1,000+ recruiter ecosystem', gain: true },
  { icon: 'bi-graph-up-arrow', text: 'Live analytics dashboard', gain: true },
];

export default function WhyTalentOS() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="why-section dot-bg" ref={sectionRef} id="why">
      <div className="mesh-bg">
        <div className="mesh-orb orb-2" style={{ opacity: 0.08 }} />
      </div>

      <div className="why-inner">
        <div className="why-header fade-in">
          <div className="section-badge">⚡ The TalentOS Difference</div>
          <h2 className="section-title">Before & After <span className="gradient-text">TalentOS</span></h2>
          <p className="section-subtitle">
            See how institutes transform their operations from scattered chaos
            to a powerful, unified intelligence platform.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Before */}
          <div className="comparison-panel before-panel fade-in-left">
            <div className="panel-header before-header">
              <span className="panel-tag">Before</span>
              <h3>The Old Way</h3>
              <p>Struggling with disconnected tools and manual work</p>
            </div>
            <div className="panel-items">
              {before.map((item, i) => (
                <div key={i} className={`panel-item fade-in delay-${i + 1}`}>
                  <div className="item-icon before-icon"><i className={`bi ${item.icon}`} /></div>
                  <span className="item-text">{item.text}</span>
                  <span className="item-x"><i className="bi bi-x-circle-fill" /></span>
                </div>
              ))}
            </div>
            <div className="panel-footer before-footer">
              <div className="before-score">
                <span className="score-num">34%</span>
                <span className="score-label">Avg. Placement Rate</span>
              </div>
            </div>
          </div>

          {/* Arrow divider */}
          <div className="comparison-divider fade-in">
            <div className="divider-arrow">
              <div className="arrow-line" />
              <div className="arrow-icon">⟶</div>
              <div className="arrow-label gradient-text">TalentOS</div>
            </div>
          </div>

          {/* After */}
          <div className="comparison-panel after-panel fade-in-right">
            <div className="panel-header after-header">
              <span className="panel-tag success">After</span>
              <h3>The Smart Way</h3>
              <p>AI-powered operations with unified intelligence</p>
            </div>
            <div className="panel-items">
              {after.map((item, i) => (
                <div key={i} className={`panel-item after-item fade-in delay-${i + 1}`}>
                  <div className="item-icon after-icon"><i className={`bi ${item.icon}`} /></div>
                  <span className="item-text">{item.text}</span>
                  <span className="item-check"><i className="bi bi-check-circle-fill" /></span>
                </div>
              ))}
            </div>
            <div className="panel-footer after-footer">
              <div className="after-score">
                <span className="score-num gradient-text">94%</span>
                <span className="score-label">Avg. Placement Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="why-stats fade-in">
          {[
            { value: '3x', label: 'Faster placements', color: '#2563EB' },
            { value: '60%', label: 'Less admin work', color: '#7C3AED' },
            { value: '2.5x', label: 'More recruiter connections', color: '#06B6D4' },
            { value: '99.9%', label: 'Platform uptime', color: '#10B981' },
          ].map((s, i) => (
            <div key={i} className="why-stat glass">
              <div className="why-stat-val" style={{ color: s.color }}>{s.value}</div>
              <div className="why-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
