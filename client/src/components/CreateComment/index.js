import React, { useState } from 'react'

import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from '../../utils/mutations';

export default function CreateComment({ userID, postID }) {
  const [createComment] = useMutation(CREATE_COMMENT);
  const [commentBody, setCommentBody] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setCommentBody(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { data } = await createComment({ variables: {
        body: commentBody,
        author: userID,
        postId: postID
      }});
      window.location.assign('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <textarea
          className="resizable-input placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 text-slate-600 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-teal-500 focus:ring-1 sm:text-sm"
          placeholder="Add a comment"
          type="text"
          name="comment"
          value={commentBody}
          onChange={handleChange}
        />
      </div>

      <div className="mr-1 mt-2 flex justify-end">
        <button 
          className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-1 px-4 rounded-lg text-sm ml-1"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  )
}
