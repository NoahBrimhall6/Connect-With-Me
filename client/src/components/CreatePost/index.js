import React, { useState } from 'react'

export default function CreatePost() {
  // Logic to show the modal when creating a post
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Post button 
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create new post in the DB
    // Tell React to re-query posts?


    // Clear form data
    setFormData({});
    toggleModal();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className='flex justify-center'>
    <section className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5">
      <div className="flex flex-col justify-center items-center mx-10 mt-10 bg-gray-900 py-12 px-20 rounded-lg">
        <h3 className="bold text-2xl mb-5 text-white">Create a Post</h3>
        <div>
          <button
            className="createPost px-6 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 "
            placeholder="Start your post here"
            onClick={toggleModal}
          >Start</button>

          {/* Modal Begins */}
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
                    New Post
                  </h3>
                  <div className="bg-gray-800 editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-lg">
                    <input
                      className="title bg-gray-100 border border-gray-300 p-2 mb-4 rounded-md outline-none"
                      spellcheck="false"
                      placeholder="Title"
                      type="text"
                      name="title"
                      onChange={handleChange}
                    />
                    <textarea
                      className="description bg-gray-100 sec p-3 h-60 border rounded-md border-gray-300 outline-none"
                      spellcheck="false"
                      placeholder="Describe everything about this post here"
                      name="content"
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
          {/* Modal Ends */}

        </div>
      </div>
    </section>
    </div>
  )
}
