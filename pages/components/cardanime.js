import React, { useState, useEffect, useRef } from 'react';

const cardsData = [
  { id: 1, title: 'Intelligent Matching', description: 'Connects skills to perfect roles.' },
  { id: 2, title: 'Scam Protection', description: 'AI detects and blocks fraudulent listings.' },
  { id: 3, title: 'Automated Applications', description: 'Streamlines your job application process.' },
];

const CardRevealPage = ({ setCurrentPage, onAnimationComplete }) => {
  // 'initial', 'card1-entering', 'card2-entering', 'card3-entering', 'horizontal-aligning', 'page-scrolling', 'complete'
  const [animationPhase, setAnimationPhase] = useState('initial');
  const [activeCardIndex, setActiveCardIndex] = useState(-1); // -1 for no active card, 0, 1, 2 for card index
  const [isScrollReady, setIsScrollReady] = useState(false); // New state to control scroll readiness
  const pageContainerRef = useRef(null); // Ref for the main page container

  useEffect(() => {
    const sequenceTimeouts = [];

    // Phase 1: Card entry sequence
    // Card 1 enters
    sequenceTimeouts.push(setTimeout(() => {
      setAnimationPhase('card1-entering');
      setActiveCardIndex(0);
    }, 500)); // Delay before first card starts

    // Card 2 enters (hiding card 1)
    sequenceTimeouts.push(setTimeout(() => {
      setAnimationPhase('card2-entering');
      setActiveCardIndex(1);
    }, 2500)); // 2s after card1, card2 starts

    // Card 3 enters (hiding card 2)
    sequenceTimeouts.push(setTimeout(() => {
      setAnimationPhase('card3-entering');
      setActiveCardIndex(2);
    }, 4500)); // 2s after card2, card3 starts

    // Phase 2: Horizontal alignment after last card enters
    sequenceTimeouts.push(setTimeout(() => {
      setAnimationPhase('horizontal-aligning');
      setActiveCardIndex(-1); // No single active card, all are aligning
      setIsScrollReady(true); // Set scroll readiness to true after horizontal alignment
    }, 6500)); // 2s after card3 enters

    // Cleanup timeouts on component unmount
    return () => {
      sequenceTimeouts.forEach(clearTimeout);
    };
  }, []); // Empty dependency array as these timeouts run once on mount

  // Effect for mouse wheel listener
  useEffect(() => {
    const handleWheel = (event) => {
      // Only trigger scroll-up if cards are horizontally aligned AND scrolling down
      if (isScrollReady && event.deltaY > 0 && animationPhase !== 'page-scrolling') {
        event.preventDefault(); // Prevent default page scroll
        setAnimationPhase('page-scrolling'); // Start the page scrolling animation

        // After page scroll animation, signal completion
        setTimeout(() => {
          setAnimationPhase('complete');
          if (onAnimationComplete) {
            onAnimationComplete(); // Signal App.js to hide this page
          }
        }, 1500); // Matches the CSS transition duration for the scroll-up animation
      }
    };

    const container = pageContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false }); // passive: false to allow preventDefault
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isScrollReady, animationPhase, onAnimationComplete]); // Dependencies for this effect

  // Determine card styles based on animation phase and active card
  const getCardStyle = (cardId) => {
    const baseStyle = "absolute transition-all duration-700 ease-in-out transform bg-gray-800 rounded-xl shadow-lg p-6 text-center flex flex-col items-center justify-center border border-indigo-700";
    const cardWidth = 'w-72 md:w-80 lg:w-96'; // Responsive width
    const cardHeight = 'h-96 md:h-[400px] lg:h-[450px]'; // Responsive height

    switch (animationPhase) {
      case 'initial':
        return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-0`; // Hidden
      case 'card1-entering':
        if (cardId === 1) {
          return `${baseStyle} ${cardWidth} ${cardHeight} opacity-100 scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30`;
        }
        return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-0`; // Others hidden
      case 'card2-entering':
        if (cardId === 1) {
          return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-90 translate-x-full z-10`; // Card 1 moves right, fades
        } else if (cardId === 2) {
          return `${baseStyle} ${cardWidth} ${cardHeight} opacity-100 scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30`;
        }
        return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-0`; // Card 3 hidden
      case 'card3-entering':
        if (cardId === 1) {
          return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-90 translate-x-full z-10`;
        } else if (cardId === 2) {
          return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-90 translate-x-full z-10`; // Card 2 moves right, fades
        } else if (cardId === 3) {
          return `${baseStyle} ${cardWidth} ${cardHeight} opacity-100 scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30`;
        }
        return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-0`; // Should not happen
      case 'horizontal-aligning':
      case 'page-scrolling':
      case 'complete':
        // Horizontal alignment positions
        const horizontalBase = `${baseStyle} ${cardWidth} ${cardHeight} opacity-100 scale-100 top-1/2 -translate-y-1/2 z-20`;
        if (cardId === 1) {
          return `${horizontalBase} left-1/2 -translate-x-[120%] md:-translate-x-[150%] lg:-translate-x-[180%]`; // Left card
        } else if (cardId === 2) {
          return `${horizontalBase} left-1/2 -translate-x-1/2`; // Center card
        } else if (cardId === 3) {
          return `${horizontalBase} left-1/2 translate-x-[20%] md:translate-x-[50%] lg:translate-x-[80%]`; // Right card
        }
        return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-0`; // Should not happen
      default:
        return `${baseStyle} ${cardWidth} ${cardHeight} opacity-0 scale-0`;
    }
  };

  return (
    <div
      ref={pageContainerRef} // Assign ref to the main container
      className={`relative w-screen h-screen text-white overflow-hidden flex items-center justify-center
      transition-colors duration-700 ease-in-out
      ${animationPhase === ' bg-transparent page-scrolling' ? 'bg-transparent animate-scroll-up' : 'bg-gray-950'}`}>

      {cardsData.map((card, index) => (
        <div
          key={card.id}
          className={getCardStyle(card.id)}
          style={{ transitionDelay: `${index * 50}ms` }} // Small delay for subtle staggered entry in horizontal phase
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-400">{card.title}</h3>
          <p className="text-lg md:text-xl text-gray-300">{card.description}</p>
        </div>
      ))}

      {/* CSS for the page scroll up animation */}
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .animate-scroll-up {
          animation: scroll-up 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CardRevealPage;
