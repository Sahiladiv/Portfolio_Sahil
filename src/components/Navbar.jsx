import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">Portfolio</h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#education" className="hover:text-blue-600 transition duration-200">Education</a>
          </li>
          <li>
            <a href="#technologies" className="hover:text-blue-600 transition duration-200">Technology</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-600 transition duration-200">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition duration-200">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition duration-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
