import { useState, useRef, useEffect } from 'react';
import './Features.css';

const features = [
  {
    id: 'students',
    icon: 'bi-person-fill',
    title: 'Student Management',
    color: '#2563EB',
    desc: 'Complete student lifecycle management from enrollment to placement.',
    points: ['Smart student profiles & portfolios', 'Automated attendance tracking', 'Real-time progress analytics', 'AI-driven skill gap analysis', 'Parent/guardian portal access'],
    metrics: [{ label: 'Students Managed', value: '100K+' }, { label: 'Profile Accuracy', value: '99.8%' }],
  },
  {
    id: 'trainers',
    icon: 'bi-person-video3',
    title: 'Trainer Management',
    color: '#7C3AED',
    desc: 'Empower trainers with intelligent batch and curriculum tools.',
    points: ['Multi-batch management dashboard', 'Trainer performance analytics', 'Curriculum builder & library', 'Assessment creation studio', 'Time & schedule management'],
    metrics: [{ label: 'Trainers Active', value: '5,000+' }, { label: 'Batch Efficiency', value: '+40%' }],
  },
  {
    id: 'assessment',
    icon: 'bi-clipboard2-check-fill',
    title: 'Assessment Engine',
    color: '#0891B2',
    desc: 'AI-powered assessments with instant auto-evaluation and insights.',
    points: ['MCQ, coding & descriptive tests', 'AI question generation engine', 'Anti-cheat & proctoring tools', 'Instant auto-grading system', 'Detailed performance reports'],
    metrics: [{ label: 'Tests Conducted', value: '2M+' }, { label: 'AI Accuracy', value: '97.5%' }],
  },
  {
    id: 'placement',
    icon: 'bi-briefcase-fill',
    title: 'Placement Management',
    color: '#059669',
    desc: 'End-to-end placement pipeline with smart matching intelligence.',
    points: ['Visual hiring pipeline board', 'AI-powered candidate matching', 'Interview scheduling & tracking', 'Placement analytics & forecasting', 'Offer letter management'],
    metrics: [{ label: 'Placements Done', value: '10K+' }, { label: 'Avg. Package', value: '₹5.2L' }],
  },
  {
    id: 'recruiter',
    icon: 'bi-buildings-fill',
    title: 'Recruiter Portal',
    color: '#D97706',
    desc: 'Give recruiters a dedicated workspace to find and hire talent faster.',
    points: ['Company profile & job posting', 'Advanced candidate search', 'AI resume screening & scoring', 'Interview management tools', 'Talent pipeline management'],
    metrics: [{ label: 'Active Recruiters', value: '1,000+' }, { label: 'Hiring Speed', value: '3x faster' }],
  },
  {
    id: 'resume',
    icon: 'bi-file-earmark-person-fill',
    title: 'AI Resume Builder',
    color: '#DB2777',
    desc: 'Build ATS-optimized resumes that get students hired faster.',
    points: ['AI content suggestions', 'ATS optimization scoring', 'Multiple premium templates', 'One-click PDF export', 'LinkedIn profile sync'],
    metrics: [{ label: 'Resumes Built', value: '50K+' }, { label: 'Interview Rate', value: '+68%' }],
  },
];

export default function Features() {
  const [active, setActive] = useState('students');
  const sectionRef = useRef(null);
  const activeFeature = features.find(f => f.id === active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="features-section" id="features" ref={sectionRef}>
      <div className="mesh-bg">
        <div className="mesh-orb orb-1" style={{ opacity: 0.07 }} />
        <div className="mesh-orb orb-3" style={{ opacity: 0.06 }} />
      </div>

      <div className="features-inner">
        <div className="features-header fade-in">
          <div className="section-badge">✦ Platform Features</div>
          <h2 className="section-title">Everything You Need, <span className="gradient-text">All in One Place</span></h2>
          <p className="section-subtitle">
            A complete suite of intelligent tools designed for modern institutes, trainers, and students.
          </p>
        </div>

        {/* Feature tabs */}
        <div className="features-tabs fade-in">
          {features.map(f => (
            <button
              key={f.id}
              className={`feat-tab ${active === f.id ? 'active' : ''}`}
              onClick={() => setActive(f.id)}
              style={active === f.id ? { '--tab-color': f.color, borderColor: f.color + '40', backgroundColor: f.color + '12' } : {}}
            >
              <i className={`bi ${f.icon} feat-tab-icon`} style={active === f.id ? { color: f.color } : {}} />
              <span>{f.title}</span>
            </button>
          ))}
        </div>

        {/* Feature detail */}
        <div className="feature-detail" key={active}>
          <div className="feat-detail-left fade-in-left visible">
            <div className="feat-icon-large" style={{ background: activeFeature.color + '18', border: `1px solid ${activeFeature.color}30` }}>
              <i className={`bi ${activeFeature.icon}`} style={{ fontSize: 32, color: activeFeature.color }} />
              <div className="feat-icon-glow" style={{ background: activeFeature.color }} />
            </div>
            <h3 className="feat-detail-title">{activeFeature.title}</h3>
            <p className="feat-detail-desc">{activeFeature.desc}</p>

            <ul className="feat-points">
              {activeFeature.points.map((p, i) => (
                <li key={i} className={`feat-point delay-${i + 1}`}>
                  <span className="feat-check" style={{ background: activeFeature.color + '20', color: activeFeature.color }}><i className="bi bi-check-lg" /></span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="feat-metrics">
              {activeFeature.metrics.map((m, i) => (
                <div key={i} className="feat-metric glass">
                  <div className="feat-metric-val" style={{ color: activeFeature.color }}>{m.value}</div>
                  <div className="feat-metric-label">{m.label}</div>
                </div>
              ))}
            </div>

            <a href="#demo" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              <span>Explore {activeFeature.title}</span>
              <span>→</span>
            </a>
          </div>

          {/* Feature visual */}
          <div className="feat-detail-right fade-in-right visible">
            <div className="feat-preview glass">
              <div className="feat-preview-header">
                <div className="fp-dots">
                  <span /><span /><span />
                </div>
                <span className="fp-title">{activeFeature.title} Module</span>
              </div>
              <div className="feat-preview-body">
                {/* Simulated module UI */}
                <div className="fp-topbar">
                  <div className="fp-search skeleton" style={{ width: '60%', height: 32 }} />
                  <div className="fp-btn-row">
                    <div className="skeleton" style={{ width: 80, height: 32, borderRadius: 8 }} />
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: activeFeature.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>+</div>
                  </div>
                </div>
                <div className="fp-table">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="fp-row glass" style={{ animationDelay: `${i * 0.05}s` }}>
                      <div className="fp-avatar" style={{ background: activeFeature.color + '20', color: activeFeature.color }}>
                        {['AS','BK','CR','DM','EP'][i]}
                      </div>
                      <div className="fp-row-info">
                        <div className="skeleton" style={{ width: `${100 + i * 20}px`, height: 10, borderRadius: 5 }} />
                        <div className="skeleton" style={{ width: `${60 + i * 10}px`, height: 8, borderRadius: 4, marginTop: 5 }} />
                      </div>
                      <div className="fp-badge" style={{ background: activeFeature.color + '18', color: activeFeature.color, borderColor: activeFeature.color + '30' }}>
                        {['Active','Pending','Placed','Training','Review'][i]}
                      </div>
                      <div className="fp-score" style={{ color: activeFeature.color }}>
                        {[92, 78, 96, 85, 71][i]}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="fp-footer">
                  <div className="fp-pagination">
                    {[1,2,3,'...', 12].map((p, i) => (
                      <span key={i} className={`fp-page ${p === 1 ? 'active' : ''}`} style={p === 1 ? { background: activeFeature.color } : {}}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
