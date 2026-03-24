import React from "react";
import psuLogo from "../assets/psu-logo.png";
import mumbaiLogo from "../assets/mumbai-logo.png";

const EDUCATION = [
  {
    logo: psuLogo,
    university: "The Pennsylvania State University",
    degree: "M.S. Computer Science and Engineering",
    location: "University Park, PA",
    dates: "Aug 2023 – May 2025",
  },
  {
    logo: mumbaiLogo,
    university: "University of Mumbai",
    degree: "B.E. Computer Engineering",
    location: "Mumbai, India",
    dates: "Aug 2019 – May 2023",
  },
];

const Education = () => (
  <section id="education" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-heading animate-fade-up">Education</h2>

      <div className="mt-12 space-y-0">
        {EDUCATION.map((edu, i) => (
          <div
            key={i}
            className="group grid md:grid-cols-[200px_1fr] gap-6 py-8 animate-fade-up"
            style={{
              borderBottom: '1px solid var(--border-subtle)',
              animationDelay: `${(i + 1) * 0.15}s`,
            }}
          >
            {/* Date + Logo */}
            <div className="flex md:flex-col items-center md:items-start gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <img src={edu.logo} alt={edu.university} className="w-9 h-9 object-contain" />
              </div>
              <p className="mono" style={{ color: 'var(--text-muted)' }}>{edu.dates}</p>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-xl font-medium" style={{ color: 'var(--text-primary)' }}>
                {edu.university}
              </h3>
              <p className="mt-1 text-base" style={{ color: 'var(--accent)' }}>
                {edu.degree}
              </p>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
