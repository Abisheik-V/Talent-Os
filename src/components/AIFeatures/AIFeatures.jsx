import { useRef, useEffect } from 'react';
import './AIFeatures.css';

const aiFeatures = [
  {
    title: 'AI Resume Analyzer',
    icon: 'bi-cpu-fill',
    color: '#2563EB',
    steps: ['Upload Resume', 'Analyze Skills', 'Score & Improve'],
    desc: 'Instantly analyzes resumes against job requirements, scores ATS compatibility, and provides actionable improvement suggestions.',
    tags: ['NLP', 'ATS Scoring', 'Skill Matching'],
    stat: '87%',
    statLabel: 'Higher Interview Rate',
  },
  {
    title: 'AI Placement Predictor',
    icon: 'bi-bullseye',
    color: '#7C3AED',
    steps: ['Attendance Data', 'Assessment Scores', 'Skills & Projects', 'Placement Score'],
    desc: 'Uses machine learning on 50+ data points to accurately predict placement probability and suggest personalized improvement plans.',
    tags: ['ML Model', 'Predictive AI', 'Career Readiness'],
    stat: '94%',
    statLabel: 'Prediction Accuracy',
  },
  {
    title: 'AI Career Guidance',
    icon: 'bi-stars',
    color: '#0891B2',
    steps: ['Skill Assessment', 'Market Analysis', 'Career Roadmap', 'Certifications'],
    desc: 'Personalized career roadmaps powered by real-time job market data, guiding students to the right certifications and skill paths.',
    tags: ['Career AI', 'Market Data', 'Learning Paths'],
    stat: '10K+',
    statLabel: 'Career Paths Mapped',
  },
];

export default function AIFeatures() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .ai-card');
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="ai-section" id="ai" ref={sectionRef}>
      <div className="ai-bg-gradient" />
      <div className="mesh-bg">
        <div className="mesh-orb orb-1" style={{ opacity: 0.1 }} />
        <div className="mesh-orb orb-3" style={{ opacity: 0.08 }} />
      </div>

      <div className="ai-inner">
        <div className="ai-header fade-in">
          <div className="section-badge" style={{ background: 'rgba(124,58,237,0.1)', borderColor: 'rgba(124,58,237,0.3)', color: '#6D28D9' }}>
            <i className="bi bi-robot" /> AI Intelligence
          </div>
          <h2 className="section-title">
            Powered by <span className="gradient-text">Artificial Intelligence</span>
          </h2>
          <p className="section-subtitle">
            Three breakthrough AI systems that transform how institutes manage talent — from raw potential to placed professionals.
          </p>
        </div>

        <div className="ai-grid">
          {aiFeatures.map((feat, i) => (
            <div key={i} className={`ai-card glass fade-in delay-${i + 1}`} style={{ '--ai-color': feat.color }}>
              {/* Card header */}
              <div className="ai-card-header">
                <div className="ai-icon" style={{ background: feat.color + '18', border: `1px solid ${feat.color}30` }}>
                  <i className={`bi ${feat.icon}`} style={{ fontSize: 28, color: feat.color }} />
                  <div className="ai-icon-ring" style={{ borderColor: feat.color + '40' }} />
                </div>
                <div className="ai-card-stat">
                  <span className="ai-stat-val" style={{ color: feat.color }}>{feat.stat}</span>
                  <span className="ai-stat-label">{feat.statLabel}</span>
                </div>
              </div>

              <h3 className="ai-card-title">{feat.title}</h3>
              <p className="ai-card-desc">{feat.desc}</p>

              {/* Flow steps */}
              <div className="ai-flow">
                {feat.steps.map((step, j) => (
                  <div key={j} className="ai-flow-item">
                    <div className="ai-flow-dot" style={{ background: feat.color, animationDelay: `${j * 0.5}s` }} />
                    <span className="ai-flow-label">{step}</span>
                    {j < feat.steps.length - 1 && (
                      <div className="ai-flow-line" style={{ background: `linear-gradient(90deg, ${feat.color}, transparent)` }} />
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="ai-tags">
                {feat.tags.map((t, j) => (
                  <span key={j} className="ai-tag" style={{ background: feat.color + '15', color: feat.color, borderColor: feat.color + '30' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="ai-card-glow" style={{ background: feat.color }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="ai-cta fade-in">
          <div className="ai-cta-inner glass">
            <div className="ai-cta-icon"><i className="bi bi-robot" style={{ fontSize: 28, color: '#7C3AED' }} /></div>
            <div>
              <h3>Experience the Power of AI</h3>
              <p>See how TalentOS AI transforms your institute's placement outcomes in real time.</p>
            </div>
            <a href="#demo" className="btn-primary">
              <span>Start AI Demo</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
