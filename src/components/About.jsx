import profilePic from "../assets/SahilProfile.jpg";

const About = () => (
  <section
    id="about"
    className="bg-gradient-to-b from-blue-100/40 to-white py-16 px-4 lg:px-20"
  >
    {/* ---------- Grid Layout ---------- */}
    <div className="max-w-7xl mx-auto grid gap-8 lg:gap-10 lg:grid-cols-2 items-center">
      {/* ───── Left: Text ───── */}
      <div className="text-left">
        <h1
          className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-3"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Sahil Adivarekar
        </h1>

        <div className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed space-y-1">
          <p>
            I’m a versatile engineer with a passion for building intelligent,
            scalable systems that blend the power of machine learning and
            software engineering. With a strong foundation in Python, PyTorch,
            TensorFlow, Hugging Face, and cloud platforms like AWS, I specialize
            in developing end-to-end AI solutions—from model research to
            deployment.
          </p>
          <p>
            My experience spans multimodal learning, generative AI, NLP, and
            computer vision. I’ve led projects ranging from autoencoder-based
            photo restoration to trading bots trained with reinforcement
            learning, and built smart, search-driven platforms using embeddings
            and LLMs.
          </p>
          <p>
            I thrive at the intersection of deep learning and full-stack
            engineering—designing systems that are not only innovative, but also
            robust and production-ready. Driven by curiosity and impact, I’m
            eager to solve real-world problems through AI-powered software.
          </p>
        </div>

        {/* ✅ Resume Download Button */}
        <a
          href="/Sahil_Adivarekar_Resume.pdf"
          download
          className="inline-block mt-8 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          Download Résumé
        </a>
      </div>

      {/* ───── Right: Image ───── */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={profilePic}
          alt="Sahil Adivarekar"
          className="w-[280px] h-[380px] lg:w-[360px] lg:h-[480px] object-cover rounded-xl shadow-xl"
        />
      </div>
    </div>
  </section>
);

export default About;
