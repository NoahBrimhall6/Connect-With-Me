import React from 'react';


export default function userPosts ({posts}) {
    if (!posts.length) {return <h3>No Posts</h3>}

    return (
        posts.map((post) => {
            return (
                <div key={post._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
                <div className="flex flex-col items-center pb-5 pt-5">
                  <h5 className="text-xl font-medium text-gray-900 text-center">
                    {post.title}
                  </h5>
                  <span className="text-sm text-gray-400 text-center">
                    {post.body}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href={`/posts/${post._id}`}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-teal-500 text-gray-800 border-teal-500 hover:bg-teal-400 hover:border-teal-400 focus:ring-teal-600"
                    >
                      View
                    </a>
                    <a
                      href={`/posts/${post._id}`}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            )
        })
    )
}