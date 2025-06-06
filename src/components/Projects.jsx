import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      {/* Outer container with horizontal padding and centered layout */}
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="my-10 text-4xl font-serif text-black text-center mb-8">Projects</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Context Aware Story Generation</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
              <p className="mb-4">
                Engineered an AI-powered story generation system that dynamically creates context-aware narratives and captions. Leveraged symbolic reasoning in combination of ViT transformer and MiniLM sentence transformer to enhance logical consistency to generate narratives by using symbolic rules
              </p>
            </div>
          </div>

          {/* Card 2 - News Recommendation Engine */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">NeuroScoop: News Recommendation System</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
              <p className="mb-4">
                Developed a Streamlit based news article recommendation engine. Implemented vector embeddings using ChromaDB to store the vector embeddings derived using BERT based MiniLM sentence transformer.
              </p>
            </div>
          </div>
          
          {/* Card 2 - AI-Powered Research Paper Summarizer */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">ResearchMind: AI Research Assistant</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
              <p className="mb-4">
                Developed a Django based research paper summarization tool integrating LangChain, PyMuPDF, and pdfminer for efficient text extraction and summarization. Implemented vector embeddings (FAISS) to enable multi-paper comparison for literature review assistance.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Feature Mixing with Gradient Descent for Plant Disease Detection</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
              <p className="mb-4">
                Created a feature-based augmentation technique leveraging the Hadamard matrix and SGD to boost model performance in detecting plant diseases using architectures like ResNet-50, VGG-16, and VGG-19.
              </p>
            </div>
          </div>

          {  /*Card 4 */}
         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">ASL Recognition with Computer Vision and Deep Learning</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
              <p className="mb-4">
                Implemented a pipeline using SIFT, ORB, FLANN approach to detect and classify American Sign Language alphabets and phrases.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Old Photo Restoration using Auto-encoders</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
              <p className="mb-4">
                Developed an auto-encoder method to remove noise and scratches from vintage photos, enhancing color and resolution for improved image quality.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Inkspire: A Dynamic Blogging Website</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
              <p className="mb-4">
                Built a Django-based blogging platform featuring a recommendation engine and NLP functionalities (text summarization, paraphrasing, spell correction, sentiment analysis) for seamless blog creation and sharing.
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Data Analysis of Rainfall Patterns in Mumbai</h3>
              <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
              <p className="mb-4">
                This project explored rainfall patterns in Mumbai, India, through a collaboration with the Maharashtra Meteorological Department. By diving deep into weather data, we conducted exploratory data analysis (EDA), feature engineering, and data manipulation to uncover meaningful trends and patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
