import React from 'react'

export default function JobListing() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-3 p-2">
      <div className="flex flex-col items-center pb-5 pt-5">
        <h5 className="mb-1 text-xl font-medium text-gray-900 text-center">
          Job Title
        </h5>
        <span className="text-sm text-gray-400 text-center">
          Job Description
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="/viewjob"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
          >
            View Posting
          </a>
        </div>
      </div>
    </div>
  )
}
