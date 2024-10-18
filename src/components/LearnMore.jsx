import React from 'react';
import { Link } from 'react-router-dom';

function LearnMore() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Learn More About Modern Testing Tools
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          We're excited to share how we use advanced tools like Cypress and Playwright for testing.
        </p>

        {/* Go to Presentation Button */}
        <Link
          to="/presentation"
          className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Go to Presentation
        </Link>

        {/* Optional Back to Home Button */}
        <div className="mt-4">
          <Link
            to="/"
            className="inline-block rounded-md bg-gray-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
