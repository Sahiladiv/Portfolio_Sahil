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
    title: "AI Systems Engineer Intern at Easley Dunn Production Inc",
    desc:
      "As a Software Engineer at Easley Dunn Production Inc, I focus on building context-aware AI systems in Unity using C# and fuzzy logic. My primary responsibility is engineering adaptive decision-making for in-game agents, optimizing special move execution and reducing decision latency to improve realism. I work closely with game designers in Agile sprints to fine-tune difficulty logic and ensure dynamic challenge adaptation. Additionally, I containerize AI modules with Docker to streamline integration into CI/CD pipelines, enabling scalable testing and deployment while contributing to higher player engagement and retention.",
    skills: "Python, C#, Unity, Game AI, Agile, Modular Architecture",
  },
  {
    img: Card2Image,
    title: "Learning Assistant at Penn State University",
    desc:
      "Guided students in Data Structures, Algorithms, Theory of Computation, and Python. Streamlined grading through automation and supported hands-on learning.",
    skills: "Python, Algorithms, Automata, SQL",
  },
  {
    img: Card3Image,
    title: "AI Engineer Intern at Penn State Smeal College of Business",
    desc:
      "In my role as a Full Stack Engineer, I developed ML-powered systems to analyze over two million Zulu trade records. Using Python, Transformers, and PyTorch, I created anomaly detection pipelines with embeddings that helped uncover insights while reducing manual review work. I also designed and deployed Streamlit dashboards that improved stakeholder decision-making by providing clear visualizations and reducing turnaround time.",
    skills: "Python, Pandas, MiniLM, Streamlit",
  },
  {
    img: Card4Image,
    title: "Machine Learning Intern at Webminix",
    desc:
      "At Webminix, I was responsible for designing, optimizing, and deploying backend services using AWS and containerization technologies. I migrated client services to autoscaled EC2 instances with Lambda triggers, reducing infrastructure costs significantly. I also automated build and release workflows through GitHub CI, bringing down deployment time from forty minutes to under ten.",
    skills: "Python, AWS, Forecasting, ML Pipelines",
  },
  {
    img: Card6Image,
    title: "Machine Learning Intern at University of Mumbai",
    desc:
      "During my internship as an ML Engineer, I worked on research initiatives in weather forecasting and plant disease detection. I experimented with TensorFlow and Scikit-learn models, achieving high accuracy rates through extensive feature engineering and model evaluation. One of my key contributions was proposing a novel image augmentation technique that improved accuracy in plant disease detection tasks.",
    skills: "PyTorch, Deep Learning, ResNet, Image Processing",
  },
  {
    img: Card5Image,
    title: "Software Engineer Intern at Croblaze",
    desc:
      "As a Software Engineer Intern at Croblaze, I contributed to backend development by implementing secure authentication APIs with Django and MySQL. I developed JWT-based login flows with Two-Factor Authentication to serve over ten thousand users. I also refined SQL queries, reducing API response latency below 300ms.",
    skills: "Django, REST APIs, MySQL",
  },
];

const ExperienceCard = ({ img, title, desc, skills }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={img} alt={title} className="h-48 w-full object-cover" />
    <div className="p-6 text-neutral-800">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{desc}</p>
      <p className="text-sm font-semibold">Key Skills: {skills}</p>
    </div>
  </div>
);

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
