import React from 'react';
import {
  BiLogoPython,
  BiLogoPostgresql,
} from 'react-icons/bi';
import { PiFileSqlFill } from 'react-icons/pi';
import { FaJava, FaAws, FaAndroid, FaDocker } from 'react-icons/fa';
import {
  SiDjango,
  SiPytorch,
  SiFastapi,
  SiFlask,
  SiScikitlearn,
  SiTensorflow,
  SiKubernetes,
  SiNumpy,
  SiPandas,
  SiOpenai,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

const categories = [
  {
    label: "AI / ML",
    items: [
      { name: 'Python', Icon: BiLogoPython },
      { name: 'PyTorch', Icon: SiPytorch },
      { name: 'TensorFlow', Icon: SiTensorflow },
      { name: 'Scikit-learn', Icon: SiScikitlearn },
      { name: 'Hugging Face', img: '/assets/hugging-face.png' },
      { name: 'OpenAI', Icon: SiOpenai },
      { name: 'LangChain', img: '/assets/langchain.png' },
      { name: 'ChromaDB', img: '/assets/chromadb.png' },
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { name: 'Django', Icon: SiDjango },
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Flask', Icon: SiFlask },
      { name: 'Java', Icon: FaJava },
      { name: 'SQL', Icon: PiFileSqlFill },
      { name: 'PostgreSQL', Icon: BiLogoPostgresql },
      { name: 'Pandas', Icon: SiPandas },
      { name: 'NumPy', Icon: SiNumpy },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: 'AWS', Icon: FaAws },
      { name: 'Docker', Icon: FaDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'Firebase', Icon: IoLogoFirebase },
      { name: 'Android', Icon: FaAndroid },
    ],
  },
];

export default function Technology() {
  return (
    <section id="technologies" className="py-24 px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading animate-fade-up">Skills & Technologies</h2>

        <div className="mt-12 space-y-10">
          {categories.map((cat, ci) => (
            <div key={cat.label} className="animate-fade-up" style={{ animationDelay: `${ci * 0.15}s` }}>
              <p className="mono mb-5" style={{ color: 'var(--accent)' }}>{cat.label}</p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map(({ name, Icon, img }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg transition-all duration-200"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.background = 'var(--accent-dim)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.background = 'var(--bg-card)';
                    }}
                  >
                    {Icon ? (
                      <Icon className="text-lg" style={{ color: 'var(--text-secondary)' }} />
                    ) : (
                      <img src={img} alt={name} className="w-[18px] h-[18px] object-contain" />
                    )}
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
