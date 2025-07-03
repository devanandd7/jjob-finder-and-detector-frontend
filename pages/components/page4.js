// import React, { useEffect, useState } from 'react';

// const SplineOnlyPage = ({ setCurrentPage }) => {
//   const [scriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     // Check if the spline-viewer script is already loaded
//     if (window.customElements.get('spline-viewer')) {
//       setScriptLoaded(true);
//       return;
//     }

//     const scriptId = 'spline-viewer-script-only-page'; // Unique ID for this script
//     let script = document.getElementById(scriptId);

//     if (!script) {
//       script = document.createElement('script');
//       script.id = scriptId;
//       script.type = 'module';
//       script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
//       script.async = true;

//       script.onload = () => {
//         // Give a small delay to ensure the custom element is fully defined after script load
//         setTimeout(() => {
//           setScriptLoaded(true);
//         }, 100);
//       };

//       script.onerror = (error) => {
//         console.error("Failed to load Spline viewer script:", error);
//       };

//       document.head.appendChild(script);
//     } else {
//       // If script tag already exists, but custom element not ready, poll for it
//       const checkCustomElement = setInterval(() => {
//         if (window.customElements.get('spline-viewer')) {
//           setScriptLoaded(true);
//           clearInterval(checkCustomElement);
//         }
//       }, 50);
//       return () => clearInterval(checkCustomElement);
//     }
//   }, []);

//   return (
//     <div className="relative w-screen h-screen bg-gray-950 flex flex-col items-center justify-center text-white overflow-hidden">
//       {scriptLoaded ? (
//         <spline-viewer
//           url="https://prod.spline.design/3Ovp7Ihzr33dwfYT/scene.splinecode" // Your provided Spline scene URL
//           style={{ width: '100%', height: '100%', display: 'block' }}
//         ></spline-viewer>
//       ) : (
//         <div className="text-xl">Loading Spline 3D scene...</div>
//       )}

//       <button
//         onClick={() => setCurrentPage('home')}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default SplineOnlyPage;




// import React, { useEffect, useState } from 'react';

// const SplineOnlyPage = ({ setCurrentPage }) => {
//   const [scriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     // Check if the spline-viewer script is already loaded
//     if (window.customElements.get('spline-viewer')) {
//       setScriptLoaded(true);
//       return;
//     }

//     const scriptId = 'spline-viewer-script-only-page'; // Unique ID for this script
//     let script = document.getElementById(scriptId);

//     if (!script) {
//       script = document.createElement('script');
//       script.id = scriptId;
//       script.type = 'module';
//       script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
//       script.async = true;

//       script.onload = () => {
//         // Give a small delay to ensure the custom element is fully defined after script load
//         setTimeout(() => {
//           setScriptLoaded(true);
//         }, 100);
//       };

//       script.onerror = (error) => {
//         console.error("Failed to load Spline viewer script:", error);
//       };

//       document.head.appendChild(script);
//     } else {
//       // If script tag already exists, but custom element not ready, poll for it
//       const checkCustomElement = setInterval(() => {
//         if (window.customElements.get('spline-viewer')) {
//           setScriptLoaded(true);
//           clearInterval(checkCustomElement);
//         }
//       }, 50);
//       return () => clearInterval(checkCustomElement);
//     }
//   }, []);

//   return (
//     <div className="relative w-screen h-screen bg-gray-950 flex flex-col items-center justify-center text-white overflow-hidden">
//       {scriptLoaded ? (
//         <spline-viewer
//           url="https://prod.spline.design/3Ovp7Ihzr33dwfYT/scene.splinecode" // Your provided Spline scene URL
//           style={{ width: '100%', height: '100%', display: 'block' }}
//         ></spline-viewer>
//       ) : (
//         <div className="text-xl">Loading Spline 3D scene...</div>
//       )}

//       {/* Image placed in the center, over the Spline scene */}
//       <img
//         src="https://placehold.co/300x200/FFFFFF/000000?text=Overlay+Image" // Dummy image URL
//         alt="Overlay"
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" // z-10 to be above Spline, pointer-events-none to let mouse interact with Spline
//       />

//       <button
//         onClick={() => setCurrentPage('home')}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default SplineOnlyPage;


import React, { useEffect, useState } from 'react';

const SplineOnlyPage = ({ setCurrentPage }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  // State to track hover for each text element
  const [hoveredText, setHoveredText] = useState(null);

  useEffect(() => {
    // Check if the spline-viewer script is already loaded
    if (window.customElements.get('spline-viewer')) {
      setScriptLoaded(true);
      return;
    }

    const scriptId = 'spline-viewer-script-only-page'; // Unique ID for this script
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
      script.async = true;

      script.onload = () => {
        // Give a small delay to ensure the custom element is fully defined after script load
        setTimeout(() => {
          setScriptLoaded(true);
        }, 100);
      };

      script.onerror = (error) => {
        console.error("Failed to load Spline viewer script:", error);
      };

      document.head.appendChild(script);
    } else {
      // If script tag already exists, but custom element not ready, poll for it
      const checkCustomElement = setInterval(() => {
        if (window.customElements.get('spline-viewer')) {
          setScriptLoaded(true);
          clearInterval(checkCustomElement);
        }
      }, 50);
      return () => clearInterval(checkCustomElement);
    }
  }, []);

  // Text data for easy mapping and positioning
  const texts = [
    // Adjusted positions and added padding for larger hover area
    { id: 'text1', content: 'Innovative Solutions', positionClass: 'top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2' },
    { id: 'text2', content: 'Future Technologies', positionClass: 'top-[25%] right-[20%] translate-x-1/2 -translate-y-1/2' },
    { id: 'text3', content: 'Global Impact', positionClass: 'bottom-[25%] left-[20%] -translate-x-1/2 translate-y-1/2' },
    { id: 'text4', content: 'Smart Automation', positionClass: 'bottom-[25%] right-[20%] translate-x-1/2 translate-y-1/2' },
  ];

  return (
    <div className="relative w-screen h-screen bg-gray-950 flex flex-col items-center justify-center text-white overflow-hidden">
      {scriptLoaded ? (
        <spline-viewer
          url="https://prod.spline.design/3Ovp7Ihzr33dwfYT/scene.splinecode" // Your provided Spline scene URL
          style={{ width: '100%', height: '100%', display: 'block' }}
        ></spline-viewer>
      ) : (
        <div className="text-xl">Loading Spline 3D scene...</div>
      )}

      {/* Image placed in the center, over the Spline scene */}
      <img
        src="https://placehold.co/300x200/FFFFFF/000000?text=Overlay+Image" // Dummy image URL
        alt="Overlay"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" // z-10 to be above Spline, pointer-events-none to let mouse interact with Spline
      />

      {/* Text elements around the image */}
      {texts.map((textItem) => (
        <div
          key={textItem.id}
          // Increased font size and added padding for larger hover area
          className={`absolute text-xl md:text-2xl lg:text-3xl font-bold transition-opacity duration-300 z-20 p-4 rounded-lg // Added padding and rounded corners
                      ${textItem.positionClass}
                      ${hoveredText === textItem.id ? 'opacity-100 text-white' : 'opacity-0 text-white'}
                      pointer-events-auto cursor-pointer`} // pointer-events-auto for hover, cursor-pointer for visual cue
          onMouseEnter={() => setHoveredText(textItem.id)}
          onMouseLeave={() => setHoveredText(null)}
        >
          {textItem.content}
        </div>
      ))}

      <button
        onClick={() => setCurrentPage('home')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Back to Home
      </button>
    </div>
  );
};

export default SplineOnlyPage;


