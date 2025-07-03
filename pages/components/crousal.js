// import React, { useState, useEffect } from 'react';

// const carouselWords = [
//   'cu',
//   'crosseye',
//   'google',
//   'microsoft',
//   'apple',
//   'amazon',
//   'tesla',
//   'openai',
//   'nvidia'
// ];

// const TextCarouselPage = ({ setCurrentPage }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [displayText, setDisplayText] = useState(carouselWords[0]);
//   const [isFading, setIsFading] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFading(true); // Start fade-out
//       setTimeout(() => {
//         setCurrentIndex(prevIndex => (prevIndex + 1) % carouselWords.length);
//       }, 500); // Half of transition duration for fade-out
//     }, 3000); // Change text every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setDisplayText(carouselWords[currentIndex]);
//     setIsFading(false); // End fade-out, start fade-in
//   }, [currentIndex]);

//   return (
//     <div className="w-screen h-screen bg-gray-950 flex flex-col items-center justify-center text-white overflow-hidden p-4">
//       <h1
//         className={`text-9xl font-extrabold tracking-widest text-center
//                     transition-opacity duration-500 ease-in-out
//                     ${isFading ? 'opacity-0' : 'opacity-100'}`}
//       >
//         {displayText.toUpperCase()}
//       </h1>

//       <button
//         onClick={() => setCurrentPage('home')}
//         className="mt-12 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// };

// export default TextCarouselPage;




import React, { useState, useEffect } from 'react';

const carouselWords = [
  'cu',
  'crosseye',
  'google',
  'microsoft',
  'apple',
  'amazon',
  'tesla',
  'openai',
  'nvidia'
];

const TextCarouselPage = ({ setCurrentPage }) => {
  // Concatenate words for a continuous scrolling effect.
  // We repeat the list to ensure a seamless loop as it scrolls.
  // '\u00A0\u00A0\u00A0' adds non-breaking spaces for visual separation between words.
  const scrollingText = [...carouselWords, ...carouselWords].join(' \u00A0\u00A0\u00A0 ');

  return (
    <div className="w-screen bg-gray-900 flex flex-col items-center justify-center text-white overflow-hidden p-4">
      {/* Outer container for the scrolling text, ensures overflow is hidden */}
      <div className="relative w-full overflow-hidden">
        {/* The h1 element that will contain and scroll the text */}
        <h1
          className={`text-9xl font-extrabold whitespace-nowrap text-center`}
          style={{
            // Apply a CSS animation named 'scroll-left'
            animation: 'scroll-left 40s linear infinite', // 20s duration, linear timing, infinite loop
            display: 'inline-block', // Important for the animation to work on its own content width
            paddingLeft: '100%' // Starts the text off-screen to the right, so it scrolls in
          }}
        >
          {scrollingText.toUpperCase()}
        </h1>
      </div>

      

      {/* CSS for the scrolling animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); } /* Start at its natural position */
          100% { transform: translateX(-100%); } /* Scroll left by 100% of its own width */
        }
      `}</style>
    </div>
  );
};

export default TextCarouselPage;

