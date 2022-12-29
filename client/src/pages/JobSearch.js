import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import CreateJob from '../components/CreateJob';

export default function JobSearch() {
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  // Logic to show the modal when creating a post
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Post button -- when user creates a clicks submit, will appear on feed
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add new post to the posts array
    setPosts([...posts, formData]);
    // Clear form data
    setFormData({});
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <CreateJob />

      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 flex justify-center flex-wrap">
        {/* Start of Job posting template */}
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
        {/* End of Job posting template */}

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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
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
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
              >
                View Posting
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
