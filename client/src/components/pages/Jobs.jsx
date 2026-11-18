import React, { useState, useEffect } from 'react';

const Jobs = ({ setCurrentPage, addToCart }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [salary, setSalary] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchJobsAndSalary = async () => {
    setLoading(true);
    const jobUrl = `http://localhost:8000/api/jobs?offset=${currentIndex * 10}`;
    console.log('Fetching jobs from:', jobUrl);
    try {
      const response = await fetch(jobUrl);
      console.log('Jobs response status:', response.status);
      const data = await response.json();
      console.log('Jobs response data:', data);
      if (data.error) {
        console.error('API Error:', data.error);
        setJobs([]);
      } else {
        setJobs(data.jobs || []);
      }
      // Placeholder salary since LinkedIn API may not support it
      setSalary({ median_salary: null, message: "Salary data not available from this API" });
    } catch (error) {
      console.error('Fetch Error:', error);
      setJobs([]);
      setSalary(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsAndSalary();
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 2); // Rotate every 5 minutes (simulated with 2 pages for now)
      fetchJobsAndSalary();
    }, 300000); // 5 minutes in ms
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 2); // Manual navigation between pages
    fetchJobsAndSalary();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 2) % 2); // Wrap around
    fetchJobsAndSalary();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Job Spotlight Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest job opportunities in South Africa and remotely, updated every 5 minutes!
          </p>
        </div>

        {/* Creative Loading Icon */}
        {loading && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
                Spotlighting Jobs...
              </div>
            </div>
          </div>
        )}

        {/* Job Carousel */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {loading ? null : (
            <>
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={handlePrev}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                >
                  ← Prev
                </button>
                <h2 className="text-2xl font-bold text-gray-900">Latest Opportunities</h2>
                <button
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                >
                  Next →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.length === 0 ? (
                  <p className="text-center col-span-full text-gray-600 text-lg">No jobs available at the moment.</p>
                ) : (
                  jobs.map((job) => (
                    <div key={job.id || job.job_id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title || job.job_title || 'Untitled Job'}</h3>
                      <p className="text-gray-600 mb-1">{job.company || job.employer_name || 'Unknown Employer'}</p>
                      <p className="text-gray-600 mb-2">{job.location || 'Location Not Available'} {job.remote ? '(Remote)' : ''}</p>
                      <p className="text-green-600 font-medium mb-2">
                        {salary && salary.median_salary ? `Est. $${salary.median_salary}` : 'No details about salary'}
                      </p>
                      <p className="text-sm text-gray-700 mb-4">
                        <strong>Basic Requirements:</strong><br />
                        {job.skills && job.skills.length > 0 ? job.skills.slice(0, 3).join(', ') : 'Basic skills required, check description'}<br />
                        {job.description ? job.description.substring(0, 100) + '...' : 'See full details below'}
                      </p>
                      <button
                        onClick={() => addToCart({
                          id: job.id || job.job_id,
                          name: `${job.title || job.job_title || 'Job'} Application Support`,
                          price: 50,
                          description: `Professional support for applying to ${job.title || job.job_title || 'this job'} at ${job.company || job.employer_name || 'Unknown Employer'}`
                        })}
                        className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-lg font-medium hover:shadow-md transition-all"
                      >
                        Get Started
                      </button>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>

        {/* Career Kickstart Toolkit */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Kickstart Toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Tips</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Update your resume with recent skills.</li>
                <li>Practice common interview questions.</li>
                <li>Network with professionals in your field.</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Resources</h3>
              <a href="#" className="text-blue-500 hover:underline">Resume Builder</a><br />
              <a href="#" className="text-blue-500 hover:underline">Interview Prep Videos</a>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Job Alert Signup</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
              />
              <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                Sign Up
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 italic">"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"</p>
            <p className="text-gray-700 mt-2">Featured Story: Simthembile, a Nurse from Cape Town, landed her dream job in 2 weeks using our tips!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;