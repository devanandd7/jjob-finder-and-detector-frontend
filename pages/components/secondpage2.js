import React, { useState, useEffect, useRef } from 'react';

const ThreeDTransformsPage = ({ setCurrentPage }) => {
  const pageRef = useRef(null); // Ref for the main page container
  const [isVisible, setIsVisible] = useState(false); // State to control animation trigger

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the page is intersecting (visible), set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the page is visible
      }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    // Cleanup function: disconnect observer when component unmounts
    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      ref={pageRef} // Assign the ref to the main container
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4 md:p-8"
    >
      <h2 className={`text-5xl font-extrabold mb-12 text-indigo-400 text-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
        Explore Image Fitting
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8">
        {/* Image Section (simulating a resume) with object-fit: contain */}
        <div
          className={`w-full md:w-1/2 flex justify-center md:justify-start p-4`} // Removed animation classes from here
        >
          <div className="relative w-80 h-[500px] md:w-[28rem] md:h-[600px] overflow-hidden rounded-lg shadow-xl border-4 border-gray-700 flex items-center justify-center bg-gray-800">
            <img
              src="/devanand resume image.png" // <-- Replace with your actual image path or URL
              alt="Devanand Utkarsh Resume"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Controls and Description Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className={`text-lg text-gray-300 mb-8 leading-relaxed max-w-xl ${isVisible ? 'animate-slide-in-right delay-200' : 'opacity-0'}`}>
            This section demonstrates how an image (like a resume) can fit perfectly within its container using `object-fit: contain;`. Regardless of the container's dimensions, the entire image will always be visible, maintaining its aspect ratio.
          </p>
          <p className={`text-sm text-gray-400 mb-4 ${isVisible ? 'animate-slide-in-right delay-400' : 'opacity-0'}`}>
            (Notice the empty space around the image if its aspect ratio doesn't perfectly match the container's.)
          </p>
          <button
            onClick={() => setCurrentPage('home')}
            className={`mt-8 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${isVisible ? 'animate-slide-in-right delay-600' : 'opacity-0'}`}
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Custom CSS for text animations */}
      <style>{`
        /* Text Animations */
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-right.delay-200 { animation-delay: 0.2s; }
        .animate-slide-in-right.delay-400 { animation-delay: 0.4s; }
        .animate-slide-in-right.delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default ThreeDTransformsPage;
