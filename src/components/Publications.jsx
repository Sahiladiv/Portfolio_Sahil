import React from "react";

const publications = [
  {
    title: "Plant Disease Detection Leveraging Latent Space based Mixing Methods for Image Data Augmentation",
    authors: "Suryawanshi V. A, Sarode T. K, Adivarekar S. A.",
    venue: "Curr Agri Res 2024; 12(3)",
    link: "https://bit.ly/4fSb1xS",
    year: "2024",
  },
  {
    title: "Implementation of Exploratory Data Analysis on Weather Data",
    authors: "S. Adivarekar, S. Nanwani, N. Mandal and T. Sarode",
    venue: "2023 International Conference on Communication System, Computing and IT Applications (CSCITA), Mumbai, India",
    link: "https://doi.org/10.1109/CSCITA55725.2023.10104864",
    year: "2023",
  },
  {
    title: "Comparative Study of Regularization Techniques for VGG16, VGG19 and ResNet-50 for Plant Disease Detection",
    authors: "Suryawanshi, V., Adivarekar, S., Bajaj, K., Badami, R.",
    venue: "Proceedings of International Conference on Communication and Computational Technologies (ICCCT 2023), Springer",
    link: "https://doi.org/10.1007/978-981-99-3485-0_61",
    year: "2023",
  },
];

const Publications = () => (
  <section id="publications" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-heading animate-fade-up">Publications</h2>

      <div className="mt-12 space-y-0">
        {publications.map((pub, i) => (
          <a
            key={i}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-7 transition-colors duration-200 animate-fade-up"
            style={{
              borderBottom: '1px solid var(--border-subtle)',
              animationDelay: `${(i + 1) * 0.15}s`,
            }}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="mono px-2 py-0.5 rounded flex-shrink-0"
                    style={{
                      background: 'var(--accent-dim)',
                      color: 'var(--accent)',
                      fontSize: '0.65rem',
                    }}
                  >
                    {pub.year}
                  </span>
                </div>
                <h3
                  className="text-base font-medium leading-snug transition-colors duration-200"
                  style={{ color: 'var(--text-primary)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                >
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  {pub.authors}
                </p>
                <p className="mt-1 text-sm italic" style={{ color: 'var(--text-muted)' }}>
                  {pub.venue}
                </p>
              </div>

              {/* Arrow */}
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5"
                className="flex-shrink-0 mt-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: 'var(--text-muted)' }}
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
