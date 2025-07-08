import React from "react";
import psuLogo from "../assets/psu-logo.png";
import mumbaiLogo from "../assets/mumbai-logo.png";

const EDUCATION = [
  {
    logo: mumbaiLogo,
    university: "University of Mumbai",
    degree: "B.E. Computer Engineering",
    location: "Mumbai, India",
    dates: "Aug 2019 – May 2023",
  },
  {
    logo: psuLogo,
    university: "The Pennsylvania State University",
    degree: "M.S. Computer Science and Engineering",
    location: "University Park, PA",
    dates: "Aug 2023 – May 2025",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white px-6">
          <h2 className="my-10 text-4xl font-serif text-black text-center mb-8">
            Education
          </h2>
      <div className="relative flex justify-center items-start gap-12 px-6">
        {/* Timeline Line */}
        <div className="absolute top-16 left-0 right-0 h-1 bg-gray-300 z-0" />

        {EDUCATION.map((edu, index) => (
          <div key={index} className="flex flex-col items-center text-center z-10">
            {/* Date */}
            <p className="text-sm font-semibold text-blue-700 mb-2">{edu.dates}</p>

            {/* Timeline Dot with Image */}
            <div className="relative z-10 flex justify-center items-center w-16 h-16 bg-white border-2 border-blue-500 rounded-full shadow-md mb-3">
              <img
                src={edu.logo}
                alt={`${edu.university} logo`}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* University & Degree */}
            <div className="mt-2">
              <p className="text-lg font-semibold text-gray-800">{edu.university}</p>
              <p className="text-sm text-gray-500">{edu.location}</p>
              <p className="text-base text-gray-700 mt-1">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
