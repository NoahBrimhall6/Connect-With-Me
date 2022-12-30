import React from 'react'

export default function Comment({ comment }) {
  return (
    <div className="bg-gray-300 rounded-lg p-3 m-2">
      <div className="flex justify-between">
        <div>
          <h5 className="text-black text-sm">
            {comment.author.username}
          </h5>
          <h6 className="text-gray-700 text-xs mb-2">
            {`${comment.author.firstName} ${comment.author.lastName}`}
          </h6>
          <p className="text-black text-xs">
            {comment.body}
          </p>
        </div>

        <div className="mr-2">
          <p className="text-gray-500 text-xs mt-2">
            {comment.createdAt}
          </p>
        </div>
      </div>
    </div>
  )
}
