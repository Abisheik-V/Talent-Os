import { useState, useRef, useEffect } from 'react';
import './PlatformPreview.css';

const portals = [
  {
    id: 'admin',
    label: 'Admin Dashboard',
    icon: 'bi-gear-fill',
    color: '#2563EB',
    stats: [
      { label: 'Total Students', value: '2,847', icon: 'bi-mortarboard-fill', delta: '+142 this month' },
      { label: 'Active Batches', value: '38', icon: 'bi-collection-fill', delta: '+3 new' },
      { label: 'Placements', value: '348', icon: 'bi-briefcase-fill', delta: '94% rate' },
      { label: 'Revenue', value: '₹24L', icon: 'bi-cash-coin', delta: '+18% YoY' },
    ],
    chart: [60, 72, 65, 80, 78, 92, 88, 95],
    activities: [
      { text: 'New batch "Python Full Stack" created', time: '2m ago', type: 'create' },
      { text: 'Placement: Ankit Singh → TechCorp', time: '14m ago', type: 'success' },
      { text: '3 new recruiter registrations', time: '1h ago', type: 'info' },
      { text: 'Assessment "Java Mock Test" completed', time: '2h ago', type: 'done' },
    ],
  },
  {
    id: 'trainer',
    label: 'Trainer Dashboard',
    icon: 'bi-person-video3',
    color: '#7C3AED',
    stats: [
      { label: 'My Students', value: '142', icon: 'bi-people-fill', delta: 'In 4 batches' },
      { label: 'Attendance Rate', value: '87%', icon: 'bi-check2-circle', delta: '+3% this week' },
      { label: 'Assessments', value: '12', icon: 'bi-clipboard2-check-fill', delta: '3 active' },
      { label: 'Top Performer', value: '96%', icon: 'bi-trophy-fill', delta: 'Priya Sharma' },
    ],
    chart: [70, 75, 80, 72, 85, 90, 88, 93],
    activities: [
      { text: 'Assessment "React Basics" scores ready', time: '5m ago', type: 'done' },
      { text: 'Batch "MERN Stack" attendance marked', time: '30m ago', type: 'info' },
      { text: 'Student Arjun needs help with CSS', time: '1h ago', type: 'warn' },
      { text: 'New material uploaded to library', time: '3h ago', type: 'create' },
    ],
  },
  {
    id: 'student',
    label: 'Student Portal',
    icon: 'bi-mortarboard-fill',
    color: '#0891B2',
    stats: [
      { label: 'Attendance', value: '92%', icon: 'bi-calendar-check-fill', delta: 'This month' },
      { label: 'Assessment Score', value: '84/100', icon: 'bi-bar-chart-fill', delta: 'Last test' },
      { label: 'Resume Score', value: '78%', icon: 'bi-file-earmark-person-fill', delta: 'ATS ready' },
      { label: 'Placement Ready', value: '89%', icon: 'bi-bullseye', delta: 'AI prediction' },
    ],
    chart: [55, 60, 68, 74, 80, 84, 87, 90],
    activities: [
      { text: 'Job match: TCS · React Developer', time: '1m ago', type: 'success' },
      { text: 'Resume improved by AI — 78% → 85%', time: '20m ago', type: 'info' },
      { text: 'Interview scheduled: Fri 3pm', time: '1h ago', type: 'create' },
      { text: 'Assessment "DSA Round" tomorrow 10am', time: '2h ago', type: 'warn' },
    ],
  },
  {
    id: 'recruiter',
    label: 'Recruiter Portal',
    icon: 'bi-buildings-fill',
    color: '#059669',
    stats: [
      { label: 'Active Jobs', value: '14', icon: 'bi-clipboard-fill', delta: '3 urgent' },
      { label: 'Candidates', value: '286', icon: 'bi-person-fill', delta: 'AI-matched' },
      { label: 'Interviews Set', value: '42', icon: 'bi-camera-video-fill', delta: 'This week' },
      { label: 'Hired', value: '18', icon: 'bi-trophy-fill', delta: 'This quarter' },
    ],
    chart: [30, 42, 38, 55, 60, 65, 70, 78],
    activities: [
      { text: '12 new matched profiles for "DevOps"', time: '3m ago', type: 'success' },
      { text: 'Interview reminder: Sneha R. at 2pm', time: '45m ago', type: 'warn' },
      { text: 'Offer letter sent to Rahul K.', time: '2h ago', type: 'create' },
      { text: 'Job "Java Backend" gets 34 applicants', time: '3h ago', type: 'info' },
    ],
  },
];

const typeColors = {
  success: '#10B981',
  info: '#06B6D4',
  warn: '#F59E0B',
  create: '#7C3AED',
  done: '#2563EB',
};

export default function PlatformPreview() {
  const [active, setActive] = useState('admin');
  const sectionRef = useRef(null);
  const portal = portals.find(p => p.id === active);

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
    <section className="preview-section grid-bg" id="preview" ref={sectionRef}>
      <div className="mesh-bg">
        <div className="mesh-orb orb-1" style={{ opacity: 0.06 }} />
      </div>
      <div className="preview-inner">
        <div className="preview-header fade-in">
          <div className="section-badge">◉ Live Platform Preview</div>
          <h2 className="section-title">One Platform, <span className="gradient-text">Four Powerful Views</span></h2>
          <p className="section-subtitle">
            Explore how different users experience TalentOS — from admin control to student progress.
          </p>
        </div>

        {/* Portal tabs */}
        <div className="portal-tabs fade-in">
          {portals.map(p => (
            <button
              key={p.id}
              className={`portal-tab ${active === p.id ? 'active' : ''}`}
              onClick={() => setActive(p.id)}
              style={active === p.id ? { borderColor: p.color, background: p.color + '15', color: p.color } : {}}
            >
              <i className={`bi ${p.icon}`} />
              <span>{p.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="dashboard-mockup" key={active}>
          {/* Top bar */}
          <div className="mock-topbar">
            <div className="mock-dots">
              <span /><span /><span />
            </div>
            <div className="mock-url glass">
              <span className="url-lock"><i className="bi bi-lock-fill" style={{ color: '#059669' }} /></span>
              <span className="url-text">app.talentos.io / {active}</span>
            </div>
            <div className="mock-actions">
              <div className="mock-avatar" style={{ background: portal.color + '25', color: portal.color }}>
                <i className={`bi ${portal.icon}`} />
              </div>
            </div>
          </div>

          <div className="mock-body">
            {/* Sidebar mini */}
            <div className="mock-sidebar">
              <div className="ms-logo" style={{ background: portal.color + '20' }}><i className={`bi ${portal.icon}`} style={{ color: portal.color }} /></div>
              {['bi-house-fill','bi-stars','bi-grid-3x3-gap-fill','bi-tag-fill','bi-building-fill','bi-envelope-fill'].map((ic, i) => (
                <div key={i} className={`ms-item ${i === 0 ? 'active' : ''}`} style={i === 0 ? { background: portal.color + '20', color: portal.color } : {}}>
                  <i className={`bi ${ic}`} />
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="mock-content">
              {/* Welcome bar */}
              <div className="mock-welcome">
                <div>
                  <div className="mw-title">Welcome back! 👋</div>
                  <div className="mw-sub">{portal.label} · {new Date().toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' })}</div>
                </div>
                <div className="mw-actions">
                  <div className="mw-btn glass" style={{ borderColor: portal.color + '40' }}>+ New</div>
                  <div className="mw-notify"><i className="bi bi-bell-fill" style={{ color: portal.color }} /> <span className="notify-dot" style={{ background: portal.color }}/></div>
                </div>
              </div>

              {/* Stats */}
              <div className="mock-stats">
                {portal.stats.map((s, i) => (
                  <div key={i} className="ms-stat glass">
                    <div className="ms-stat-top">
                      <span className="ms-stat-icon"><i className={`bi ${s.icon}`} style={{ color: portal.color }} /></span>
                      <span className="ms-stat-delta">{s.delta}</span>
                    </div>
                    <div className="ms-stat-value" style={{ color: portal.color }}>{s.value}</div>
                    <div className="ms-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Chart + Activity */}
              <div className="mock-bottom">
                {/* Mini chart */}
                <div className="mock-chart glass">
                  <div className="mc-header">
                    <span className="mc-title">Performance Trend</span>
                    <span className="mc-badge" style={{ background: portal.color + '20', color: portal.color }}>↑ Live</span>
                  </div>
                  <div className="mc-bars">
                    {portal.chart.map((h, i) => (
                      <div key={i} className="mc-bar-wrap">
                        <div
                          className="mc-bar"
                          style={{
                            height: `${h}%`,
                            background: i === portal.chart.length - 1
                              ? `linear-gradient(to top, ${portal.color}, ${portal.color}aa)`
                              : portal.color + '35',
                            animationDelay: `${i * 0.06}s`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="mock-activity glass">
                  <div className="ma-header">Recent Activity</div>
                  <div className="ma-items">
                    {portal.activities.map((a, i) => (
                      <div key={i} className="ma-item" style={{ animationDelay: `${i * 0.08}s` }}>
                        <div className="ma-dot" style={{ background: typeColors[a.type] || portal.color }} />
                        <div className="ma-text">{a.text}</div>
                        <div className="ma-time">{a.time}</div>
                      </div>
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
