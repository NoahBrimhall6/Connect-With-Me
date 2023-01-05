import React from 'react'

export default function Comment({ comment }) {
  return (
    <div className="bg-gray-300 rounded-lg p-3 m-2">
      <div className="grid grid-cols-5">
        <div className='col-start-1 col-end-4'>
          <h5 className="text-black text-sm">
            {`${comment.author.firstName} ${comment.author.lastName}`}  
          </h5>
          <h6 className="text-gray-700 text-xs mb-2">
            {comment.author.username}
          </h6>
        </div>

        <p className="col-start-1 col-end-8 text-black text-xs">
            {comment.body}
          </p>

        <div className="col-start-7 col-end-8 row-start-1">
          <p className="text-gray-500 text-xs mt-1">
            {comment.createdAt}
          </p>
        </div>
      </div>
    </div>
  )
}
