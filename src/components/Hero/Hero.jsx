import { useEffect, useRef } from 'react';
import './Hero.css';

const FloatingCard = ({ className, children }) => (
  <div className={`floating-card glass ${className}`}>{children}</div>
);

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,179,237,${p.opacity})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37,99,235,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="hero grid-bg" id="home">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Background orbs */}
      <div className="mesh-bg">
        <div className="mesh-orb orb-1" />
        <div className="mesh-orb orb-2" />
        <div className="mesh-orb orb-3" />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="status-dot" />
            <span>AI-Powered Platform · Now Live</span>
          </div>

          <h1 className="hero-title">
            Transform Training Into
            <span className="gradient-text"> Successful Careers</span>
          </h1>

          <p className="hero-subtitle">
            Manage Students, Trainers, Assessments, Placements, Recruitment,
            Analytics, and Career Growth from one intelligent platform.
          </p>

          <div className="hero-actions">
            <a href="#demo" className="btn-primary">
              <i className="bi bi-rocket-takeoff-fill" />
              <span>Start Free Trial</span>
            </a>
            <a href="#features" className="btn-secondary">
              <i className="bi bi-play-circle-fill" />
              <span>Book Live Demo</span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon"><i className="bi bi-check-circle-fill" /></span>
              <span>No credit card required</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon"><i className="bi bi-check-circle-fill" /></span>
              <span>14-day free trial</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon"><i className="bi bi-check-circle-fill" /></span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Client logos */}
          <div className="client-logos">
            <p className="logos-label">Trusted by 500+ institutes</p>
            <div className="logos-row">
              {['EduTech Pro', 'SkillHub', 'CareerPath', 'TechLearn', 'GrowthLabs'].map(name => (
                <div key={name} className="logo-pill glass">{name}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating dashboard */}
        <div className="hero-visual">
          <div className="dashboard-frame glass">
            <div className="dash-header">
              <div className="dash-dots">
                <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              </div>
              <span className="dash-title">TalentOS Dashboard</span>
              <div className="dash-status"><span className="status-dot" /><span>Live</span></div>
            </div>

            {/* Mini dashboard inside */}
            <div className="dash-body">
              <div className="dash-stats">
                {[
                  { label: 'Active Students', value: '2,847', change: '+12%', color: '#2563EB' },
                  { label: 'Placements', value: '348', change: '+8%', color: '#10B981' },
                  { label: 'Assessments', value: '1,204', change: '+24%', color: '#7C3AED' },
                ].map(stat => (
                  <div key={stat.label} className="dash-stat-card glass">
                    <div className="dash-stat-bar" style={{ background: stat.color }} />
                    <div>
                      <div className="dash-stat-value" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="dash-stat-label">{stat.label}</div>
                    </div>
                    <div className="dash-stat-change success">{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div className="dash-chart glass">
                <div className="chart-label">Placement Rate (2024)</div>
                <div className="chart-bars">
                  {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 92].map((h, i) => (
                    <div key={i} className="chart-bar-wrap">
                      <div
                        className="chart-bar"
                        style={{
                          height: `${h}%`,
                          background: i === 11 ? 'linear-gradient(to top, #2563EB, #06B6D4)' : 'rgba(37,99,235,0.3)',
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="chart-months">
                  {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <FloatingCard className="float-card-1">
            <div className="fc-icon" style={{ background: 'rgba(5,150,105,0.12)', color: '#059669' }}><i className="bi bi-graph-up-arrow" /></div>
            <div>
              <div className="fc-value">94.2%</div>
              <div className="fc-label">Placement Rate</div>
            </div>
          </FloatingCard>

          <FloatingCard className="float-card-2">
            <div className="fc-icon" style={{ background: 'rgba(37,99,235,0.12)', color: '#2563EB' }}><i className="bi bi-mortarboard-fill" /></div>
            <div>
              <div className="fc-value">1,04,218</div>
              <div className="fc-label">Students Trained</div>
            </div>
          </FloatingCard>

          <FloatingCard className="float-card-3">
            <div className="fc-icon" style={{ background: 'rgba(124,58,237,0.12)', color: '#7C3AED' }}><i className="bi bi-lightning-charge-fill" /></div>
            <div>
              <div className="fc-value">AI Ready</div>
              <div className="fc-label">Resume Analysis</div>
            </div>
          </FloatingCard>

          <FloatingCard className="float-card-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="fc-icon" style={{ background: 'rgba(8,145,178,0.12)', color: '#0891B2' }}><i className="bi bi-buildings-fill" /></div>
              <div>
                <div className="fc-value" style={{ fontSize: 13 }}>1,000+ Recruiters</div>
                <div className="fc-label">Active on platform</div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
