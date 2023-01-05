import React, { useState } from 'react';
import CreateComment from '../CreateComment';
import CommentList from '../CommentList';

export default function Post({ post, connection, like, dislike, newComment }) {
  // Comments section use state to show and hide comments
  const [isOpen, setIsOpen] = useState(false);
  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

console.log(post.author)

  return (
    <>
      <section className="flex justify-center mt-5">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-100 shadow-lg w-full">
          <div className="p-6 flex flex-col justify-start w-full">
            <div className="flex justify-between mb-3">
              <div>
                <h5 className="text-gray-900 text-xl font-medium mb-1 bold"><a href = "#">
                  {`${post.author.firstName} ${post.author.lastName}`}</a>
                </h5>
                <h6 className="text-gray-500 text-sm font-medium mb-1">
                  {/* would love to change this to user's job title */}
                  {post.author.resume ? post.author.resume.prevJ1Title : 'Unemployed'}
                </h6>
              </div>
              <div className="mr-2">
                <h6 className="text-gray-500 text-xs font-medium">
                  {post.createdAt}
                </h6>
              </div>
            </div>

            <div className="text-gray-700 text-base mb-4">
              <h5 className="text-gray-900 text-md bold">
                {post.title}
              </h5>
              <p>
                {post.body}
              </p>
            </div>

            <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

            <div className="flex flex-row justify-between mx-5">
              <p className="text-black text-xs">{post.likesCount}</p>
              <p className="text-black text-xs">{post.dislikesCount}</p>
              <button
                onClick={toggleComments}
                className="text-black hover:underline text-xs"
              >
                {post.commentCount}
              </button>
            </div>

            <div>
              {/* hidden comments visible */}
              {isOpen && (
                <div>
                  <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                  <div className="bg-gray-500 rounded-lg p-3">
                    <div className="flex justify-between">
                      <h3 className="text-white mx-2 text-lg">Comments</h3>
                      <button
                        onClick={toggleComments}
                        className="bg-teal-500 hover:bg-teal-400 text-white xbutton  rounded-full mx-1 mr-1 mb-1 text-xs"
                      >
                        <ion-icon name="close"></ion-icon>
                      </button>
                    </div>

                    {/* Comments section */}
                    <section>
                      <CommentList comments={post.comments}/>
                    </section>

                    <div className="flex justify-end">
                      <button
                        onClick={toggleComments}
                        className="text-xs hover:underline mr-3 mt-1"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

            <div className="px-2 pt-3 flex justify-between">
              <div>
                <button className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-3 rounded-full mx-1">
                  <ion-icon onClick={() => like(post._id)} name="thumbs-up"></ion-icon>
                </button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-3 rounded-full mx-1">
                  <ion-icon onClick={() => dislike(post._id)} name="thumbs-down"></ion-icon>
                </button>
                <button className="bg-red-400 hover:bg-red-300 text-white py-2 px-3 rounded-full mx-1">
                  <ion-icon onClick={() => connection(post.author._id)} name="heart"></ion-icon>
                </button>
                <button className="bg-yellow-400 hover:bg-yellow-300 text-white py-2 px-3 rounded-full mx-1">
                  <ion-icon name="star"></ion-icon>
                </button>
              </div>

              <CreateComment postID={post._id} newComment={newComment}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}