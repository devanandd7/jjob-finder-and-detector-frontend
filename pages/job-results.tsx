import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy job data
const dummyJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'We are looking for a Senior Software Engineer to join our team...',
    isReal: true,
    postedDate: '2024-03-15',
    skills: ['React', 'Node.js', 'AWS'],
    experience: '5+ years',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'StartupX',
    location: 'Remote',
    type: 'Contract',
    salary: '$90k - $120k',
    description: 'Join our fast-growing startup as a Frontend Developer...',
    isReal: true,
    postedDate: '2024-03-14',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    experience: '3+ years',
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'AI Solutions',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130k - $160k',
    description: 'Looking for a Data Scientist to work on cutting-edge AI projects...',
    isReal: false,
    postedDate: '2024-03-13',
    skills: ['Python', 'Machine Learning', 'SQL'],
    experience: '4+ years',
  },
  // Add more dummy jobs as needed
];

const JobResultsPage = () => {
  const [activeTab, setActiveTab] = useState<'real' | 'fake'>('real');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    experience: '',
  });
  const [sortBy, setSortBy] = useState('newest');

  const filteredJobs = dummyJobs.filter(job => {
    const matchesTab = activeTab === 'real' ? job.isReal : !job.isReal;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilters = (!filters.jobType || job.type === filters.jobType) &&
                          (!filters.location || job.location.includes(filters.location)) &&
                          (!filters.experience || job.experience === filters.experience);
    return matchesTab && matchesSearch && matchesFilters;
  }).sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
    }
    return 0;
  });

  const jobTypes = ['Full-time', 'Contract', 'Part-time', 'Remote'];
  const locations = ['San Francisco, CA', 'New York, NY', 'Remote'];
  const experienceLevels = ['1+ years', '3+ years', '5+ years'];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Results</h1>
        
        {/* Search and Filter Bar */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <select
              value={filters.jobType}
              onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Job Types</option>
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <select
              value={filters.experience}
              onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Experience Levels</option>
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('real')}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeTab === 'real'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Real Jobs
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('fake')}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeTab === 'fake'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Fake Jobs
          </motion.button>
        </div>
      </motion.div>

      {/* Job Listings */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {filteredJobs.map(job => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  job.isReal ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {job.isReal ? 'Real' : 'Fake'}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Location:</span> {job.location}
                </div>
                <div>
                  <span className="font-medium">Type:</span> {job.type}
                </div>
                <div>
                  <span className="font-medium">Salary:</span> {job.salary}
                </div>
                <div>
                  <span className="font-medium">Experience:</span> {job.experience}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-700">{job.description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Posted: {new Date(job.postedDate).toLocaleDateString()}
                </span>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredJobs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-xl text-gray-600">No jobs found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilters({ jobType: '', location: '', experience: '' });
            }}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default JobResultsPage; 