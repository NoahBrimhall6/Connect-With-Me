import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_JOBPOSTINGS } from "../utils/queries";

import CreateJob from '../components/CreateJob';
import JobListing from '../components/JobListing';

export default function JobSearch() {
  // Query Posts
  const { loading, data } = useQuery(QUERY_JOBPOSTINGS);
  if (loading) {return <h3>Loading...</h3>};

  const jobs = data?.jobPostings || [];
  
  return (
    <>
      <CreateJob />
      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 flex justify-center flex-wrap">
        {!jobs.length ? <h3>No Jobs Yet</h3> : jobs.map((job) => <JobListing key={job._id} job={job}/>)}
      </div>
    </>
  );
}
 