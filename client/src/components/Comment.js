import React, { useState } from 'react'

export default function Comment() {
  return (
    <div className="bg-gray-300 rounded-lg p-3 m-2">
      <div className="flex justify-between">
        <div>
          <h5 className="text-black text-sm">
            Joey Jojo
          </h5>
          <h6 className="text-gray-700 text-xs mb-2">
            Interior Designer
          </h6>
          <p className="text-black text-xs">
            Wow hello this is really cool. Let's connect
            and get together. I am really interested in
            what you said in this post!
          </p>
        </div>

        <div className="mr-2">
          <p className="text-gray-500 text-xs mt-2">
           6/12/2022
          </p>
        </div>
      </div>
    </div>
  )
}