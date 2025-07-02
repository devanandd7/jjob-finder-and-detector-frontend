// import React, { useEffect, useState } from 'react';

// // This component will render your Spline scene using the web component
// const SplinePreviewTwo = () => {
//   const [scriptLoaded, setScriptLoaded] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // State to track mouse position
//   const [cursorVisible, setCursorVisible] = useState(false); // State to control cursor visibility

//   useEffect(() => {
//     // Check if the script is already loaded or if the custom element is registered
//     if (window.customElements.get('spline-viewer')) {
//       setScriptLoaded(true);
//       return;
//     }

//     const scriptId = 'spline-viewer-script-two'; // Unique ID for this script
//     let script = document.getElementById(scriptId);

//     if (!script) {
//       script = document.createElement('script');
//       script.id = scriptId;
//       script.type = 'module';
//       script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
//       script.async = true; // Load asynchronously

//       script.onload = () => {
//         // Wait a moment for the custom element to be fully defined
//         setTimeout(() => {
//           setScriptLoaded(true);
//         }, 100);
//       };

//       script.onerror = (error) => {
//         console.error("Failed to load Spline viewer script:", error);
//       };

//       document.head.appendChild(script);
//     } else {
//       // If script tag already exists, but custom element not ready, wait for it
//       const checkCustomElement = setInterval(() => {
//         if (window.customElements.get('spline-viewer')) {
//           setScriptLoaded(true);
//           clearInterval(checkCustomElement);
//         }
//       }, 50);
//       return () => clearInterval(checkCustomElement);
//     }

//     return () => {
//       // Cleanup is generally not needed for globally loaded scripts like this
//     };
//   }, []); // Run once on mount

//   // Handle mouse movement to update custom cursor position
//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   // Handle mouse entering the container to show custom cursor
//   const handleMouseEnter = () => {
//     setCursorVisible(true);
//   };

//   // Handle mouse leaving the container to hide custom cursor
//   const handleMouseLeave = () => {
//     setCursorVisible(false);
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-gray-950 relative overflow-hidden"
//       onMouseMove={handleMouseMove} // Re-added mouse movement tracking
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ cursor: 'none' }} // Hide default cursor
//     >
//       {scriptLoaded ? (
//         // Render the spline-viewer web component only when the script is loaded
//         <spline-viewer
//           url="https://prod.spline.design/OWO3tEcbSjZKzwSG/scene.splinecode" // NEW SPLINE URL
//           style={{ width: '100%', height: '100vh', minHeight: '500px', display: 'block' }}
//         ></spline-viewer>
//       ) : (
//         <div className="text-white text-xl">Loading 3D scene...</div>
//       )}

//       {/* Custom Cursor with "Job" text - Transparent background, larger text */}
//       <div
//         className={`absolute pointer-events-none transition-opacity duration-150 ease-out
//                     text-white font-bold text-4xl // Changed text size to 4xl (larger)
//                     ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
//         style={{
//           left: `${mousePosition.x + 15}px`, // Offset from actual cursor position
//           top: `${mousePosition.y + 15}px`,  // Offset from actual cursor position
//           transform: 'translate(-50%, -50%)', // Center the custom cursor on its own coordinates
//           zIndex: 9999, // Ensure it's on top
//         }}
//       >
//         Job
//       </div>

//       {/* Basic styling for the container to ensure the viewer takes up space */}
//       <style>{`
//         body { margin: 0; overflow: hidden; }
//         html, body, #root { height: 100%; width: 100%; }
//       `}</style>
//     </div>
//   );
// };

// export default SplinePreviewTwo;



import SecondPage from './secondPage';

import React, { useEffect, useState } from 'react';

// This component will render your Spline scene using the web component
const SplinePreviewTwo = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // State to track mouse position
  const [cursorVisible, setCursorVisible] = useState(false); // State to control cursor visibility

   useEffect(() => {
    // Check if the script is already loaded or if the custom element is registered
    if (window.customElements.get('spline-viewer')) {
      setScriptLoaded(true);
      return;
    }

    const scriptId = 'spline-viewer-script-two'; // Unique ID for this script
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
      script.async = true; // Load asynchronously

      script.onload = () => {
        // Wait a moment for the custom element to be fully defined
        setTimeout(() => {
          setScriptLoaded(true);
        }, 100);
      };

      script.onerror = (error) => {
        console.error("Failed to load Spline viewer script:", error);
      };

      document.head.appendChild(script);
    } else {
      // If script tag already exists, but custom element not ready, wait for it
      const checkCustomElement = setInterval(() => {
        if (window.customElements.get('spline-viewer')) {
          setScriptLoaded(true);
          clearInterval(checkCustomElement);
        }
      }, 50);
      return () => clearInterval(checkCustomElement);
    }

    return () => {
      // Cleanup is generally not needed for globally loaded scripts like this
    };
  }, []); // Run once on mount

 const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Handle mouse entering the container to show custom cursor
  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  // Handle mouse leaving the container to hide custom cursor
  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  return (
 <>
       
    <div
      className="flex items-center justify-center min-h-screen  w-screen bg-gray-950 relative "
      onMouseMove={handleMouseMove} // Re-added mouse movement tracking
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'none' }} // Hide default cursor
    >
      {scriptLoaded ? (
        // Render the spline-viewer web component only when the script is loaded
        <spline-viewer
          url="https://prod.spline.design/OWO3tEcbSjZKzwSG/scene.splinecode" // NEW SPLINE URL
          style={{ width: '100%', height: '100vh', minHeight: '500px', display: 'block' }}
        ></spline-viewer>
      ) : (
        <div className="text-white text-xl">Loading 3D scene...</div>
      )}

      {/* "AgenticHireX" and punchline text - Positioned at mid-height */}
      <div className="absolute left-8 top-1/3 -translate-y-1/2 z-20 p-2 animate-text-fade-in">
        <h1 className="text-white font-extrabold text-7xl md:text-8xl leading-tight">
          AgenticHireX
        </h1>
        <p className="text-white text-lg md:text-xl mt-2 font-medium">
          Believe in skill, you get a real job guaranteed.
        </p>
      </div>

      {/* Custom Cursor with "Job" text - Transparent background, larger text */}
      <div
        className={`absolute pointer-events-none transition-opacity duration-150 ease-out
                    text-white font-bold text-4xl // Changed text size to 4xl (larger)
                    ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${mousePosition.x + 15}px`, // Offset from actual cursor position
          top: `${mousePosition.y + 15}px`,  // Offset from actual cursor position
          transform: 'translate(-50%, -50%)', // Center the custom cursor on its own coordinates
          zIndex: 9999, // Ensure it's on top
        }}
      >
        Job
      </div>

      {/* Basic styling for the container to ensure the viewer takes up space */}
      <style>{`
        body { margin: 0;  height: 100vh;overflow: auto; }
        html, body, #root { height: 100vh; width: 100%; }

        /* Custom animation for text fade-in */
        @keyframes textFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-text-fade-in {
          animation: textFadeIn 1.5s ease-out forwards;
          opacity: 0; /* Initial state before animation */
        }
      `}</style>
    </div>
    {/* <SecondPage /> */}
    </>
  );
};

export default SplinePreviewTwo;

