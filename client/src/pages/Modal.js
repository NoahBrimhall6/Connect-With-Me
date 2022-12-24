import React, { useState } from 'react';

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Still need logic for post button!!! 

  return (
    <div>
      <input className="createPost p-3 rounded-lg bg-gray-200 hover:border hover:border-teal-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400" placeholder="Start your post here" onClick={toggleModal}></input>
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={toggleModal}
          onKeyDown={toggleModal}
          role="button"
          tabIndex={0}
        >
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            {children}
            <div className='flex justify-end'>
              <div className="buttons mx-2 my-3 col-start-5 col-span-1 mr-10">
                <button className="btn border border-teal-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-teal-600 rounded-lg m-1 hover:bg-teal-500">
                  Post
                </button>
                <button onClick={toggleModal} className="btn border border-gray-800 p-1 px-4 font-semibold cursor-pointer bg-gray-900 text-white ml-auto rounded-lg m-1 mr-4 hover:bg-gray-800">
                  Cancel
                </button>
              </div>
            </div>  
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
