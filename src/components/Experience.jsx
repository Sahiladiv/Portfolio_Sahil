import React from "react";
import Card1Image from "../assets/EasleyDunn_exp.png";         // Add image for current role
import Card2Image from "../assets/PSU_TA.png";
import Card3Image from "../assets/PSU_RA.png";
import Card4Image from "../assets/Webminix_exp.png";
import Card5Image from "../assets/Croblaze_exp4.png";

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="my-10 text-4xl font-serif text-black text-center mb-8">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Easley Dunn - AI Systems Engineer */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Card1Image} alt="AI Systems Engineer" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">AI Systems Engineer, Easley Dunn Productions</h3>
              <p className="mb-4">
                Designed modular AI agents for an eSports mobile game, implementing strategic behavior logic to enhance player experience. Collaborated remotely in agile sprints with cross-functional teams.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python, Game AI, Agile, Modular Architecture
              </p>
            </div>
          </div>

          {/* TA - PSU */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Card2Image} alt="Teaching Assistant" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Teaching Assistant, Penn State University</h3>
              <p className="mb-4">
                Guided students in Data Structures, Algorithms, Theory of Computation, and Python. Streamlined grading through automation and supported hands-on learning.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python, Algorithms, Automata, SQL
              </p>
            </div>
          </div>

          {/* Smeal - AI/ML Researcher */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Card3Image} alt="AI/ML Engineer" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">AI/ML Engineer, Smeal Business School</h3>
              <p className="mb-4">
                Analyzed 2M+ trade records to extract sentiment-risk signals and built interpretable models, boosting profiling precision by 23% and insight speed by 3×.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python, Pandas, MiniLM, Data Analysis
              </p>
            </div>
          </div>

          {/* Webminix - Software Engineer */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Card4Image} alt="ML Software Engineer" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Software Engineer (ML), Webminix</h3>
              <p className="mb-4">
                Developed forecasting and anomaly detection systems on AWS, reducing client latency by 30% and automating model pipelines with 15% accuracy improvement.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python, AWS, Forecasting, ML Pipelines
              </p>
            </div>
          </div>

          {/* Croblaze - Backend Developer */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Card5Image} alt="Backend Developer" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Backend Developer, Croblaze</h3>
              <p className="mb-4">
                Built secure Django APIs and integrated Stripe/SendGrid, supporting 10K+ daily users and improving deployment reliability by 35%.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Django, REST APIs, Stripe, SendGrid
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
