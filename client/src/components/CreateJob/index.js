import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_JOB } from '../../utils/mutations';

export default function CreateJob() {
  // Logic to show the modal when creating a post
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Post button
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Create new Job Listing
  const [createJob] = useMutation(CREATE_JOB);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // Create new post in the DB
      const { data } = await createJob({ variables: formData}); 
      console.log(data);
      // Clear form data
      setFormData({});
      toggleModal();
      window.location.assign('/jobs');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <section>
          <div className="flex flex-col justify-center items-center m-10 bg-gray-900 p-12 rounded-lg">
            <h3 className="bold text-2xl mb-5 text-white">
              Create a Job Listing
            </h3>
            <div>
              <button
                className="createPost px-6 py-2 rounded-lg bg-teal-500 hover:bg-teal-400"
                placeholder="Start your post here"
                onClick={toggleModal}
              >
                Start
              </button>
              {isOpen && (
                <div
                  className="modal-overlay"
                  onClick={toggleModal}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <form onSubmit={handleSubmit}>
                      <h3 className="heading text-center font-bold text-2xl m-5 text-gray-800">
                        New Job Posting
                      </h3>
                      <div className="bg-gray-800 editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-lg">
                        <input
                          className="title bg-gray-100 border border-gray-300 rounded-md p-2 mb-4 outline-none"
                          spellCheck="false"
                          placeholder="Job Title"
                          type="text"
                          name="title"
                          onChange={handleChange}
                        />
                        <textarea
                          className="description bg-gray-100 sec p-3 h-20 mb-4 rounded-md border border-gray-300 outline-none"
                          spellCheck="false"
                          placeholder="Description of job posting"
                          name="description"
                          onChange={handleChange}
                        ></textarea>
                        <input
                          className="title bg-gray-100 border border-gray-300 rounded-md p-2 mb-4 outline-none"
                          spellCheck="false"
                          placeholder="Salary"
                          type="text"
                          name="salary"
                          onChange={handleChange}
                        />
                        <input
                          className="title bg-gray-100 border border-gray-300 rounded-md p-2 mb-4 outline-none"
                          spellCheck="false"
                          placeholder="Contact"
                          type="text"
                          name="contact"
                          onChange={handleChange}
                        />
                        <input
                          className="title bg-gray-100 border border-gray-300 rounded-md p-2 mb-4 outline-none"
                          spellCheck="false"
                          placeholder="Zip Code"
                          type="text"
                          name="zipcode"
                          onChange={handleChange}
                        />
                        <textarea
                          className="title bg-gray-100 border border-gray-300 rounded-md h-20 p-2 mb-4 outline-none"
                          spellCheck="false"
                          placeholder="Job Qualifications"
                          type="text"
                          name="qualifications"
                          onChange={handleChange}
                        ></textarea>
                        <textarea
                          className="title bg-gray-100 border border-gray-300 rounded-md h-20 p-2 mb-4 outline-none"
                          spellCheck="false"
                          placeholder="Job Responsibilities"
                          type="text"
                          name="responsibilities"
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <div className="flex justify-end">
                        <div className="buttons mx-2 my-3 col-start-5 col-span-1 mr-10">
                          <button
                            className="btn border border-teal-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-teal-600 rounded-lg m-1 hover:bg-teal-500"
                            type="submit"
                          >
                            Post
                          </button>
                          <button
                            onClick={toggleModal}
                            className="btn border border-gray-800 p-1 px-4 font-semibold cursor-pointer bg-gray-900 text-white ml-auto rounded-lg m-1 mr-4 hover:bg-gray-800"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
