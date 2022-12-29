import React from 'react'

export default function CommentList({ comments }) {
  if (!comments.length) {return <h3>No Comments Yet</h3>}

  return (
    comments.map((comment) => {
      return (
        <div className="bg-gray-300 rounded-lg p-3 m-2">
          <div className="flex justify-between">
            <div>
              <h5 className="text-black text-sm">
                {comment.author}
              </h5>
              <h6 className="text-gray-700 text-xs mb-2">
                Interior Designer
              </h6>
              <p className="text-black text-xs">
                {comment.comment}
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
    })
  )
};