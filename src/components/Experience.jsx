import React, { useState } from "react";
import Card1Image from "../assets/EasleyDunn_exp.png";
import Card3Image from "../assets/PSU_RA.png";
import Card4Image from "../assets/Webminix_exp.png";

const experienceData = [
  {
    img: null,
    role: "Founding AI Engineer",
    company: "Ultra Ops",
    period: "Jan 2026 - Present",
    desc: [
      "Architected the MVP for AI-driven blueprint interpretation and proposal generation for HVAC and electrical contractors.",
      "Designed FastAPI and LangGraph based multi-agent workflows for room schedules, Manual J calculations, and cost estimation with guardrails.",
      "Built an AI-driven CRM automation plugin for Zoho CRM, automatically capturing leads, logging conversations, and updating pipeline stages — reducing manual data entry time by 35%.",
      "Integrated Ollama-hosted Qwen 2.5:72B, Qwen 3:32B, and Mask2Former for blueprint segmentation, extraction, and reasoning followed by human evaluation for quality assurance.",
      "Reduced proposal generation time from days to minutes through automated extraction and AI-assisted estimation workflows.",
    ],
    skills: ["Python", "FastAPI", "LangGraph", "Ollama", "Zoho"],
  },
  {
    img: Card1Image,
    role: "AI Systems Engineer Intern",
    company: "Easley Dunn Production Inc",
    period: "Jun 2025 - Dec 2025",
    desc: [
      "Designed the fuzzy logic based decision engine that performed real-world-like actions using context awareness.",
      "Collaborated cross-functionally with the gameplay team to extract behavior patterns from existing games including NFL Blitz.",
      "Implemented ScriptableObjects and Prefab-based system to use probability-driven graphs for more dynamic gameplay.",
      "Used Gemini to analyze NFL Blitz game footage and identify gameplay parameters and behavioral gaps relevant to system design.",
      "Led documentation for the updated decision engine, covering perception, decision evaluation, and FSM execution.",
    ],
    skills: ["C#", "Unity", "Gemini", "Game AI", "FSM"],
  },
  {
    img: Card3Image,
    role: "Data Scientist Intern",
    company: "Smeal College of Business",
    period: "Aug 2024 - May 2025",
    desc: [
      "Engineered a system to find unusual patterns in 2 million financial trade records using sentence-level embeddings.",
      "Built an endpoint using FastAPI for semantic retrieval on embedded transaction data, connected to a Streamlit dashboard for easier analyst review.",
      "Automated manual reviews and saved the analyst team over 40 hours of work each month.",
      "Simplified the decision-making process, making it 28% faster and 16% more accurate through constant feedback.",
    ],
    skills: ["Python", "FastAPI", "pgvector", "Streamlit"],
  },
  {
    img: Card4Image,
    role: "Software Developer Intern",
    company: "Webminix",
    period: "Jan 2022 - Jul 2023",
    desc: [
      "Contributed to building REST API endpoints for a multi-tenant application backed by PostgreSQL, improving query performance by 40%.",
      "Rebuilt clean and scalable FastAPI services for machine learning models, improving latency from 380ms to 120ms.",
      "Performed feature engineering and selection using correlation analysis and PCA to improve training time by 15%.",
      "Trained ensemble models for churn and lead conversion prediction, helping reduce churn risk by 12%.",
    ],
    skills: ["Python", "FastAPI", "PostgreSQL", "Scikit-learn"],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading animate-fade-up">Experience</h2>

        <div className="mt-12 space-y-0">
          {experienceData.map((exp, i) => (
            <div
              key={i}
              className="group py-7 cursor-pointer animate-fade-up"
              style={{
                borderBottom: '1px solid var(--border-subtle)',
                animationDelay: `${(i + 1) * 0.1}s`,
              }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <span
                      className="hidden sm:inline-block w-8 h-px"
                      style={{ background: 'var(--border)' }}
                    />
                    <span className="text-sm" style={{ color: 'var(--accent)' }}>
                      {exp.company}
                    </span>
                  </div>

                  <p className="mono mt-1.5" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>
                    {exp.period}
                  </p>

                  {/* Skills pills */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map(s => (
                      <span
                        key={s}
                        className="mono px-2 py-0.5 rounded"
                        style={{
                          background: 'var(--accent-dim)',
                          color: 'var(--accent)',
                          fontSize: '0.65rem',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Toggle icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="flex-shrink-0 mt-1 transition-transform duration-300"
                  style={{
                    color: 'var(--text-muted)',
                    transform: expanded === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>

              {/* Expanded content */}
              <div
                className="overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: expanded === i ? '500px' : '0',
                  opacity: expanded === i ? 1 : 0,
                }}
              >
                <ul className="mt-5 space-y-2.5 pl-4" style={{ borderLeft: '2px solid var(--border)' }}>
                  {exp.desc.map((point, j) => (
                    <li key={j} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;