import React from "react";

const projects = [
  {
    title: "Reddit Mastermind",
    subtitle: "AI Conversation Engine for Reddit-Style Content",
    description:
      "A conversation engine that uses personas, queries, and LangGraph-style nodes to generate Reddit-like posts and threaded comments automatically. Each persona acts as a node producing content based on configured queries, generating human-like multi-persona conversations across subreddits. All data stored in MySQL with a FastAPI backend.",
    videoUrl: "https://www.loom.com/embed/dbdac557602e4e2f806ffaa8bf5bd1d3",
    tags: ["React", "FastAPI", "MySQL", "LangChain", "LangGraph"],
  },
  {
    title: "Multi-Persona Simulator",
    subtitle: "Fine-Tuning with LoRA Adapters",
    description:
      "Fine-tuned Falcon-7B with LoRA adapters to simulate realistic behavior of culturally grounded personas for behavior modeling and policy testing. Engineered 6 distinct identities with emotional traits and ethical safeguards.",
    videoUrl: "https://www.loom.com/embed/bc364b390149412483bb4413260b7ea1",
    tags: ["Falcon-7B", "LoRA", "Hugging Face", "Fine-Tuning"],
  },
  {
    title: "Emotion Simulator",
    subtitle: "Agentic Behaviour Simulation Engine",
    description:
      "Built a Streamlit-based agentic simulation engine with LangGraph DAGs and Groq, routing real-world prompts through 50+ AI personas. Achieved 60% speedup via parallel persona orchestration.",
    videoUrl: "https://www.loom.com/embed/df21f43fe3654f858eb9adddffa659d4",
    tags: ["LangGraph", "Groq", "Multi-Agent", "Streamlit"],
  },
  {
    title: "AI Research Paper Assistant",
    subtitle: "RAG + MCP Research System",
    description:
      "RAG-based research assistant using MCP for structured context injection and multi-step LLM reasoning. Features hybrid retrieval with semantic and BM25 search, re-ranking, and dynamic context assembly over PostgreSQL + pgvector. Includes LLM-as-judge evaluation, hallucination detection, and an interactive Unity interface for querying and document upload.",
    videoUrl: "https://www.loom.com/embed/edb8cce234664de59e3582163088dd0d",
    tags: ["RAG", "MCP", "pgvector", "Unity", "FastAPI", "OpenAI"],
  },
  {
    title: "AutoCareNote AI",
    subtitle: "Clinical Documentation Assistant",
    description:
      "Transforms complex dental and clinical visit transcripts into human-readable summaries and SOAP notes. Uses structured prompting, LangChain, and Streamlit with export to PDF/DOCX.",
    videoUrl: "https://www.loom.com/embed/24d5882151e04c26b7bd544ca68fea1c",
    tags: ["LangChain", "Streamlit", "NLP", "Healthcare"],
  },
  {
    title: "Shadow",
    subtitle: "Local Keyboard-Driven AI Coding Co-Pilot",
    description:
      "A lightweight desktop overlay that runs entirely locally and no browser extension, no server, no persistent UI. Listens for a global hotkey, captures on-screen context via OCR, determines intent, and generates structured responses using the OpenAI API. LLM calls run in a background worker thread with Qt signals for a responsive, thread-safe UI. Deterministic parsing separates code from explanation with graceful failure handling.",
    videoUrl: "https://www.loom.com/embed/65ebdc3eeb914b7895bb99fa62c9b5fc",
    tags: ["Python", "OpenAI", "OCR", "Qt", "Desktop App"],
  },
];

const ProjectCard = ({ title, subtitle, description, videoUrl, tags, index }) => (
  <div
    className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 animate-fade-up"
    style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      animationDelay: `${index * 0.1}s`,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {videoUrl ? (
      <div className="aspect-video">
        <iframe
          src={videoUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full"
          title={`Demo of ${title}`}
          loading="lazy"
        />
      </div>
    ) : (
      <div
        className="aspect-video flex items-center justify-center"
        style={{ background: 'var(--bg-card-hover)' }}
      >
        <div className="text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2" style={{ color: 'var(--text-muted)' }}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <p className="mono" style={{ color: 'var(--text-muted)' }}>Demo coming soon</p>
        </div>
      </div>
    )}

    <div className="p-6 flex flex-col flex-1">
      <p className="mono mb-1" style={{ color: 'var(--accent)', fontSize: '0.65rem' }}>{subtitle}</p>
      <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="mono px-2 py-0.5 rounded"
            style={{
              background: 'var(--accent-dim)',
              color: 'var(--accent)',
              fontSize: '0.6rem',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6" style={{ background: 'var(--bg-secondary)' }}>
    <div className="max-w-6xl mx-auto">
      <h2 className="section-heading animate-fade-up">Projects</h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;