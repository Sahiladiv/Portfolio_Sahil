// components/Technology.jsx
import React, { useRef, useState, useEffect } from 'react';
import {
  BiLogoPython,
  BiLogoPostgresql,
} from 'react-icons/bi';
import { PiFileSqlFill } from 'react-icons/pi';
import { FaJava, FaAws, FaAndroid, FaDocker, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  SiDjango,
  SiPytorch,
  SiFastapi,
  SiFlask,
  SiScikitlearn,
  SiTensorflow,
  SiKubernetes,
  SiNumpy,
  SiPandas,
  SiOpenai,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

/* ------------------------------------------------------------------ */
/*  Rearrange this list to change display order                       */
/* ------------------------------------------------------------------ */
const tech = [
  { name: 'Python',         Icon: BiLogoPython,     color: 'text-yellow-400' },
  { name: 'PyTorch',        Icon: SiPytorch,        color: 'text-orange-700' },
  { name: 'Hugging Face',   img:  '/assets/hugging-face.png' },
  { name: 'TensorFlow',     Icon: SiTensorflow,     color: 'text-orange-600' },
  { name: 'Scikit-learn',   Icon: SiScikitlearn,    color: 'text-orange-500' },
  { name: 'LangChain',      img:  '/assets/langchain.png' },
  { name: 'ChromaDB',       img:  '/assets/chromadb.png' },
  { name: 'FastAPI',        Icon: SiFastapi,        color: 'text-emerald-600' },
  { name: 'Flask',          Icon: SiFlask,          color: 'text-gray-600' },
  { name: 'Django',         Icon: SiDjango,         color: 'text-green-700' },
  { name: 'Java',           Icon: FaJava,           color: 'text-orange-400' },
  { name: 'Android',        Icon: FaAndroid,        color: 'text-green-400' },
  { name: 'SQL',            Icon: PiFileSqlFill,    color: 'text-red-400' },
  { name: 'PostgreSQL',     Icon: BiLogoPostgresql, color: 'text-sky-700' },
  { name: 'Pandas',         Icon: SiPandas,         color: 'text-black' },
  { name: 'NumPy',          Icon: SiNumpy,          color: 'text-indigo-600' },
  { name: 'OpenAI',         Icon: SiOpenai,         color: 'text-gray-900' },
  { name: 'Docker',         Icon: FaDocker,         color: 'text-sky-500' },
  { name: 'Kubernetes',     Icon: SiKubernetes,     color: 'text-blue-500' },
  { name: 'Firebase',       Icon: IoLogoFirebase,   color: 'text-yellow-500' },
  { name: 'AWS',            Icon: FaAws,            color: 'text-black' },
];

export default function Technology() {
  const railRef   = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd,   setAtEnd]   = useState(false);

  /** helper to update arrow-visibility state */
  const updateEdgeFlags = () => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);                                   // small fuzz
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  /** scroll handler for arrows */
  const scrollBy = (dx) => {
    railRef.current?.scrollBy({ left: dx, behavior: 'smooth' });
  };

  useEffect(() => {
    updateEdgeFlags();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateEdgeFlags);
    window.addEventListener('resize', updateEdgeFlags);
    return () => {
      el.removeEventListener('scroll', updateEdgeFlags);
      window.removeEventListener('resize', updateEdgeFlags);
    };
  }, []);

  return (
    <section id="technologies" className="my-20">
      <h2 className="mb-8 text-center font-serif text-4xl text-black">
        Technologies
      </h2>

      {/* ---------- Carousel wrapper ---------- */}
      <div className="relative">
        {/* left arrow */}
        <button
          aria-label="Scroll left"
          className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow md:p-3
                     transition-opacity duration-200 ${atStart ? 'opacity-0 pointer-events-none' : 'opacity-90 hover:opacity-100'}`}
          onClick={() => scrollBy(-300)}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* right arrow */}
        <button
          aria-label="Scroll right"
          className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow md:p-3
                     transition-opacity duration-200 ${atEnd ? 'opacity-0 pointer-events-none' : 'opacity-90 hover:opacity-100'}`}
          onClick={() => scrollBy(300)}
        >
          <FaChevronRight size={24} />
        </button>

        {/* scrolling rail */}
        <div
          ref={railRef}
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-2 px-6"
        >
          {tech.map(({ name, Icon, img, color }) => (
            <div
              key={name}
              className="flex-none w-32 h-36 snap-center rounded-2xl border-4 border-gray-200 p-4
                         flex flex-col items-center justify-center"
            >
              {Icon ? (
                <Icon className={`text-6xl ${color}`} aria-label={name} />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={img}
                  alt={name}
                  className="h-16 w-16 object-contain"
                />
              )}
              <p className="mt-2 text-center text-sm font-serif">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
