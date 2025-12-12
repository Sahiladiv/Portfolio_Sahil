import React from "react";
import Card1Image from "../assets/EasleyDunn_exp.png";
import Card2Image from "../assets/PSU_TA.png";
import Card3Image from "../assets/PSU_RA.png";
import Card4Image from "../assets/Webminix_exp.png";
import Card5Image from "../assets/Croblaze_exp4.png";
import Card6Image from "../assets/TSEC_exp.png";

const experienceData = [
  {
    img: Card1Image,
    title: "AI Engineer Intern at Easley Dunn Production Inc",
    desc: [
      "Enhanced gameplay realism by 35% through a fuzzy logic system in Unity that dynamically prioritized AI maneuvers (juke, spin, stiff-arm) based on in-game context.",
      "Analyzed gameplay data to calibrate AI difficulty curves, improving responsiveness and creating adaptive player challenges.",
      "Streamlined deployment by containerizing AI modules with Docker and integrating into CI/CD pipelines for scalable testing and updates."
    ],
    skills: "Python, C#, Unity, Game AI, Docker, CI/CD",
  },
  {
    img: Card3Image,
    title: "Data Scientist Intern at Penn State Smeal College of Business",
    desc: [
      "Clustered 2M+ Zulu trade records using MiniLM embeddings and automated outlier detection, reducing manual review workload by 40+ hours monthly.",
      "Built interactive Streamlit dashboards for trade anomaly visualization, improving decision-making speed by 28% and precision by 16%.",
      "Validated clustering with cosine similarity and entropy metrics, boosting regulator confidence in audit compliance."
    ],
    skills: "Python, Transformers, MiniLM, Streamlit",
  },
  {
    img: Card4Image,
    title: "AI/ML Engineer at Webminix",
    desc: [
      "Built and deployed supervised ML models (Random Forest, XGBoost, Gradient Boosting) for customer churn and lead conversion, improving accuracy by 18% and reducing churn risk by 12%.",
      "Engineered scalable ETL pipelines processing 10M+ records to support feature engineering, PCA-based dimensionality reduction, and SHAP-driven model explainability.",
    " Designed RAG pipelines and AI agent workflows with semantic retrieval, metadata chunking, and context-assembly orchestration.",    ],
    skills: " Python, LangChain, LangGraph, FAISS, AWS, Docker",
  },
  {
    img: Card2Image,
    title: "Learning Assistant at Penn State University",
    desc: [
      "Guided 200+ students in Data Structures, Algorithms, and Theory of Computation.",
      "Automated grading workflows and provided personalized feedback, improving grading turnaround time.",
      "Supported Python lab sessions and reinforced hands-on algorithmic problem-solving skills."
    ],
    skills: "Python, Algorithms, Automata, SQL",
  },
  {
    img: Card5Image,
    title: "Software Engineer Intern at Croblaze",
    desc: [
      "Developed secure JWT-based authentication APIs with Django and MySQL, serving 10K+ users.",
      "Implemented Two-Factor Authentication (2FA) and optimized SQL queries to reduce API response latency to under 300ms.",
      "Collaborated with front-end teams to integrate REST endpoints, improving system reliability and user experience."
    ],
    skills: "Django, REST APIs, MySQL, Authentication",
  },
  {
    img: Card6Image,
    title: "Machine Learning Intern at University of Mumbai",
    desc: [
      "Researched weather forecasting and plant disease detection using TensorFlow and Scikit-learn models.",
      "Proposed a novel image augmentation technique, improving model accuracy for plant disease classification.",
      "Enhanced feature engineering workflows, achieving higher generalization across test data."
    ],
    skills: "TensorFlow, PyTorch, Deep Learning, Image Processing",
  },
];

const ExperienceCard = ({ img, title, desc, skills }) => {
  let role = title;
  let company = "";
  if (title.includes(" at ")) {
    [role, company] = title.split(" at ");
  } else if (title.includes(" | ")) {
    [role, company] = title.split(" | ");
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={img} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6 text-neutral-800">
        <h3 className="text-xl font-semibold leading-tight">{role}</h3>
        <p className="text-sm italic mb-3">{company}</p>
        <ul className="list-disc list-inside mb-4 text-sm space-y-2">
          {desc.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <p className="text-sm font-semibold">
          <span className="font-medium">Tech Stack:</span> {skills}
        </p>
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="py-16">
    <div className="container mx-auto px-8">
      <h2 className="my-10 text-4xl font-serif text-center text-black">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experienceData.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
