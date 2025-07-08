import { ABOUT_CONTENT } from "../constants";
import profilePic from "../assets/SahilProfile.jpg";

const About = () => {
  return (
    <section className="px-4 py-8 lg:px-16 lg:py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1
            className="pb-4 text-4xl md:text-6xl lg:text-7xl tracking-tight"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
            }}
          >
            Sahil Adivarekar
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-neutral-900 mb-4">
            MS in Computer Science and Engineering at 
            <br></br>The Pennslyvania State University
          </p>

          <span
            className="text-3xl lg:text-4xl tracking-tight"
            style={{ color: "#002D62" }}
          >
           Software Developer | AI/ML Engineer | Data Scientist

          </span>

          <p className="mt-6 text-base md:text-lg text-gray-700">
            {ABOUT_CONTENT}
          </p>

          <a
            href="/Sahil_Adivarekar_Resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="flex justify-center lg:justify-end">
            <img
              src={profilePic}
              alt="Sahil Adivarekar"
              className="w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
