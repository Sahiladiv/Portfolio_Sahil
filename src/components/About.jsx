import React from "react";

const About = () => (
  <section id="about" className="py-24 px-6" style={{ background: 'var(--bg-secondary)' }}>
    <div className="max-w-6xl mx-auto">
      <h2 className="section-heading animate-fade-up">About</h2>

      <div className="mt-10 grid lg:grid-cols-5 gap-12">
        {/* Main copy — 3 cols */}
        <div className="lg:col-span-3 space-y-5 animate-fade-up animate-delay-1">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            I build AI systems that ship — not just models that train.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Currently a Founding AI Engineer at Ultra Ops, where I architected the
            end-to-end pipeline for AI-driven blueprint interpretation — from Mask2Former
            segmentation to LangGraph multi-agent workflows that turned days-long HVAC proposals
            into minutes. Before that, I built fuzzy logic decision engines for game AI at
            Easley Dunn, anomaly detection systems over 2M+ financial records at Penn State's
            Smeal College, and production FastAPI services at Webminix.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            My work sits at the intersection of applied ML and backend engineering — RAG pipelines,
            agentic workflows, semantic search, and the infrastructure to make them reliable at scale.
            I care about the full loop: from embeddings to API latency to the analyst dashboard
            that actually saves someone 40 hours a month.
          </p>
        </div>

        {/* Right sidebar — 2 cols */}
        <div className="lg:col-span-2 animate-fade-up animate-delay-2">
          {/* What I work with */}
          <div className="mb-8">
            <p className="mono mb-4" style={{ color: 'var(--accent)' }}>What I work with</p>
            <div className="space-y-3">
              {[
                { area: "AI / Agents", detail: "LangGraph, LangChain, Ollama, OpenAI, Hugging Face" },
                { area: "Backend", detail: "FastAPI, Django, PostgreSQL, pgvector" },
                { area: "ML", detail: "PyTorch, Scikit-learn, Transformers, MLflow" },
                { area: "Infra", detail: "AWS, Docker, Kubernetes, CI/CD" },
              ].map(({ area, detail }) => (
                <div key={area}>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{area}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "3", label: "Publications" },
                { num: "4+", label: "Roles" },
                { num: "MS", label: "Penn State" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-2xl font-semibold" style={{ color: 'var(--accent)' }}>{num}</p>
                  <p className="mono mt-1" style={{ color: 'var(--text-muted)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;