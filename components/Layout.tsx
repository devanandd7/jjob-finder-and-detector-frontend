import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg rounded-b-xl p-4 md:p-6 mb-8 flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-tight">
          <Link href="/" className="hover:text-blue-200 transition-colors duration-200">
            AI Job Finder
          </Link>
        </div>
        <nav className="flex items-center space-x-4 md:space-x-6">
          {isLoggedIn ? (
            <>
              <Link href="/upload-resume" className="text-white hover:text-blue-200 transition-colors duration-200 text-lg font-medium">
                Upload Resume
              </Link>
              <Link href="/job-results" className="text-white hover:text-blue-200 transition-colors duration-200 text-lg font-medium">
                Job Results
              </Link>
              <Link href="/dashboard" className="text-white hover:text-blue-200 transition-colors duration-200 text-lg font-medium">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-lg font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-lg font-medium">
                Login / Signup
              </Link>
            </>
          )}
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-4 md:p-6 mt-8 rounded-t-xl text-center shadow-inner">
        <p>&copy; {new Date().getFullYear()} AI Job Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout; 