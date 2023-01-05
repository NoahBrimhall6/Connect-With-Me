import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_JOBPOST } from '../utils/queries';

export default function ViewJob() {
  const jobParam  = useParams();

  const { loading, data } = useQuery(QUERY_JOBPOST, {
    variables: { id: jobParam.jobId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { title, description, salary, contact, zipcode, createdAt, qualifications, responsibilities } = data.jobPost;

  return (
    <div className='xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10 flex justify-center'>
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-md m-3 p-2">
        <div className="flex flex-col items-center pb-5 pt-5 px-20">
          <div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 text-center">{title}</h5>
            <h4 className="text-sm text-gray-400 text-center mb-1">{createdAt}<span> · {zipcode}</span></h4>
            <p className="text-sm text-gray-900 text-center"><span className='bold'>Contact:</span> {contact}</p>
            <h4 className='mt-2 bold'>Description:</h4>
            <p className='text-sm'>{description}</p>
            <p className='my-1'><span className='bold'>Salary:  </span>{salary}</p>
            {/* Qualifications for job */}
            <h4 className='bold'>Qualifications:</h4>
            <ul>
              <li className='text-sm ml-4 list-disc'>{qualifications}</li>
            </ul>

            {/*  */}
            <h4 className='bold mt-1'>Responsibilities:</h4>
            <ul>
              <li className='text-sm ml-4 list-disc'>{responsibilities}</li>
            </ul>
          </div>

          <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-teal-500 text-gray-900 border-teal-500 hover:bg-teal-400 hover:border-teal-400 focus:ring-teal-700">Apply</a>
            <a href="/jobs" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700">Go Back</a>
          </div>
        </div>
      </div>
    </div>
  )
}