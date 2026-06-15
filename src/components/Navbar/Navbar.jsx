import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home', icon: 'bi-house-fill', href: '#home' },
  { id: 'features', label: 'Features', icon: 'bi-stars', href: '#features' },
  { id: 'solutions', label: 'Solutions', icon: 'bi-grid-3x3-gap-fill', href: '#ecosystem' },
  { id: 'pricing', label: 'Pricing', icon: 'bi-tag-fill', href: '#pricing' },
  { id: 'about', label: 'About', icon: 'bi-building-fill', href: '#industries' },
  { id: 'testimonials', label: 'Testimonials', icon: 'bi-chat-quote-fill', href: '#testimonials' },
  { id: 'contact', label: 'Contact', icon: 'bi-envelope-fill', href: '#contact' },
];

export default function Navbar({ activeSection, collapsed, setCollapsed }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setCollapsed(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile toggle */}
      <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
        <span></span><span></span><span></span>
      </button>

      {/* Overlay */}
      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}

      <aside className={`sidebar glass ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" fill="url(#logoGrad)" />
              <path d="M14 8L20 11V17L14 20L8 17V11L14 8Z" fill="rgba(255,255,255,0.2)" />
              <defs>
                <linearGradient id="logoGrad" x1="2" y1="2" x2="26" y2="26">
                  <stop stopColor="#2563EB" />
                  <stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {!collapsed && <span className="logo-text">TalentOS</span>}
          <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
            <i className={`bi ${collapsed ? 'bi-chevron-double-right' : 'bi-chevron-double-left'}`} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              title={collapsed ? item.label : ''}
              onClick={() => setMobileOpen(false)}
            >
              <span className="nav-icon"><i className={`bi ${item.icon}`} /></span>
              {!collapsed && <span className="nav-label">{item.label}</span>}
              {activeSection === item.id && <span className="active-indicator" />}
            </a>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="sidebar-bottom">
          <div className="sidebar-divider" />
          {!collapsed ? (
            <>
              <a href="#demo" className="sidebar-cta" onClick={() => setMobileOpen(false)}>
                <i className="bi bi-rocket-takeoff-fill" /> Request Demo
              </a>
              <div className="sidebar-auth">
                <a href="#login" className="auth-link">Login</a>
                <a href="#register" className="auth-btn">Register</a>
              </div>
            </>
          ) : (
            <div className="collapsed-actions">
              <a href="#demo" title="Demo" className="collapsed-icon-btn"><i className="bi bi-rocket-takeoff-fill" /></a>
              <a href="#login" title="Login" className="collapsed-icon-btn"><i className="bi bi-person-fill" /></a>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
