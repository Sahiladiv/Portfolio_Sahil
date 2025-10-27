import React from "react";

const projects = [
  {
    title: "Multi-Persona Simulator: Fine-Tuning using LoRA Adapter",
    description:
      "Fine-tuned Falcon-7B with LoRA adapters to simulate realistic behavior of culturally grounded Asian parent personas for behavior modeling and policy testing. Engineered 6 distinct identities with emotional traits, ensuring ethical safeguards and avoiding stereotypes in generated outputs.",
    videoUrl: "https://www.loom.com/embed/bc364b390149412483bb4413260b7ea1",
  },
  {
    title: "AutoCareNote AI: Clinical Assistant",
    description:
      "Transforms complex dental and clinical visit transcripts into human-readable summaries and SOAP notes. Uses structured prompting, LangChain, and Streamlit to reduce documentation time and improve patient clarity. Supports export to PDF/DOCX and tailored summaries for procedures like cleanings, extractions, and ortho consults.",
    videoUrl: "https://www.loom.com/embed/24d5882151e04c26b7bd544ca68fea1c",
  },
  {
    title: "Emotion Simulator: Behaviour Simulation Engine",
    description:
      "Built a Streamlit-based agentic simulation engine with LangGraph DAGs and Groq, routing real-world prompts through 50+ AI personas to analyze cultural and emotional variance. Achieved 60% speedup via parallel persona orchestration and monitored coherence using semantic and tone classifiers.",
    videoUrl: "https://www.loom.com/embed/df21f43fe3654f858eb9adddffa659d4",
  },
  {
    title: "Research Mind AI: Research Assistant",
    description:
      "Django-based RAG system (LangChain + ChromaDB) that extracts text with PyMuPDF, builds FAISS indices, and answers multi-paper queries — cutting literature-review time by 60%.",
    videoUrl:
      "https://www.loom.com/embed/8d61009655e244ddb9d11a4b404d972c",
  },
  {
    title: "Tech Blog Summarizer",
    description:
      "Built a n8n application that summarizes any tech blog using the Groq LLM models and delivers the highlight directly via Email to our inbox.",
    videoUrl: "",
  },
  {
    title: "Interview Kit-AI: Mock Interview Simulator",
    description:
      "Full-stack Django + React platform generating 500+ coding solutions with LangChain/OpenAI. Auto-tags problems, scores difficulty, and cuts candidate prep time by 65%.",
    videoUrl: "",
  },
  {
    title: "Think Ink Stories AI: Blogging & Recommendation Engine",
    description:
      "Built a Django-based blogging platform with NLP features like text summarization, paraphrasing, sentiment analysis, and personalized blog recommendations using MiniLM embeddings and ChromaDB.",
    videoUrl: "",
  },
];

const Projects = () => (
  <section id="projects" className="py-16">
    <div className="container mx-auto px-8">
      <h2 className="my-10 text-4xl font-serif text-black text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ title, description, videoUrl }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="p-6 text-neutral-800 flex flex-col flex-grow">
              {/* Header */}
              <div className="min-h-[80px]">
                <h3 className="text-xl font-semibold mb-2 leading-snug">
                  {title}
                </h3>
                <div className="w-full h-px bg-gray-300 mb-4" />
              </div>

              {/* Description */}
              <p className="mb-4">{description}</p>

              {/* Video (aligned to bottom) */}
              {videoUrl && (
                <div className="mt-auto aspect-video">
                  <iframe
                    src={videoUrl}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full h-full rounded-md"
                    title={`Loom demo of ${title}`}
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
