import React, { useState } from 'react'

export default function CommentList({ comments }) {
  if (!comments.length) {return <h3>No Comments Yet</h3>}

  return (
    <div>
      {comments.map((comment) => (
        <div className="bg-gray-300 rounded-lg p-3 m-2">
          <div className="flex justify-between">
            <div>
              <h5 className="text-black text-sm">
                {comment.username}
              </h5>
              <h6 className="text-gray-700 text-xs mb-2">
                Interior Designer
              </h6>
              <p className="text-black text-xs">
                {comment.body}
              </p>
            </div>

            <div className="mr-2">
              <p className="text-gray-500 text-xs mt-2">
              6/12/2022
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}