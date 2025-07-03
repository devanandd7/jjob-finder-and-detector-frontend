// import React, { useState, useEffect, useRef } from 'react';

// const ImageTextRevealPage = ({ setCurrentPage }) => {
//   const [isContentVisible, setIsContentVisible] = useState(false); // Controls text and image animation
//   const pageRef = useRef(null); // Ref for the main page container

//   useEffect(() => {
//     // Trigger animations when the component mounts
//     const timer = setTimeout(() => {
//       setIsContentVisible(true);
//     }, 500); // Small delay before animations start

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       ref={pageRef}
//       className="relative w-screen h-screen bg-gray-950 flex flex-col md:flex-row items-center justify-center text-white overflow-hidden p-4 md:p-8"
//     >
//       {/* Left Section: Animated Text */}
//       <div className="flex-1 flex flex-col items-center md:items-start justify-center p-4 md:p-8 text-center md:text-left z-10">
//         <h1
//           className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-indigo-400 transition-all duration-1000 ease-out
//             ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//         >
//           Innovate. Create. Lead.
//         </h1>
//         <p
//           className={`text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 transition-all duration-1000 ease-out delay-200
//             ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//         >
//           Unleashing the next generation of AI-powered solutions for a smarter tomorrow.
//         </p>
//         <ul
//           className={`text-gray-400 text-base md:text-lg list-disc list-inside space-y-2 transition-all duration-1000 ease-out delay-400
//             ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//         >
//           <li>Advanced Machine Learning</li>
//           <li>Seamless User Experience</li>
//           <li>Scalable Cloud Infrastructure</li>
//         </ul>
//         <button
//           onClick={() => setCurrentPage('home')}
//           className={`mt-8 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 delay-500
//             ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}
//         >
//           Back to Home
//         </button>
//       </div>

//       {/* Right Section: Rotated Image with Blurred Border Box */}
//       <div className="flex-1 flex items-center justify-center p-4 md:p-8 z-10">
//         <div
//           className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
//             transform transition-all duration-1000 ease-out
//             ${isContentVisible ? 'opacity-100 rotate-45' : 'opacity-0 scale-50'}`}
//         >
//           {/* Blurred background box for 3D effect */}
//           <div
//             className="absolute inset-0 rounded-xl"
//             style={{
//               background: 'linear-gradient(45deg, #8A2BE2, #00BFFF, #39FF14)', // Vibrant "graph" gradient
//               filter: 'blur(20px)', // Blur for glow effect
//               zIndex: -1, // Behind the image
//               transform: 'scale(1.1)' // Slightly larger to create the border effect
//             }}
//           ></div>
//           {/* The actual image */}
//           <img
//             src="https://placehold.co/400x400/3B82F6/FFFFFF?text=AI+Core" // Placeholder image
//             alt="AI Core Concept"
//             className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-gray-700 shadow-xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageTextRevealPage;

import React, { useState, useRef } from 'react';

const ImageTextRevealPage = ({ setCurrentPage }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const pageRef = useRef(null);

  const handleMouseEnter = () => {
    setIsContentVisible(true);  // show text
    setIsImageVisible(true);    // rotate image
  };

  const handleMouseLeave = () => {
    setIsImageVisible(false);   // reset image rotation
    // Text stays visible
  };

  return (
    <div
      ref={pageRef}
      className="relative w-screen h-screen bg-gray-950 flex flex-col md:flex-row items-center justify-center text-white overflow-hidden p-4 md:p-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* LEFT TEXT SECTION */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center p-4 md:p-8 text-center md:text-left z-10">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-indigo-400 transition-all duration-1000 ease-out
            ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Innovate. Create. Lead.
        </h1>
        <p
          className={`text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 transition-all duration-1000 ease-out delay-200
            ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Unleashing the next generation of AI-powered solutions for a smarter tomorrow.
        </p>
        <ul
          className={`text-gray-400 text-base md:text-lg list-disc list-inside space-y-2 transition-all duration-1000 ease-out delay-400
            ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <li>Advanced Machine Learning</li>
          <li>Seamless User Experience</li>
          <li>Scalable Cloud Infrastructure</li>
        </ul>
        <button
          onClick={() => setCurrentPage('home')}
          className={`mt-8 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 delay-500
            ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          Back to Home
        </button>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 z-10">
        <div
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-700 ease-in-out"
          style={{
            transform: isImageVisible ? 'rotate(30deg) scale(1)' : 'rotate(0deg) scale(1)',
            opacity: 1,
          }}
        >
          {/* Glowing background box */}
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: 'linear-gradient(45deg, #8A2BE2, #00BFFF, #39FF14)',
              filter: 'blur(20px)',
              zIndex: -1,
              transform: 'scale(1.1)',
            }}
          ></div>

          {/* Image */}
          <img
            src="https://placehold.co/400x400/3B82F6/FFFFFF?text=AI+Core"
            alt="AI Core Concept"
            className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-gray-700 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextRevealPage;
