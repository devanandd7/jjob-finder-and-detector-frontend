import React from 'react';

const ScrollableContent = () => {
  return (
    <div className="bg-gray-900 text-white p-12 py-20 min-h-screen flex flex-col items-center justify-center z-20">
      <h2 className="text-5xl font-bold mb-8 text-center text-indigo-400">
        Discover More About AgenticHireX
      </h2>
      <p className="text-lg mb-4 leading-relaxed max-w-4xl text-center">
        Our platform leverages cutting-edge AI to redefine your job search. From intelligent resume parsing to real-time scam detection, we ensure every application counts. This section is designed to appear as you scroll down, providing additional information without cluttering the initial immersive 3D experience.
      </p>
      <p className="text-lg mb-4 leading-relaxed max-w-4xl text-center">
        Explore our powerful features, success stories, and the technology that makes AgenticHireX the future of employment. We are committed to connecting talent with genuine opportunities, eliminating the noise and risk associated with traditional job hunting.
      </p>
      <div className="h-[600px] w-full max-w-4xl bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-2xl mb-8 mt-8">
        Placeholder for detailed feature descriptions, images, or charts.
      </div>
      <p className="text-lg mb-4 leading-relaxed max-w-4xl text-center">
        AgenticHireX is designed for efficiency and security. Our proprietary algorithms continuously learn and adapt, providing you with the most relevant job matches and flagging suspicious listings before they reach you. Your time is valuable, and your career path deserves clarity and safety.
      </p>
      <p className="text-lg mb-4 leading-relaxed max-w-4xl text-center">
        Join our community of successful job seekers and experience the future of employment. With AgenticHireX, you're not just applying for jobs; you're building a smarter, safer career.
      </p>
      <div className="h-[600px] w-full max-w-4xl bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-2xl">
        Another section for testimonials or a call to action.
      </div>
    </div>
  );
};

export default ScrollableContent;
