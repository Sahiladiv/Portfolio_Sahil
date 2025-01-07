import React from "react";
// Update the paths/names below to match where your images are stored
import Card1Image from "../assets/PSU_RA.png";
import Card2Image from "../assets/PSU_TA.png";
import Card3Image from "../assets/Nexacore_exp3.png";
import Card4Image from "../assets/Croblaze_exp4.png";



const Experience = () => {
  return (
    <section id="experience" className="py-16">
      {/* Outer container with horizontal padding and centered layout */}
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
        <h2 className="my-10 text-4xl font-serif text-black text-center mb-8">Experience</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image */}
            <img
              src={Card1Image}
              alt="Research Assistant"
              className="h-48 w-full object-cover"
            />
            {/* Card Content */}
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Research Assistant, Penn State University</h3>
              <p className="mb-4">
              Conducted pattern analysis of trading data, automated data collection through web scraping, and analyzed electoral trends and voter behavior.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python,  Pandas
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card2Image}
              alt="Teaching Assistant"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2"> Teaching Assistant, Penn State University
              </h3>
              <p className="mb-4">
              Guided students in courses covering data structures, algorithms, theory of computation, and Python programming, while streamlining grading processes through automation.
              </p>
              <p className="text-sm font-semibold">
                Key Skills:  Python Algorithms, Automata, SQL
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card3Image}
              alt="Software Consultant"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Software Consultant, Nexacore Solutions</h3>
              <p className="mb-4">
              Automated client workflows using Google Apps Script, optimizing operations and boosting efficiency.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Google App Script
              </p>
            </div>
          </div>

           {/* Card 4 */}
           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card4Image}
              alt="Backend Developer"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2"> Backend Developer, Croblaze
              </h3>
              <p className="mb-4">
              Developed secure, scalable APIs for user authentication and payment systems, implementing robust two-factor authentication measures.              </p>
              <p className="text-sm font-semibold">
                Key Skills:  Django, Django RESTful API
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
