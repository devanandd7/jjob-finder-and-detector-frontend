import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold">AI Job Finder</div>
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul className="flex-col md:flex-row md:flex gap-8 md:static absolute left-0 top-full w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out hidden peer-checked:flex">
          <li>
            <a href="/" className="block py-2 px-4 hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="/components//secondPage" className="block py-2 px-4 hover:text-blue-400 transition">Upload</a>
          </li>
          <li>
            <a href="/contact" className="block py-2 px-4 hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
