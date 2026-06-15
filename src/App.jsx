import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Metrics from './components/Metrics/Metrics';
import PlatformPreview from './components/PlatformPreview/PlatformPreview';
import WhyTalentOS from './components/WhyTalentOS/WhyTalentOS';
import Features from './components/Features/Features';
import Ecosystem from './components/Ecosystem/Ecosystem';
import AIFeatures from './components/AIFeatures/AIFeatures';
import Industries from './components/Industries/Industries';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id || 'home');
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    document.querySelectorAll('section[id], footer[id]').forEach(s => obs.observe(s));

    const onScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Global fade-in observer
    const fadeObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => fadeObs.observe(el));

    return () => {
      obs.disconnect();
      fadeObs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="app-layout">
      <Navbar activeSection={activeSection} collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="announcement-bar">
          <span className="ann-dot" />
          <span>🎉 TalentOS 3.0 is here — AI Placement Predictor is now 40% more accurate.</span>
          <a href="#features" className="ann-link">See what's new →</a>
        </div>

        <Hero />
        <Metrics />
        <PlatformPreview />
        <WhyTalentOS />
        <Features />
        <Ecosystem />
        <AIFeatures />
        <Industries />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>

      {showScrollTop && (
        <button
          className="scroll-top-btn glass"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="bi bi-chevron-up" />
        </button>
      )}
    </div>
  );
}
