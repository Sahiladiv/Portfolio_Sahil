import React from "react";

const projects = [
  {
    title: "Chinese Mom Simulator: Emotionally Tuned Persona Agent",
    description:
      "Fine-tuned Falcon 7B using culturally grounded parenting narratives from Reddit. Deployed via Groq API to simulate real-time emotional responses of Asian mothers in text conversations.",
    videoUrl: "", // Loom video URL when ready
  },
  {
    title: "Emotion Simulator: Multi-Persona Response Engine",
    description:
      "Built a LangGraph-based simulation engine with 50+ emotionally diverse personas reacting to the same input. Powered by LoRA adapters and fine-grained tone control using Falcon-7B.",
    videoUrl: "https://www.loom.com/share/df21f43fe3654f858eb9adddffa659d4?sid=c8bad584-7be0-49d5-9a9e-6e4fd7cdacc7", // Loom video URL when ready
  },
  {
    title: "ResearchMind: AI Research Assistant",
    description:
      "Django-based RAG system (LangChain + ChromaDB) that extracts text with PyMuPDF, builds FAISS indices, and answers multi-paper queries — cutting literature-review time by 60%.",
    videoUrl:
      "https://www.loom.com/embed/8d61009655e244ddb9d11a4b404d972c?sid=d39726d7-f758-419c-82bb-c9dccad0a39f",
  },
  {
    title: "Tech Blog Summarizer",
    description:
      "Built a LangChain + Django web app that summarizes any tech blog or research article using FLAN-T5. Supports URL scraping, semantic chunking, and section-wise Q&A with LLMs.",
    videoUrl: "", // Loom video URL when ready
  },
  {
    title: "InterviewKit+: AI-Powered Mock Interview Simulator",
    description:
      "Full-stack Django + React platform generating 500+ coding solutions with LangChain/OpenAI. Auto-tags problems, scores difficulty, and cuts candidate prep time by 65%.",
    videoUrl: "", // Loom video URL when ready
  },
  {
    title: "ThinkInkStories: AI Blogging & Recommendation Engine",
    description:
      "Built a Django-based blogging platform with NLP features like text summarization, paraphrasing, sentiment analysis, and personalized blog recommendations using MiniLM embeddings and ChromaDB.",
    videoUrl: "", // Loom video URL when ready
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
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6 text-neutral-800 h-full flex flex-col">
              <div className="min-h-[80px] flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2 leading-snug">
                  {title}
                </h3>
                <div className="w-full h-px bg-gray-300 mb-4" />
              </div>
              <p className="mb-4">{description}</p>

              {videoUrl && (
                <div className="aspect-video">
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
