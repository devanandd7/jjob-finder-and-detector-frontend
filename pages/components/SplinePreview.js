import React, { useEffect, useState } from 'react';

// This component will render your Spline scene using the web component
const SplinePreview = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // State to track mouse position
  const [cursorVisible, setCursorVisible] = useState(false); // State to control cursor visibility
  const [jobStatus, setJobStatus] = useState('Real'); // State for "Real" or "Fake"
  const [textOpacity, setTextOpacity] = useState(1); // State for text opacity for smooth transition

  useEffect(() => {
    // Check if the script is already loaded or if the custom element is registered
    if (window.customElements.get('spline-viewer')) {
      setScriptLoaded(true);
      return;
    }

    const scriptId = 'spline-viewer-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
      script.async = true; // Load asynchronously

      script.onload = () => {
        // Wait a moment for the custom element to be fully defined
        // In some environments, customElements.define might be slightly delayed
        setTimeout(() => {
          setScriptLoaded(true);
        }, 100);
      };

      script.onerror = (error) => {
        console.error("Failed to load Spline viewer script:", error);
        // Fallback or error message if script fails to load
      };

      document.head.appendChild(script);
    } else {
      // If script tag already exists, but custom element not ready, wait for it
      const checkCustomElement = setInterval(() => {
        if (window.customElements.get('spline-viewer')) {
          setScriptLoaded(true);
          clearInterval(checkCustomElement);
        }
      }, 50); // Check every 50ms
      return () => clearInterval(checkCustomElement);
    }

    // Cleanup function: remove script if component unmounts
    return () => {
      // Only remove if this component was responsible for adding it
      if (script && script.parentNode) {
        // script.parentNode.removeChild(script); // Be cautious with removing global scripts
      }
    };
  }, []); // Run once on mount

  // Effect to automatically change job status (Fake/Real) with smooth text transition
  useEffect(() => {
    const interval = setInterval(() => {
      setTextOpacity(0); // Start fading out
      setTimeout(() => {
        setJobStatus(prevStatus => (prevStatus === 'Real' ? 'Fake' : 'Real'));
        setTextOpacity(1); // Start fading in new text
      }, 750); // Half of the 1.5s transition duration for fade out, then change, then fade in
    }, 2000); // Toggle every 2 seconds (total cycle)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle mouse movement to update custom cursor position
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

  // Determine background color based on job status
  const buttonBgColorClass = jobStatus === 'Real' ? 'bg-indigo-600' : 'bg-rose-700';

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-950 relative overflow-hidden"
      onMouseMove={handleMouseMove} // Re-added mouse movement tracking
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'none' }} // Hide default cursor
    >
      {scriptLoaded ? (
        // Render the spline-viewer web component only when the script is loaded
        <spline-viewer
          url="https://prod.spline.design/p04v-yBSjSIeYejJ/scene.splinecode"
          style={{ width: '1432px', height: '776px', display: 'block' }} // Updated width and height
        ></spline-viewer>
      ) : (
        <div className="text-white text-xl">Loading 3D scene...</div>
      )}

      {/* Custom Cursor (follows mouse, round, fixed size, smooth color transition) */}
      <div
        className={`absolute pointer-events-none transition-opacity duration-150 ease-out
                    transition-colors duration-1500 ease-in-out // Duration changed to 1.5s
                    ${buttonBgColorClass} text-white font-bold text-base shadow-lg // Changed text-color to white for visibility
                    flex items-center justify-center rounded-full // Make it round
                    w-32 h-32 // Fixed size (e.g., 128px x 128px)
                    `}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)', // Center the custom cursor on the mouse position
          opacity: cursorVisible ? 1 : 0, // Control visibility
          zIndex: 9999, // Ensure it's on top
        }}
      >
        <span
          className="transition-opacity duration-700 ease-in-out" // Text opacity transition
          style={{ opacity: textOpacity }}
        >
          {jobStatus === 'Real' ? 'Job Found' : 'Fake Job'}
        </span>
      </div>

      {/* Basic styling for the container to ensure the viewer takes up space */}
      <style>{`
  body { margin: 0; } /* Removed overflow: hidden */
  html, body, #root { height: 100%; width: 100%; }
  .duration-1500 {
    transition-duration: 1.5s;
  }
  .duration-700 {
    transition-duration: 0.7s;
  }
`}</style>
    </div>
  );
};

export default SplinePreview;
