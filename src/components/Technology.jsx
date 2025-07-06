import React from 'react';
import {
  BiLogoPython,
  BiLogoPostgresql,
} from 'react-icons/bi';
import { PiFileSqlFill } from 'react-icons/pi';
import {
  FaJava,
  FaAws,
  FaAndroid,
  FaDocker,
} from 'react-icons/fa';
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
  SiTensorboard,
  SiOpenai,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

/* ------------------------------------------------------------------ */
/*  Feel free to rearrange the list to change the display order.      */
/* ------------------------------------------------------------------ */
const tech = [
  { name: 'Python', icon: <BiLogoPython className="text-7xl text-yellow-400" /> },
  { name: 'PyTorch', icon: <SiPytorch className="text-7xl text-orange-700" /> },
  { name: 'Hugging Face', img: '/assets/hugging-face.png' },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-7xl text-orange-600" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="text-7xl text-orange-500" /> },
  { name: 'LangChain', img: '/assets/langchain.png' },
  { name: 'ChromaDB', img: '/assets/chromadb.png' },
  { name: 'FastAPI', icon: <SiFastapi className="text-7xl text-emerald-600" /> },
  { name: 'Flask', icon: <SiFlask className="text-7xl text-gray-600" /> },
  { name: 'Django', icon: <SiDjango className="text-7xl text-green-700" /> },
  { name: 'Java', icon: <FaJava className="text-7xl text-orange-400" /> },
  { name: 'Android', icon: <FaAndroid className="text-7xl text-green-400" /> },
  { name: 'SQL', icon: <PiFileSqlFill className="text-7xl text-red-400" /> },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql className="text-7xl text-sky-700" /> },
  { name: 'Pandas', icon: <SiPandas className="text-7xl text-black" /> },
  { name: 'NumPy', icon: <SiNumpy className="text-7xl text-indigo-600" /> },
  { name: 'TensorBoard', icon: <SiTensorboard className="text-7xl text-orange-500" /> },
  { name: 'OpenAI', icon: <SiOpenai className="text-7xl text-gray-900" /> },
  { name: 'Docker', icon: <FaDocker className="text-7xl text-sky-500" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="text-7xl text-blue-500" /> },
  { name: 'Firebase', icon: <IoLogoFirebase className="text-7xl text-yellow-500" /> },
  { name: 'AWS', icon: <FaAws className="text-7xl text-black" /> },
];

const Technology = () => {
  return (
    <section id="technologies" className="my-20">
      <h2 className="mb-8 text-center font-serif text-4xl text-black">
        Technologies
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {tech.map(({ name, icon, img }) => (
          <div
            key={name}
            className="flex flex-col items-center rounded-2xl border-4 border-gray-200 p-4"
          >
            {icon ??
              (img && (
                <img
                  src={img}
                  alt={name}
                  className="h-20 w-20 object-contain"
                />
              ))}
            <p className="mt-2 text-center text-black">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
