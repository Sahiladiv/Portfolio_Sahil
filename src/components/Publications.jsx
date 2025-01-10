import React from "react";

const Publications = () => {
  const publications = [
    {
      title:
        "Plant Disease Detection Leveraging Latent Space based Mixing Methods for Image Data Augmentation",
      authors: "Suryawanshi V. A, Sarode T. K, Adivarekar S. A.",
      journal: "Curr Agri Res 2024; 12(3).",
      link: "https://bit.ly/4fSb1xS",
    },
    {
      title:
        "Implementation of Exploratory Data Analysis on Weather Data",
      authors: "S. Adivarekar, S. Nanwani, N. Mandal and T. Sarode",
      conference:
        "2023 International Conference on Communication System, Computing and IT Applications (CSCITA), Mumbai, India, 2023.",
      doi: "10.1109/CSCITA55725.2023.10104864",
    },
    {
      title:
        "Comparative Study of Regularization Techniques for VGG16, VGG19 and ResNet-50 for Plant Disease Detection",
      authors: "Suryawanshi, V., Adivarekar, S., Bajaj, K., Badami, R.",
      conference:
        "In: Kumar, S., Hiranwal, S., Purohit, S., Prasad, M. (eds) Proceedings of International Conference on Communication and Computational Technologies. ICCCT 2023. Algorithms for Intelligent Systems. Springer, Singapore.",
      doi: "https://doi.org/10.1007/978-981-99-3485-0_61",
    },
  ];

  return (
    <div className="publications-container p-10">
      <h1 className="text-2xl font-bold mb-4">Research Publications</h1>
      <ol className="list-decimal pl-6">
        {publications.map((pub, index) => (
          <li key={index} className="mb-4">
            <span className="font-bold">{pub.title}</span>
            <br />
            {pub.authors}
            <br />
            {pub.journal || pub.conference}
            <br />
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Available here
              </a>
            )}
            {pub.doi && (
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                DOI: {pub.doi}
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Publications;
