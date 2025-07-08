import React from "react";

const projects = [
  {
    title: "MiniVitGPT: Vision-Language Captioning",
    description:
      "Built a compact ViT-GPT2 pipeline with prefix-tuning to generate fluent, low-latency image captions on edge devices. Integrated MiniLM embeddings and a knowledge-graph reranker that cut hallucinations by 18%.",
  },
  {
    title: "LeetPrep+: Interview Assistant",
    description:
      "Full-stack Django + React platform generating 500+ coding solutions with LangChain/OpenAI. Auto-tags problems, scores difficulty, and cuts candidate prep time by 65%.",
  },
  {
    title: "ResearchMind: AI Research Assistant",
    description:
      "Django-based RAG system (LangChain + ChromaDB) that extracts text with PyMuPDF, builds FAISS indices, and answers multi-paper queries — cutting literature-review time by 60%.",
  },
  {
    title: "NeuroScoop: News Recommendation Engine",
    description:
      "Serves 200K+ articles via MiniLM embeddings stored in ChromaDB, boosting headline-click relevance accuracy by 30%.",
  },
  {
    title: "TradeMind: RL Stock-Trading Agent",
    description:
      "Trained a PPO agent on AAPL price data to issue buy/hold/sell actions, outperforming a buy-and-hold baseline by 12% in risk-adjusted return. Live inference dashboard in Streamlit.",
  },
  {
    title: "Feature Mixing for Plant Disease Detection",
    description:
      "Created a feature-based augmentation technique leveraging the Hadamard matrix and SGD to boost model performance in detecting plant diseases using architectures like ResNet-50, VGG-16, and VGG-19.",
  },
  {
    title: "Inkspire: A Dynamic Blogging Website",
    description:
      "Built a Django-based blogging platform with NLP features like text summarization, paraphrasing, spell correction, sentiment analysis, and personalized blog recommendations.",
  },
];

const Projects = () => (
  <section id="projects" className="py-16">
    <div className="container mx-auto px-8">
      <h2 className="my-10 text-4xl font-serif text-black text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ title, description }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6 text-neutral-800 h-full flex flex-col">
              {/* Force uniform height for title + line block */}
              <div className="min-h-[80px] flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2 leading-snug">{title}</h3>
                <div className="w-full h-px bg-gray-300 mb-4" />
              </div>
              <p className="flex-grow">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
