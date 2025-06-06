import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  RocketLaunchIcon,
  SparklesIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

// Import Lottie animations
import jobSearchAnimation from '../public/animations/job-search.json';
import aiAnalysisAnimation from '../public/animations/ai-analysis.json';
import successAnimation from '../public/animations/success.json';

const HomePage = () => {
  const features = [
    {
      title: 'Smart Job Detection',
      description: 'Our AI-powered system automatically identifies and flags potential scam job postings.',
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Resume Analysis',
      description: 'Get personalized job recommendations based on your skills and experience.',
      icon: <ChartBarIcon className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Application Tracking',
      description: 'Keep track of all your job applications and their status in one place.',
      icon: <BriefcaseIcon className="w-8 h-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      image: '/testimonials/sarah.jpg',
      quote: 'AI Job Finder helped me land my dream job at a top tech company. The scam detection feature saved me from several fake job offers!',
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist',
      image: '/testimonials/michael.jpg',
      quote: 'The resume analysis feature is incredible. It helped me tailor my applications and increased my response rate by 300%.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      image: '/testimonials/emily.jpg',
      quote: 'I love how the platform keeps me organized with all my applications. The dashboard is a game-changer!',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Active Users', icon: <UserGroupIcon className="w-8 h-8" /> },
    { value: '50K+', label: 'Jobs Analyzed', icon: <ChartBarIcon className="w-8 h-8" /> },
    { value: '95%', label: 'Scam Detection Rate', icon: <ShieldCheckIcon className="w-8 h-8" /> },
    { value: '24/7', label: 'AI Monitoring', icon: <SparklesIcon className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-700/50"></div>
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Find Your Dream Job with{' '}
                <span className="relative">
                  Confidence
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl">
                Our AI-powered platform helps you identify real opportunities while protecting you from job scams.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/login" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/job-results" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Browse Jobs
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Lottie animationData={jobSearchAnimation} className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Job Finder?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with user-friendly features to make your job search safer and more efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes job searching simple and secure in just a few steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Your Resume</h3>
                  <p className="text-gray-600">Start by uploading your resume in PDF or DOC format. Our AI will analyze your skills and experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get Job Matches</h3>
                  <p className="text-gray-600">Receive personalized job recommendations based on your profile and preferences.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Apply with Confidence</h3>
                  <p className="text-gray-600">Apply to verified jobs with our scam detection system protecting you from fraud.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <Lottie animationData={aiAnalysisAnimation} className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from job seekers who found their dream jobs with AI Job Finder.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Job Search?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join thousands of job seekers who trust AI Job Finder to find legitimate opportunities.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Now
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <Lottie animationData={successAnimation} className="w-full h-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 