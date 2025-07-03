// import React, { useState, useRef, useEffect } from 'react';

// const BranchRevealPage = ({ setCurrentPage }) => {
//   const imageContainerRef = useRef(null);
//   const [activeBranches, setActiveBranches] = useState([]); // State to track which branches are active (visible)

//   // Function to determine which branches should be active based on mouse Y position
//   const handleMouseMove = (e) => {
//     if (!imageContainerRef.current) return;

//     const rect = imageContainerRef.current.getBoundingClientRect();
//     const y = e.clientY - rect.top; // Y position relative to the container

//     const newActiveBranches = [];
//     // Define zones: Top 1/3, Middle 1/3, Bottom 1/3
//     const zoneHeight = rect.height / 3;

//     if (y >= 0 && y < zoneHeight) {
//       newActiveBranches.push(0, 1); // Branches 1 & 2
//     } else if (y >= zoneHeight && y < zoneHeight * 2) {
//       newActiveBranches.push(2, 3); // Branches 3 & 4
//     } else if (y >= zoneHeight * 2 && y <= rect.height) {
//       newActiveBranches.push(4, 5); // Branches 5 & 6
//     }
//     setActiveBranches(newActiveBranches);
//   };

//   const handleMouseLeave = () => {
//     setActiveBranches([]); // Hide all branches when mouse leaves
//   };

//   // Branch data for easy mapping
//   const branches = [
//     // Adjusted left/right offsets to ensure details are away from the image
//     { id: 0, text: 'Branch 1: Skill Assessment', positionClass: 'top-[15%] left-[calc(50%-300px)]' }, // Adjusted offset
//     { id: 1, text: 'Branch 2: Role Matching', positionClass: 'top-[15%] right-[calc(50%-300px)]' }, // Adjusted offset
//     { id: 2, text: 'Branch 3: Fake Job Detection', positionClass: 'top-1/2 left-[calc(50%-300px)] -translate-y-1/2' }, // Adjusted offset
//     { id: 3, text: 'Branch 4: Automated Reporting', positionClass: 'top-1/2 right-[calc(50%-300px)] -translate-y-1/2' }, // Adjusted offset
//     { id: 4, text: 'Branch 5: Resume Customization', positionClass: 'bottom-[15%] left-[calc(50%-300px)]' }, // Adjusted offset
//     { id: 5, text: 'Branch 6: Application Tracking', positionClass: 'bottom-[15%] right-[calc(50%-300px)]' }, // Adjusted offset
//   ];

//   // Arrow data, defining start and end points relative to the central image container
//   // Start points are from the edges of the central image, end points are towards the branch cards.
//   const arrows = [
//     // Arrows for Branches 1 & 2 (Top Zone)
//     { id: 'arrow-0', branchId: 0, start: { x: '45%', y: '45%' }, end: { x: '25%', y: '20%' }, color: '#6366F1' }, // Left side
//     { id: 'arrow-1', branchId: 1, start: { x: '55%', y: '45%' }, end: { x: '75%', y: '20%' }, color: '#6366F1' }, // Right side

//     // Arrows for Branches 3 & 4 (Middle Zone)
//     { id: 'arrow-2', branchId: 2, start: { x: '45%', y: '50%' }, end: { x: '25%', y: '50%' }, color: '#EC4899' }, // Left side
//     { id: 'arrow-3', branchId: 3, start: { x: '55%', y: '50%' }, end: { x: '75%', y: '50%' }, color: '#EC4899' }, // Right side

//     // Arrows for Branches 5 & 6 (Bottom Zone)
//     { id: 'arrow-4', branchId: 4, start: { x: '45%', y: '55%' }, end: { x: '25%', y: '80%' }, color: '#10B981' }, // Left side
//     { id: 'arrow-5', branchId: 5, start: { x: '55%', y: '55%' }, end: { x: '75%', y: '80%' }, color: '#10B981' }, // Right side
//   ];


//   return (
//     <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4 md:p-8">
//       <h2 className="text-5xl font-extrabold mb-12 text-indigo-400 text-center animate-slide-in-left">
//         Interactive Job Flow
//       </h2>

//       <div className="relative w-full max-w-4xl aspect-video md:aspect-auto md:h-[600px] bg-gray-800 rounded-lg shadow-2xl border-4 border-gray-700 flex items-center justify-center overflow-hidden">
//         {/* Central Image with Hover Zones */}
//         <div
//           ref={imageContainerRef}
//           className="relative w-full h-full flex items-center justify-center"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="https://placehold.co/250x250/4F46E5/FFFFFF?text=Central+AI" // Smaller Central image placeholder
//             alt="Central Process"
//             className="w-48 h-48 md:w-64 md:h-64 object-contain p-4 rounded-full border-4 border-indigo-500 shadow-lg" // Made smaller and round
//           />

//           {/* Branch Detail Cards */}
//           {branches.map((branch) => (
//             <div
//               key={branch.id}
//               className={`absolute p-3 rounded-lg shadow-lg bg-gray-700 text-sm font-medium whitespace-nowrap
//                           transition-all duration-500 ease-out transform
//                           ${branch.positionClass}
//                           ${activeBranches.includes(branch.id)
//                             ? 'opacity-100 translate-x-0 translate-y-0' // Final visible state
//                             : 'opacity-0 ' + (branch.id % 2 === 0 ? 'translate-x-[-150px]' : 'translate-x-[150px]') // Initial hidden state (off-screen)
//                           }
//                           `}
//             >
//               {branch.text}
//             </div>
//           ))}

//           {/* Arrows */}
//           {arrows.map((arrow) => (
//             <svg
//               key={arrow.id}
//               className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ease-out
//                           ${activeBranches.includes(arrow.branchId) ? 'opacity-100' : 'opacity-0'}`}
//             >
//               <line
//                 x1={arrow.start.x} y1={arrow.start.y}
//                 x2={arrow.end.x} y2={arrow.end.y}
//                 stroke={arrow.color}
//                 strokeWidth="2"
//                 strokeLinecap="round" // Added for smoother line ends
//                 markerEnd="url(#arrowhead)" // Use a defined arrowhead
//               />
//               {/* Define arrowhead marker once */}
//               {arrow.id === 'arrow-0' && ( // Only define once
//                 <defs>
//                   <marker id="arrowhead" markerWidth="10" markerHeight="7"
//                           refX="0" refY="3.5" orient="auto">
//                     <polygon points="0 0, 10 3.5, 0 7" fill="white" /> {/* White arrowhead */}
//                   </marker>
//                 </defs>
//               )}
//             </svg>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={() => setCurrentPage('home')}
//         className="mt-12 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-slide-in-right delay-600"
//       >
//         Back to Home
//       </button>

//       {/* Custom CSS for animations */}
//       <style>{`
//         /* Text Animations (re-used from previous pages) */
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-100%); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-in-left {
//           animation: slideInLeft 1s ease-out forwards;
//           opacity: 0;
//         }

//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(100%); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-in-right {
//           animation: slideInRight 1s ease-out forwards;
//           opacity: 0;
//         }
//         .animate-slide-in-right.delay-200 { animation-delay: 0.2s; }
//         .animate-slide-in-right.delay-400 { animation-delay: 0.4s; }
//         .animate-slide-in-right.delay-600 { animation-delay: 0.6s; }
//       `}</style>
//     </div>
//   );
// };

// export default BranchRevealPage;


// import React, { useState, useRef, useEffect } from 'react';

// const BranchRevealPage = ({ setCurrentPage }) => {
//   const imageContainerRef = useRef(null);
//   const [activeBranches, setActiveBranches] = useState([]); // State to track which branches are active (visible)

//   // Function to determine which branches should be active based on mouse Y position
//   const handleMouseMove = (e) => {
//     if (!imageContainerRef.current) return;

//     const rect = imageContainerRef.current.getBoundingClientRect();
//     const y = e.clientY - rect.top; // Y position relative to the container

//     const newActiveBranches = [];
//     // Define zones: Top 1/3, Middle 1/3, Bottom 1/3
//     const zoneHeight = rect.height / 3;

//     if (y >= 0 && y < zoneHeight) {
//       newActiveBranches.push(0, 1); // Branches 1 & 2
//     } else if (y >= zoneHeight && y < zoneHeight * 2) {
//       newActiveBranches.push(2, 3); // Branches 3 & 4
//     } else if (y >= zoneHeight * 2 && y <= rect.height) {
//       newActiveBranches.push(4, 5); // Branches 5 & 6
//     }
//     setActiveBranches(newActiveBranches);
//   };

//   const handleMouseLeave = () => {
//     setActiveBranches([]); // Hide all branches when mouse leaves
//   };

//   // Branch data for easy mapping
//   const branches = [
//     // Adjusted left/right offsets to ensure details are away from the image
//     { id: 0, text: 'Branch 1: Skill Assessment', positionClass: 'top-[10%] left-[calc(50%-350px)]' }, // Adjusted offset
//     { id: 1, text: 'Branch 2: Role Matching', positionClass: 'top-[10%] right-[calc(50%-350px)]' }, // Adjusted offset
//     { id: 2, text: 'Branch 3: Fake Job Detection', positionClass: 'top-1/2 left-[calc(50%-350px)] -translate-y-1/2' }, // Adjusted offset
//     { id: 3, text: 'Branch 4: Automated Reporting', positionClass: 'top-1/2 right-[calc(50%-350px)] -translate-y-1/2' }, // Adjusted offset
//     { id: 4, text: 'Branch 5: Resume Customization', positionClass: 'bottom-[10%] left-[calc(50%-350px)]' }, // Adjusted offset
//     { id: 5, text: 'Branch 6: Application Tracking', positionClass: 'bottom-[10%] right-[calc(50%-350px)]' }, // Adjusted offset
//   ];

//   // Arrow data, defining start and end points relative to the central image container
//   // Start points are from the edges of the central image, end points are towards the branch cards.
//   const arrows = [
//     // Arrows for Branches 1 & 2 (Top Zone)
//     { id: 'arrow-0', branchId: 0, start: { x: '45%', y: '30%' }, end: { x: '25%', y: '15%' }, color: '#6366F1' }, // Left side
//     { id: 'arrow-1', branchId: 1, start: { x: '55%', y: '30%' }, end: { x: '75%', y: '15%' }, color: '#6366F1' }, // Right side

//     // Arrows for Branches 3 & 4 (Middle Zone)
//     { id: 'arrow-2', branchId: 2, start: { x: '45%', y: '50%' }, end: { x: '25%', y: '50%' }, color: '#EC4899' }, // Left side
//     { id: 'arrow-3', branchId: 3, start: { x: '55%', y: '50%' }, end: { x: '75%', y: '50%' }, color: '#EC4899' }, // Right side

//     // Arrows for Branches 5 & 6 (Bottom Zone)
//     { id: 'arrow-4', branchId: 4, start: { x: '45%', y: '70%' }, end: { x: '25%', y: '85%' }, color: '#10B981' }, // Left side
//     { id: 'arrow-5', branchId: 5, start: { x: '55%', y: '70%' }, end: { x: '75%', y: '85%' }, color: '#10B981' }, // Right side
//   ];


//   return (
//     <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4 md:p-8">
//       <h2 className="text-5xl font-extrabold mb-12 text-indigo-400 text-center animate-slide-in-left">
//         Interactive Job Flow
//       </h2>

//       <div className="relative w-full max-w-4xl aspect-video md:aspect-auto md:h-[600px] bg-gray-800 rounded-lg shadow-2xl border-4 border-gray-700 flex items-center justify-center overflow-hidden">
//         {/* Central Image with Hover Zones */}
//         <div
//           ref={imageContainerRef}
//           className="relative w-full h-full flex items-center justify-center"
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="https://placehold.co/250x400/4F46E5/FFFFFF?text=Central+AI" // Vertical Central image placeholder (250x400)
//             alt="Central Process"
//             className="w-40 h-64 md:w-64 md:h-96 object-contain border-4 border-indigo-500 shadow-lg" // Made vertical
//           />

//           {/* Branch Detail Cards */}
//           {branches.map((branch) => (
//             <div
//               key={branch.id}
//               className={`absolute p-3 rounded-lg shadow-lg bg-gray-700 text-sm font-medium whitespace-nowrap
//                           transition-all duration-500 ease-out transform
//                           ${branch.positionClass}
//                           ${activeBranches.includes(branch.id)
//                             ? 'opacity-100 translate-x-0 translate-y-0' // Final visible state
//                             : 'opacity-0 ' + (branch.id % 2 === 0 ? 'translate-x-[-150px]' : 'translate-x-[150px]') // Initial hidden state (off-screen)
//                           }
//                           `}
//             >
//               {branch.text}
//             </div>
//           ))}

//           {/* Arrows */}
//           {arrows.map((arrow) => (
//             <svg
//               key={arrow.id}
//               className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ease-out
//                           ${activeBranches.includes(arrow.branchId) ? 'opacity-100' : 'opacity-0'}`}
//             >
//               <line
//                 x1={arrow.start.x} y1={arrow.start.y}
//                 x2={arrow.end.x} y2={arrow.end.y}
//                 stroke={arrow.color}
//                 strokeWidth="2"
//                 strokeLinecap="round" // Added for smoother line ends
//                 markerEnd="url(#arrowhead)" // Use a defined arrowhead
//               />
//               {/* Define arrowhead marker once */}
//               {arrow.id === 'arrow-0' && ( // Only define once
//                 <defs>
//                   <marker id="arrowhead" markerWidth="10" markerHeight="7"
//                           refX="0" refY="3.5" orient="auto">
//                     <polygon points="0 0, 10 3.5, 0 7" fill="white" /> {/* White arrowhead */}
//                   </marker>
//                 </defs>
//               )}
//             </svg>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={() => setCurrentPage('home')}
//         className="mt-12 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-slide-in-right delay-600"
//       >
//         Back to Home
//       </button>

//       {/* Custom CSS for animations */}
//       <style>{`
//         /* Text Animations (re-used from previous pages) */
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-100%); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-in-left {
//           animation: slideInLeft 1s ease-out forwards;
//           opacity: 0;
//         }

//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(100%); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-slide-in-right {
//           animation: slideInRight 1s ease-out forwards;
//           opacity: 0;
//         }
//         .animate-slide-in-right.delay-200 { animation-delay: 0.2s; }
//         .animate-slide-in-right.delay-400 { animation-delay: 0.4s; }
//         .animate-slide-in-right.delay-600 { animation-delay: 0.6s; }
//       `}</style>
//     </div>
//   );
// };

// export default BranchRevealPage;




import React, { useState, useRef, useEffect } from 'react';

const BranchRevealPage = ({ setCurrentPage }) => {
  const imageContainerRef = useRef(null);
  const [activeBranches, setActiveBranches] = useState([]); // State to track which branches are active (visible)
  const [isInteractiveAreaHovered, setIsInteractiveAreaHovered] = useState(false); // State for dark overlay and initial branch release

  // Function to determine which branches should be active based on mouse Y position
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;

    setIsInteractiveAreaHovered(true); // Activate dark overlay and initial branch release on mouse move

    const rect = imageContainerRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top; // Y position relative to the container

    const newActiveBranches = [];
    // Define zones: Top 1/3, Middle 1/3, Bottom 1/3
    const zoneHeight = rect.height / 3;

    if (y >= 0 && y < zoneHeight) {
      newActiveBranches.push(0, 1); // Branches 1 & 2
    } else if (y >= zoneHeight && y < zoneHeight * 2) {
      newActiveBranches.push(2, 3); // Branches 3 & 4
    } else if (y >= zoneHeight * 2 && y <= rect.height) {
      newActiveBranches.push(4, 5); // Branches 5 & 6
    }
    setActiveBranches(newActiveBranches);
  };

  const handleMouseLeave = () => {
    setActiveBranches([]); // Hide all branches when mouse leaves
    setIsInteractiveAreaHovered(false); // Deactivate dark overlay and reset branches
  };

  // Branch data for easy mapping
  const branches = [
    // Adjusted left/right offsets and vertical positions for better spacing
    // Increased offset from center (e.g., from 300px to 380px)
    { id: 0, text: 'Branch 1: Skill Assessment', positionClass: 'top-[10%] left-[calc(50%-380px)]' },
    { id: 1, text: 'Branch 2: Role Matching', positionClass: 'top-[10%] right-[calc(50%-380px)]' },
    { id: 2, text: 'Branch 3: Fake Job Detection', positionClass: 'top-[45%] left-[calc(50%-380px)] -translate-y-1/2' },
    { id: 3, text: 'Branch 4: Automated Reporting', positionClass: 'top-[45%] right-[calc(50%-380px)] -translate-y-1/2' },
    { id: 4, text: 'Branch 5: Resume Customization', positionClass: 'bottom-[10%] left-[calc(50%-380px)]' },
    { id: 5, text: 'Branch 6: Application Tracking', positionClass: 'bottom-[10%] right-[calc(50%-380px)]' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4 md:p-8">
      <h2 className="text-5xl font-extrabold mb-12 text-indigo-400 text-center animate-slide-in-left">
        Interactive Job Flow
      </h2>

      {/* Main interactive area */}
      <div
        ref={imageContainerRef}
        className="relative w-full max-w-4xl aspect-video md:aspect-auto md:h-[600px] flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dark Overlay for "torch" effect */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 z-0
                      ${isInteractiveAreaHovered ? 'opacity-70' : 'opacity-0'}`}
        ></div>

        <img
          src="https://placehold.co/250x400/4F46E5/FFFFFF?text=Central+AI" // Vertical Central image placeholder
          alt="Central Process"
          className="relative z-10 w-40 h-64 md:w-64 md:h-96 object-contain border-4 border-indigo-500 shadow-lg"
        />

        {/* Branch Detail Cards (no background, no initial animation, text color changes) */}
        {branches.map((branch) => (
          <div
            key={branch.id}
            className={`absolute p-3 rounded-lg text-sm font-bold whitespace-nowrap // Added font-bold
                        transition-opacity duration-300 ease-out z-20
                        ${branch.positionClass}
                        ${isInteractiveAreaHovered // If interactive area is hovered
                          ? (activeBranches.includes(branch.id) // And this specific branch is active
                            ? 'opacity-100 text-white text-7xl font-bold' // Fully visible, white text
                            : 'opacity-30 text-gray-400 text-7xl') // Dimmed, gray text
                          : 'opacity-0 text-gray-400' // Not hovered over interactive area: fully hidden
                        }
                        `}
          >
            {branch.text}
          </div>
        ))}

        {/* Torch Circle (removed) */}

      </div>

      <button
        onClick={() => setCurrentPage('home')}
        className="mt-12 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-slide-in-right delay-600"
      >
        Back to Home
      </button>

      {/* Custom CSS for animations */}
      <style>{`
        /* Text Animations (re-used from previous pages) */
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

export default BranchRevealPage;
