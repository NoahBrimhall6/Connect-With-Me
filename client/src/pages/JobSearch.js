import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import CreateJob from '../components/CreateJob';
import JobListing from '../components/JobListing';

var array = [];

for (let i = 0; i < 10; i++) {
  array.push(i);
};

export default function JobSearch() {
  return (
    <>
      <CreateJob />
      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 flex justify-center flex-wrap">
        {array.map((index) => <JobListing />)}
      </div>
    </>
  );
}
 