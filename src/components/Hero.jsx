import React from "react";
import profilePic from "../assets/SahilProfile.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Subtle gradient orbs */}
    <div
      className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
      style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.3), transparent 70%)' }}
    />
    <div
      className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
      style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.2), transparent 70%)' }}
    />

    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        {/* Text — 3 cols */}
        <div className="lg:col-span-3 animate-fade-up">
          <p className="mono mb-4 animate-fade-up animate-delay-1" style={{ color: 'var(--accent)' }}>
            Software &amp; AI Engineer
          </p>
          <h1
            className="text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight mb-6 animate-fade-up animate-delay-2"
            style={{ fontFamily: "'Instrument Serif', serif", color: 'var(--text-primary)' }}
          >
            Sahil<br />
            Adivarekar
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up animate-delay-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Building intelligent, production-grade systems at the intersection
            of deep learning and full-stack engineering. MS CS @ Penn State.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-4">
            <a
              href="/Sahil_Adivarekar_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300"
              style={{
                background: 'var(--accent)',
                color: 'var(--bg-primary)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 24px var(--accent-glow)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Résumé
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Photo — 2 cols */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-up animate-delay-3">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-2xl blur-md opacity-30"
              style={{ background: 'linear-gradient(135deg, var(--accent), transparent)' }}
            />
            <img
              src={profilePic}
              alt="Sahil Adivarekar"
              className="relative w-[280px] h-[370px] md:w-[320px] md:h-[420px] object-cover rounded-2xl"
              style={{ border: '1px solid var(--border)' }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
