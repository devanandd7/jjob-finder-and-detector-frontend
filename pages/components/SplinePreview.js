import React, { useEffect, useState } from 'react';

// This component will render your Spline scene using the web component
const SplinePreview = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [jobStatus, setJobStatus] = useState('Real');
  const [textOpacity, setTextOpacity] = useState(1);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading 3D scene...');
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    // Animate heading in
    setTimeout(() => setHeadingVisible(true), 300);

    // Animate loading dots
    let dotCount = 0;
    const dotInterval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      setLoadingDots('.'.repeat(dotCount));
    }, 400);
    return () => clearInterval(dotInterval);
  }, []);

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
      script.async = true;

      script.onload = () => {
        setTimeout(() => {
          setScriptLoaded(true);
        }, 100);
      };

      script.onerror = (error) => {
        setLoadingText("Failed to load 3D scene.");
        console.error("Failed to load Spline viewer script:", error);
      };

      document.head.appendChild(script);
    } else {
      const checkCustomElement = setInterval(() => {
        if (window.customElements.get('spline-viewer')) {
          setScriptLoaded(true);
          clearInterval(checkCustomElement);
        }
      }, 50);
      return () => clearInterval(checkCustomElement);
    }
    // Cleanup function
    return () => {};
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextOpacity(0);
      setTimeout(() => {
        setJobStatus(prevStatus => (prevStatus === 'Real' ? 'Fake' : 'Real'));
        setTextOpacity(1);
      }, 750);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  const handleMouseEnter = () => setCursorVisible(true);
  const handleMouseLeave = () => setCursorVisible(false);

  const buttonBgColorClass = jobStatus === 'Real' ? 'bg-indigo-600' : 'bg-rose-700';

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-950 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'none' }}
    >
      {/* Animated Heading */}
      <h1
        className={`text-4xl md:text-5xl font-extrabold mb-6 text-white transition-all duration-1000 ease-in-out
          ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}
        `}
        style={{
          letterSpacing: '0.08em',
          textShadow: '0 4px 24px rgba(0,0,0,0.3)'
        }}
      >
        AI Job Finder 3D Experience
      </h1>
      <p
        className={`text-lg md:text-xl text-indigo-200 mb-8 transition-all duration-1000 ease-in-out
          ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        Explore jobs in a new dimension!
      </p>

      {/* Spline Viewer or Loading Animation */}
      <div className="flex items-center justify-center w-full" style={{ minHeight: 400 }}>
        {scriptLoaded ? (
          <spline-viewer
            url="https://prod.spline.design/p04v-yBSjSIeYejJ/scene.splinecode"
            style={{ width: '1432px', height: '776px', display: 'block' }}
          ></spline-viewer>
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-white text-xl font-semibold animate-pulse">
              {loadingText}
              <span className="inline-block w-6">{loadingDots}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="block w-3 h-3 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0s' }}></span>
              <span className="block w-3 h-3 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="block w-3 h-3 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Custom Cursor */}
      <div
        className={`absolute pointer-events-none transition-opacity duration-150 ease-out
                    transition-colors duration-1500 ease-in-out
                    ${buttonBgColorClass} text-white font-bold text-base shadow-lg
                    flex items-center justify-center rounded-full
                    w-32 h-32`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: cursorVisible ? 1 : 0,
          zIndex: 9999,
        }}
      >
        <span
          className="transition-opacity duration-700 ease-in-out"
          style={{ opacity: textOpacity }}
        >
          {jobStatus === 'Real' ? 'Job Found' : 'Fake Job'}
        </span>
      </div>

      {/* Basic styling for the container to ensure the viewer takes up space */}
      <style>{`
  body { margin: 0; }
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
