import { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Director',
    institute: 'TechSkill Academy, Bangalore',
    avatar: 'RK',
    rating: 5,
    color: '#2563EB',
    quote: 'TalentOS transformed our institute completely. Placement rates jumped from 60% to 94% in just one year. The AI matching system is incredibly accurate.',
  },
  {
    name: 'Priya Sharma',
    role: 'Placement Officer',
    institute: 'DataPro Institute, Hyderabad',
    avatar: 'PS',
    rating: 5,
    color: '#7C3AED',
    quote: 'Managing 2000+ students used to be a nightmare. Now with TalentOS, everything is automated. Recruiter partnerships have tripled in 6 months.',
  },
  {
    name: 'Vikram Singh',
    role: 'Senior Trainer',
    institute: 'CodeCraft Academy, Pune',
    avatar: 'VS',
    rating: 5,
    color: '#06B6D4',
    quote: 'The assessment engine is outstanding. AI-generated questions save me 3 hours every week. Student engagement has increased dramatically.',
  },
  {
    name: 'Anita Patel',
    role: 'HR Manager',
    institute: 'TechCorp Solutions',
    avatar: 'AP',
    rating: 5,
    color: '#10B981',
    quote: 'As a recruiter, TalentOS is a game-changer. The candidate profiles are comprehensive and the AI matching sends us exactly the right talent.',
  },
  {
    name: 'Mohit Gupta',
    role: 'CEO',
    institute: 'LearnHub EdTech',
    avatar: 'MG',
    rating: 5,
    color: '#F59E0B',
    quote: 'ROI was visible within 3 months. Administrative costs dropped by 60% and our placement outcomes are the best in the region now.',
  },
  {
    name: 'Sanjana Reddy',
    role: 'Student (Now at Google)',
    institute: 'EduTech Pro, Chennai',
    avatar: 'SR',
    rating: 5,
    color: '#EC4899',
    quote: 'The AI resume builder and placement predictor helped me land my dream job at Google. The career guidance was spot-on and incredibly actionable.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, [auto]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-in');
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const current = testimonials[active];

  return (
    <section className="testimonials-section" id="testimonials" ref={sectionRef}>
      <div className="testimonials-inner">
        <div className="testi-header fade-in">
          <div className="section-badge"><i className="bi bi-chat-quote-fill" /> Social Proof</div>
          <h2 className="section-title">Loved by <span className="gradient-text">Institutes Everywhere</span></h2>
          <p className="section-subtitle">
            Real stories from directors, trainers, students, and recruiters who transformed their journey with TalentOS.
          </p>
        </div>

        {/* Main testimonial */}
        <div className="testi-main fade-in">
          <div className="testi-card glass" key={active} style={{ '--testi-color': current.color }}>
            <div className="testi-quote-icon" style={{ color: current.color }}>{'\u201C'}</div>
            <p className="testi-quote">{current.quote}</p>

            <div className="testi-footer">
              <div className="testi-avatar" style={{ background: current.color + '25', color: current.color, border: `1px solid ${current.color}40` }}>
                {current.avatar}
              </div>
              <div className="testi-info">
                <div className="testi-name">{current.name}</div>
                <div className="testi-role">{current.role} · {current.institute}</div>
              </div>
              <div className="testi-stars">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail nav */}
        <div className="testi-nav fade-in">
          {testimonials.map((t, i) => (
            <button
              key={i}
              className={`testi-thumb ${i === active ? 'active' : ''}`}
              onClick={() => { setActive(i); setAuto(false); }}
              style={i === active ? { borderColor: t.color, background: t.color + '15' } : {}}
            >
              <div className="thumb-avatar" style={{ background: t.color + '20', color: t.color }}>
                {t.avatar}
              </div>
              <div className="thumb-info">
                <div className="thumb-name">{t.name}</div>
                <div className="thumb-role">{t.role}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="testi-dots fade-in">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === active ? 'active' : ''}`}
              style={i === active ? { background: current.color } : {}}
              onClick={() => { setActive(i); setAuto(false); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
