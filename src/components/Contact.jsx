import React from "react";

const contactLinks = [
  {
    label: "Email",
    value: "sahiladivarekar99@gmail.com",
    href: "mailto:sahiladivarekar99@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,4 12,13 2,4" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(582) 203-8467",
    href: "tel:+15822038467",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sahil-adivarekar",
    href: "https://linkedin.com/in/sahil-adivarekar",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/sahiladivarekar",
    href: "https://github.com/sahiladivarekar",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6" style={{ background: 'var(--bg-secondary)' }}>
    <div className="max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <h2 className="section-heading animate-fade-up">Get in Touch</h2>

        <p
          className="mt-6 text-lg leading-relaxed animate-fade-up animate-delay-1"
          style={{ color: 'var(--text-secondary)' }}
        >
          I'm always open to discussing new opportunities, interesting projects,
          or collaborations in AI and software engineering.
        </p>

        <div className="mt-10 space-y-0">
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-5 py-5 transition-colors duration-200 animate-fade-up"
              style={{
                borderBottom: '1px solid var(--border-subtle)',
                animationDelay: `${(i + 2) * 0.1}s`,
              }}
            >
              <span
                className="flex-shrink-0 transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.parentElement.querySelector('.contact-val').style.color = 'var(--accent)'}
              >
                {link.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="mono mb-0.5" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                  {link.label}
                </p>
                <p
                  className="contact-val text-base font-medium truncate transition-colors duration-200 group-hover:!text-[var(--accent)]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {link.value}
                </p>
              </div>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5"
                className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--text-muted)' }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p
            className="text-lg font-normal tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif", color: 'var(--text-muted)' }}
          >
            Sahil Adivarekar<span style={{ color: 'var(--accent)' }}>.</span>
          </p>
          <p className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
            Designed & Built with React + Tailwind
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
