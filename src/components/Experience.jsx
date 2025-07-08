import React from "react";
import Card1Image from "../assets/EasleyDunn_exp.png";
import Card2Image from "../assets/PSU_TA.png";
import Card3Image from "../assets/PSU_RA.png";
import Card4Image from "../assets/Webminix_exp.png";
import Card5Image from "../assets/Croblaze_exp4.png";
import Card6Image from "../assets/TSEC_exp.png";

const Experience = () => (
  <section id="experience" className="py-16">
    <div className="container mx-auto px-8">
      <h2 className="my-10 text-4xl font-serif text-center text-black">Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Easley Dunn */}
        <ExperienceCard
          img={Card1Image}
          title="AI Systems Engineer, Easley Dunn Productions"
          desc="Designed modular AI agents for an eSports mobile game, implementing strategic behavior logic to enhance player experience. Collaborated remotely in agile sprints with cross-functional teams."
          skills="Python, Game AI, Agile, Modular Architecture"
        />

        {/* TA - PSU */}
        <ExperienceCard
          img={Card2Image}
          title="Teaching Assistant, Penn State University"
          desc="Guided students in Data Structures, Algorithms, Theory of Computation, and Python. Streamlined grading through automation and supported hands-on learning."
          skills="Python, Algorithms, Automata, SQL"
        />

        {/* RA - PSU */}
        <ExperienceCard
          img={Card3Image}
          title="AI/ML Engineer, Smeal Business School"
          desc="Analyzed 2M+ trade records to extract sentiment-risk signals and built interpretable models, boosting profiling precision by 23% and insight speed by 3×."
          skills="Python, Pandas, MiniLM, Data Analysis"
        />

        {/* Webminix */}
        <ExperienceCard
          img={Card4Image}
          title="Software Engineer (ML), Webminix"
          desc="Developed forecasting and anomaly detection systems on AWS, reducing client latency by 30% and automating model pipelines with 15% accuracy improvement."
          skills="Python, AWS, Forecasting, ML Pipelines"
        />

        {/* TSEC */}
        <ExperienceCard
          img={Card6Image}
          title="ML Engineer, TSEC AI Research Lab"
          desc="Led research on regularization techniques for plant disease detection using ResNet50 and VGG architectures, boosting generalization and model robustness on PlantVillage dataset."
          skills="PyTorch, Deep Learning, ResNet, Image Processing"
        />

        {/* Croblaze */}
        <ExperienceCard
          img={Card5Image}
          title="Backend Developer, Croblaze"
          desc="Built secure Django APIs and integrated Stripe/SendGrid, supporting 10K+ daily users and improving deployment reliability by 35%."
          skills="Django, REST APIs, Stripe, SendGrid"
        />
      </div>
    </div>
  </section>
);

/* --- Reusable Card Component --- */
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

export default Experience;
