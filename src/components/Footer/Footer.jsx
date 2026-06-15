import './Footer.css';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Security', 'Integrations'],
  Solutions: ['Training Institutes', 'Colleges', 'Universities', 'EdTech Companies', 'Corporate', 'Skill Centers'],
  Resources: ['Documentation', 'API Reference', 'Blog', 'Case Studies', 'Help Center', 'Webinars'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Partners', 'Contact', 'Investors'],
  Support: ['Community', 'Status Page', 'SLA Policy', 'Onboarding', 'Migration', 'Training'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Compliance', 'Data Security'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div className="fcta-text">
            <h2 className="fcta-title">
              Ready to <span className="gradient-text">Transform Your Institute?</span>
            </h2>
            <p className="fcta-sub">Join 500+ institutes already using TalentOS. Start your free trial today.</p>
          </div>
          <div className="fcta-actions">
            <a href="#demo" className="btn-primary">
              <i className="bi bi-rocket-takeoff-fill" />
              <span>Start Free Trial</span>
            </a>
            <a href="#contact" className="btn-secondary">
              <i className="bi bi-telephone-fill" />
              <span>Talk to Sales</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="fl-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" fill="url(#footerGrad)" />
                <path d="M14 8L20 11V17L14 20L8 17V11L14 8Z" fill="rgba(255,255,255,0.2)" />
                <defs>
                  <linearGradient id="footerGrad" x1="2" y1="2" x2="26" y2="26">
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="fl-name">TalentOS</span>
          </div>
          <p className="footer-tagline">
            The intelligent platform transforming how institutes manage students, training, and placements.
          </p>

          {/* Contact info */}
          <div className="footer-contacts">
            <a href="mailto:hello@talentos.io" className="footer-contact-item">
              <span className="contact-icon"><i className="bi bi-envelope-fill" /></span>
              <span>hello@talentos.io</span>
            </a>
            <a href="tel:+918001234567" className="footer-contact-item">
              <span className="contact-icon"><i className="bi bi-telephone-fill" /></span>
              <span>+91 800-123-4567</span>
            </a>
            <a href="https://wa.me/918001234567" className="footer-contact-item">
              <span className="contact-icon"><i className="bi bi-whatsapp" /></span>
              <span>WhatsApp Support</span>
            </a>
            <div className="footer-contact-item">
              <span className="contact-icon"><i className="bi bi-geo-alt-fill" /></span>
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Social links */}
          <div className="footer-socials">
            {[
              { name: 'LinkedIn', icon: 'bi-linkedin', color: '#0077B5' },
              { name: 'Twitter', icon: 'bi-twitter-x', color: '#14171A' },
              { name: 'YouTube', icon: 'bi-youtube', color: '#FF0000' },
              { name: 'Instagram', icon: 'bi-instagram', color: '#E1306C' },
            ].map(s => (
              <a key={s.name} href="#" className="social-btn glass" title={s.name} style={{ '--s-color': s.color }}>
                <i className={`bi ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="footer-links-grid">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="footer-col">
              <h4 className="footer-col-title">{section}</h4>
              <ul className="footer-col-links">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="newsletter-inner glass">
          <div className="nl-text">
            <span className="nl-icon"><i className="bi bi-envelope-paper-fill" style={{ fontSize: 24, color: '#2563EB' }} /></span>
            <div>
              <h4>Stay in the loop</h4>
              <p>Product updates, placement insights, and tips for institutes.</p>
            </div>
          </div>
          <div className="nl-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="nl-input glass"
            />
            <button className="nl-btn btn-primary">
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </div>

      {/* App download badges */}
      <div className="footer-apps">
        <span className="apps-label">Download the app</span>
        <div className="app-badges">
          <a href="#" className="app-badge glass">
            <span className="app-icon"><i className="bi bi-apple" /></span>
            <div>
              <div className="app-store-label">Download on</div>
              <div className="app-store-name">App Store</div>
            </div>
          </a>
          <a href="#" className="app-badge glass">
            <span className="app-icon"><i className="bi bi-google-play" /></span>
            <div>
              <div className="app-store-label">Get it on</div>
              <div className="app-store-name">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="glow-line" style={{ marginBottom: 24, opacity: 0.3 }} />
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {year} TalentOS Technologies Pvt. Ltd. · All rights reserved.
          </p>
          <div className="footer-bottom-links">
            {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
          <div className="footer-made">
            Made with ❤️ in India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
}
