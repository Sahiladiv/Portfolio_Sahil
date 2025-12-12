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
      "Designed RAG pipelines and AI agent workflows with semantic retrieval, metadata chunking, and context-assembly orchestration"
    ],
    skills: " Python, LangChain, LangGraph, FAISS, Docker, AWS (EC2, Lambda, ECS), GitHub Actions",
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

export default experienceData;
