import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi'
import { BiLogoPython } from "react-icons/bi";
import { PiFileSqlFill } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";




const Technology = () => {
  return (
    <div>
      <h2 className="my-20 text-4xl font-serif text-black text-center mb-8">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <BiLogoPython className="text-7xl text-yellow-400" />
          <p className="mt-2 text-center">Python</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <SiPytorch className="text-7xl text-orange-700" />
          <p className="mt-2 text-center">Pytorch</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
        <img
          src="/assets/hugging-face.png"
          alt="Hugging Face"
          className="h-20 w-20 mx-auto"/>
        <p className="mt-2 text-center">Hugging Face</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <SiDjango className="text-7xl text-green-700" />
          <p className="mt-2 text-center">Django</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <FaJava className="text-7xl text-orange-400" />
          <p className="mt-2 text-center">Java</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <FaAndroid className="text-7xl text-green-400" />
          <p className="mt-2 text-center">Android</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <PiFileSqlFill className="text-7xl text-red-400" />
          <p className="mt-2 text-center">SQL</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
          <p className="mt-2 text-center">Postgresql</p>
        </div>
        <div className="flex flex-col items-center rounded-2xl border-4 border-gray-200 p-4">
            <IoLogoFirebase className="text-7xl text-yellow-500" />
            <p className="mt-2 text-center text-black">Firebase</p>
        </div>
        <div className="rounded-2xl border-4 border-white-800 p-4">
          <FaAws className="text-7xl text-black-400" />
          <p className="mt-2 text-center">AWS</p>
        </div>        
      </div>
    </div>
  );
};

export default Technology;
