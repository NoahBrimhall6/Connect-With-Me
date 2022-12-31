import React, { useState } from "react";

export default function Redirect() {
  return (
    <>
      <div className="text-center m-10">
        <h1 className="bold text-3xl mb-5">You need to create a resume to view your profile</h1>
        <a href="/resume" className="bg-teal-400 hover:bg-teal-500 px-6 py-2 rounded-lg bold">Start Here</a>
      </div>
    </>
  );
}