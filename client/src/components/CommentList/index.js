import React from 'react'
import Comment from '../Comment';

export default function CommentList({ comments }) {
  if (!comments.length) {return <h3 className='text-sm ml-2'>No Comments Yet</h3>}

  return (
    comments.map((comment) => {
      return (
        <Comment key={comment._id} comment={comment} />
      )
    })
  )
};