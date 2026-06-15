import { useRef, useEffect, useState } from 'react';
import './Ecosystem.css';

const steps = [
  { id: 1, icon: 'bi-person-plus-fill', title: 'Student Registration', desc: 'Onboard students with smart profiles', color: '#2563EB', tag: 'Start' },
  { id: 2, icon: 'bi-book-fill', title: 'Training', desc: 'AI-curated learning paths & resources', color: '#3B82F6', tag: 'Learn' },
  { id: 3, icon: 'bi-check2-circle', title: 'Attendance', desc: 'Automated smart attendance tracking', color: '#6366F1', tag: 'Track' },
  { id: 4, icon: 'bi-bar-chart-fill', title: 'Assessment', desc: 'AI-powered tests & evaluations', color: '#7C3AED', tag: 'Evaluate' },
  { id: 5, icon: 'bi-file-earmark-person-fill', title: 'Resume Building', desc: 'ATS-optimized AI resume creation', color: '#8B5CF6', tag: 'Build' },
  { id: 6, icon: 'bi-bullseye', title: 'Placement Eligibility', desc: 'Smart readiness scoring & analysis', color: '#06B6D4', tag: 'Qualify' },
  { id: 7, icon: 'bi-send-fill', title: 'Job Application', desc: 'One-click apply to matched jobs', color: '#0EA5E9', tag: 'Apply' },
  { id: 8, icon: 'bi-camera-video-fill', title: 'Interview', desc: 'AI interview prep & scheduling', color: '#059669', tag: 'Prepare' },
  { id: 9, icon: 'bi-trophy-fill', title: 'Selection', desc: 'Offer tracking and acceptance', color: '#34D399', tag: 'Win' },
  { id: 10, icon: 'bi-rocket-takeoff-fill', title: 'Joining', desc: 'Onboarding and career launch', color: '#059669', tag: 'Launch' },
];

export default function Ecosystem() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-in, .eco-step');
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ecosystem-section" id="ecosystem" ref={sectionRef}>
      <div className="mesh-bg">
        <div className="mesh-orb orb-2" style={{ opacity: 0.06 }} />
      </div>
      <div className="eco-inner">
        <div className="eco-header fade-in">
          <div className="section-badge">◈ Student Journey</div>
          <h2 className="section-title">The TalentOS <span className="gradient-text">Ecosystem Flow</span></h2>
          <p className="section-subtitle">
            A seamless 10-step journey from registration to career launch — all powered by intelligence.
          </p>
        </div>

        <div className="eco-flow">
          <div className="eco-steps-grid">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className={`eco-step ${i === activeStep ? 'eco-step-active' : ''} ${i < activeStep ? 'eco-step-done' : ''}`}
                onClick={() => setActiveStep(i)}
                style={{ '--step-color': step.color }}
              >
                <div className="eco-step-number">{String(step.id).padStart(2, '0')}</div>
                <div className="eco-step-icon"><i className={`bi ${step.icon}`} /></div>
                <div className="eco-step-content">
                  <div className="eco-step-tag">{step.tag}</div>
                  <div className="eco-step-title">{step.title}</div>
                  <div className="eco-step-desc">{step.desc}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className="eco-connector">
                    <div className={`eco-line ${i < activeStep ? 'filled' : ''}`} style={i < activeStep ? { background: step.color } : {}} />
                    <span className="eco-arrow">↓</span>
                  </div>
                )}
                <div className="eco-step-glow" />
              </div>
            ))}
          </div>

          {/* Right side detail */}
          <div className="eco-detail glass fade-in">
              <div className="eco-detail-header">
                <span className="eco-detail-num">{String(steps[activeStep].id).padStart(2, '0')}</span>
                <span className="eco-detail-icon"><i className={`bi ${steps[activeStep].icon}`} /></span>
              </div>
            <h3 className="eco-detail-title" style={{ color: steps[activeStep].color }}>
              {steps[activeStep].title}
            </h3>
            <p className="eco-detail-desc">{steps[activeStep].desc}</p>
            <div className="eco-progress">
              <div className="eco-progress-label">
                <span>Journey Progress</span>
                <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="eco-progress-bar">
                <div
                  className="eco-progress-fill"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%`, background: steps[activeStep].color }}
                />
              </div>
            </div>
            <div className="eco-step-pills">
              {steps.map((s, i) => (
                <button
                  key={i}
                  className={`eco-pill ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'done' : ''}`}
                  style={i === activeStep ? { background: s.color } : i < activeStep ? { background: s.color + '40' } : {}}
                  onClick={() => setActiveStep(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
