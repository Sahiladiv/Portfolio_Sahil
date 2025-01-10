// import React from 'react'
// import About from './components/About'
// import Technology from './components/Technology'
// import Experience from './components/Experience'
// import Projects from './components/Projects'
// import Contact from './components/Contact'

// const App = () => {
//   return (
//     <div>
//       <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900"></div>
//       <div className="fixed top-0 -z-10 h-full w-full"></div>
//       <div className="relative h-screen">
//         {/* Background Pattern */}
//         <div className="absolute inset-0">
//           <div className="relative h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-blue-200 [&>div]:to-white">
//             <div></div>
//           </div>
//         </div>
//         <div className="container mx-auto px-8"></div>
//         <About />
//         <Technology />
//         <Experience />
//         <Projects />
//         <Contact />
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react';
import About from './components/About';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900">
      {/* Fixed Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-gradient-to-b from-blue-200 to-white"></div>
      </div>

      {/* Content Sections */}
      <div className="relative">
        <div className="container mx-auto px-8">
          <About />
          <Technology />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
