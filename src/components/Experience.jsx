import React from "react";
// Update the paths below to your actual image assets
import PSU_RA from "../assets/PSU_RA.png";
import PSU_TA from "../assets/PSU_TA.png";
import Croblaze from "../assets/Croblaze_exp4.png";
import Webminix from "../assets/Webminix_exp.png";
import TSEC from "../assets/TSEC_exp.png";
import EasleyDunn from "../assets/EasleyDunn_exp.png";

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

          {/* Easley Dunn Productions */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={EasleyDunn} alt="Easley Dunn" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">AI Systems Engineer, Easley Dunn Productions</h3>
              <p className="mb-4">
                Built modular AI systems for an eSports game, enabling strategic decision-making. Collaborated in Agile sprints to deliver optimized behaviors for enhanced gameplay.
              </p>
              <p className="text-sm font-semibold">Key Skills: AI Systems, Game Logic, Remote Collaboration</p>
            </div>
          </div>

          {/* PSU Research Assistant */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={PSU_RA} alt="Research Assistant" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">AI/ML Engineer, Smeal Business School</h3>
              <p className="mb-4">
                Analyzed 2M+ ZuluTrade records to identify sentiment-risk patterns, improving profiling by 23% and reducing review time by 40% with MiniLM models.
              </p>
              <p className="text-sm font-semibold">Key Skills: Python, NLP, MiniLM, Data Analytics</p>
            </div>
          </div>

          {/* PSU TA */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={PSU_TA} alt="Teaching Assistant" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Teaching Assistant, Penn State University</h3>
              <p className="mb-4">
                Mentored students in data structures, algorithms, theory of computation, and Python. Improved grading efficiency via automation tools.
              </p>
              <p className="text-sm font-semibold">Key Skills: Python, SQL, Automata, Grading Automation</p>
            </div>
          </div>

          {/* Webminix */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Webminix} alt="Webminix Consulting" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">ML Engineer, Webminix Consulting</h3>
              <p className="mb-4">
                Deployed forecasting and anomaly detection on AWS, reducing latency by 30% and increasing rollout speed by 25% through automated ML pipelines.
              </p>
              <p className="text-sm font-semibold">Key Skills: AWS, Forecasting, MLOps, Python</p>
            </div>
          </div>

          {/* TSEC Research */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={TSEC} alt="TSEC Research" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">ML Researcher, TSEC</h3>
              <p className="mb-4">
                Achieved 92% accuracy in rainfall prediction using Random Forest. Enhanced disease detection on 54K+ plant images using CNNs and advanced augmentation.
              </p>
              <p className="text-sm font-semibold">Key Skills: Random Forest, CNN, Computer Vision</p>
            </div>
          </div>

          {/* Croblaze */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Croblaze} alt="Croblaze" className="h-48 w-full object-cover" />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Software Engineer, Croblaze</h3>
              <p className="mb-4">
                Built Django APIs for authentication and payment workflows serving 10K+ users. Integrated Stripe & SendGrid to cut workflow friction by 50%.
              </p>
              <p className="text-sm font-semibold">Key Skills: Django, REST APIs, Stripe, SendGrid</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
