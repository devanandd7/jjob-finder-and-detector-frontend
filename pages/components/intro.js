// import React, { useEffect, useState } from 'react';

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
// const initialText = "- - - - A D S P - - - -";
// const targetText = "A G E N T I C H I R E X";

// const ScrollText = () => {
//   const [finalChars, setFinalChars] = useState([]);
//   const [scrollPositions, setScrollPositions] = useState([]);

//   useEffect(() => {
//     const delay = 1000;
//     const finalCharList = targetText.split('');
//     setFinalChars(finalCharList);

//     const timeouts = [];

//     // Start animation after 1s
//     setTimeout(() => {
//       finalCharList.forEach((char, index) => {
//         timeouts.push(setTimeout(() => {
//           const position = alphabet.indexOf(char === ' ' ? ' ' : char);
//           setScrollPositions(prev => {
//             const newPositions = [...prev];
//             newPositions[index] = position;
//             return newPositions;
//           });
//         }, index * 150)); // stagger effect
//       });
//     }, delay);

//     return () => timeouts.forEach(clearTimeout);
//   }, []);

//   return (
//     <div className="w-screen h-screen bg-red-600 flex items-center justify-center overflow-hidden">
//       <div className="flex gap-1 text-black text-2xl font-extrabold tracking-widest">
//         {finalChars.map((targetChar, index) => (
//           <div
//             key={index}
//             className="overflow-hidden w-6 h-8 flex justify-center items-start"
//           >
//             <div
//               className="flex flex-col"
//               style={{
//                 transform: `translateY(-${(scrollPositions[index] || 0) * 2}rem)`,
//                 transition: 'transform 0.6s ease-in-out',
//               }}
//             >
//               {alphabet.split('').map((char, i) => (
//                 <div
//                   key={i}
//                   className="h-8 w-6 flex items-center justify-center"
//                 >
//                   {char === ' ' ? '\u00A0' : char}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollText;


import React, { useEffect, useState } from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
const initialText = "A B I D E V S U J P Y L";
const targetText = "A G E N T I C H I R E X";

const ScrollText = () => {
  const [finalChars, setFinalChars] = useState([]);
  const [scrollPositions, setScrollPositions] = useState([]);
  const [triggerZoomOut, setTriggerZoomOut] = useState(false);

  useEffect(() => {
    const delay = 1500;
    const initialCharList = initialText.split('');
    const finalCharList = targetText.split('');

    setFinalChars(finalCharList);

    // Set initial scroll positions
    const initialScrollPositions = initialCharList.map(char =>
      Math.max(0, alphabet.indexOf(char === ' ' ? ' ' : char))
    );
    setScrollPositions(initialScrollPositions);

    const timeouts = [];

    // Begin scroll animation
    setTimeout(() => {
      finalCharList.forEach((char, index) => {
        timeouts.push(setTimeout(() => {
          const targetIndex = alphabet.indexOf(char === ' ' ? ' ' : char);
          setScrollPositions(prev => {
            const newPositions = [...prev];
            newPositions[index] = targetIndex;
            return newPositions;
          });

          // After last letter completes, trigger zoom & fade
          if (index === finalCharList.length - 1) {
            setTimeout(() => {
              setTriggerZoomOut(true);
            }, 800); // slight delay after scroll finishes
          }
        }, index * 150));
      });
    }, delay);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-screen h-screen bg-red-600 flex items-center justify-center overflow-hidden">
      <div
        className={`flex gap-1 text-black text-4xl font-extrabold tracking-widest transition-all duration-1000 ease-in-out`}
        style={{
          transform: triggerZoomOut ? 'scale(2)' : 'scale(1)',
          opacity: triggerZoomOut ? 0 : 1,
        }}
      >
        {finalChars.map((_, index) => (
          <div
            key={index}
            className="overflow-hidden w-6 h-8 flex justify-center items-start"
          >
            <div
              className="flex flex-col"
              style={{
                transform: `translateY(-${(scrollPositions[index] || 0) * 2}rem)`,
                transition: 'transform 0.6s ease-in-out',
              }}
            >
              {alphabet.split('').map((char, i) => (
                <div
                  key={i}
                  className="h-8 w-6 flex items-center justify-center"
                >
                  {char === ' ' ? '\u00A0' : char}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollText;


// import React, { useEffect, useState } from 'react';

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
// const initialText = "A B I D E V S U J P Y L";
// const targetText = "A G E N T I C H I R E X";

// const ScrollText = () => {
//   const [finalChars, setFinalChars] = useState([]);
//   const [scrollPositions, setScrollPositions] = useState([]);
//   const [animationComplete, setAnimationComplete] = useState(false);
//   const [showBluePage, setShowBluePage] = useState(false);
//   const [fadeOutIntro, setFadeOutIntro] = useState(false);

//   useEffect(() => {
//     const delay = 2000;
//     const initialCharList = initialText.split('');
//     const finalCharList = targetText.split('');

//     setFinalChars(finalCharList);

//     const initialScrollPositions = initialCharList.map(char =>
//       Math.max(0, alphabet.indexOf(char === ' ' ? ' ' : char))
//     );
//     setScrollPositions(initialScrollPositions);

//     const timeouts = [];

//     // Begin scroll animation
//     setTimeout(() => {
//       finalCharList.forEach((char, index) => {
//         timeouts.push(setTimeout(() => {
//           const targetIndex = alphabet.indexOf(char === ' ' ? ' ' : char);
//           setScrollPositions(prev => {
//             const newPositions = [...prev];
//             newPositions[index] = targetIndex;
//             return newPositions;
//           });

//           // Trigger animationComplete after last char
//           if (index === finalCharList.length - 1) {
//             setTimeout(() => {
//               setAnimationComplete(true);
//               setTimeout(() => {
//                 setShowBluePage(true);         // Show blue page
//                 setFadeOutIntro(true);         // Start fading out intro
//               }, 1000); // Wait for door animation to finish
//             }, 700);
//           }
//         }, index * 150));
//       });
//     }, delay);

//     return () => timeouts.forEach(clearTimeout);
//   }, []);

//   return (
//     <div className="relative w-screen h-screen overflow-hidden font-extrabold tracking-widest">
      
//       {/* 🔵 BLUE PAGE (revealed behind) */}
//       {showBluePage && (
//         <div className="absolute inset-0 bg-blue-600 z-0 flex items-center justify-center text-white text-3xl">
//           Welcome to Blue Page 🚀
//         </div>
//       )}

//       {/* 🔴 RED INTRO PAGE */}
//       <div
//         className={`absolute inset-0 bg-red-600 z-10 transition-opacity duration-1000 ${
//           fadeOutIntro ? 'opacity-0' : 'opacity-100'
//         }`}
//       >
//         {/* Lift gate doors */}
//         {animationComplete && (
//           <>
//             <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600 animate-door-up z-10"></div>
//             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-600 animate-door-down z-10"></div>
//           </>
//         )}

//         {/* Scrolling text */}
//         <div className="flex items-center justify-center h-full">
//           <div className="flex gap-1 text-black text-2xl">
//             {finalChars.map((_, index) => (
//               <div
//                 key={index}
//                 className="overflow-hidden w-6 h-8 flex justify-center items-start"
//               >
//                 <div
//                   className="flex flex-col"
//                   style={{
//                     transform: `translateY(-${(scrollPositions[index] || 0) * 2}rem)`,
//                     transition: 'transform 0.6s ease-in-out',
//                   }}
//                 >
//                   {alphabet.split('').map((char, i) => (
//                     <div
//                       key={i}
//                       className="h-8 w-6 flex items-center justify-center"
//                     >
//                       {char === ' ' ? '\u00A0' : char}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animation keyframes */}
//       <style>{`
//         @keyframes doorUp {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-100%); }
//         }
//         @keyframes doorDown {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(100%); }
//         }
//         .animate-door-up {
//           animation: doorUp 1s ease-in-out forwards;
//         }
//         .animate-door-down {
//           animation: doorDown 1s ease-in-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ScrollText;
