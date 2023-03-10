import React, { useState, useEffect } from "react";

import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MYUSER } from '../utils/queries';
import { DELETE_POST } from "../utils/mutations";

import Auth from '../utils/auth';

import Posts from '../components/userPostList';
import Skills from '../components/Skills';
import Skillslist from '../components/skillsList';
import Responsibilities from '../components/Responsibilites';
import ProfileHeader from '../components/ProfileHeader'

const Profile = () => {
  var skillsArrayTrimmed = ""
  var responsibility1Trimmed = ""
  var responsibility2Trimmed = ""
  var responsibility3Trimmed = ""

  const userParam = useParams();

  // gets logged in user information and sets to userData
  // const userID = Auth.getProfile().data._id;

  if (Auth.loggedIn()) {
    var userID = Auth.getProfile().data._id;
  } else {
    var userID = '';
  }

  const { loading, data } = useQuery(QUERY_MYUSER, {
    variables: { id: userParam.id },
  });

  // Show Delete Button
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (userID === userParam.id) {
      setShow(true);
    }
  }, [Profile]);


  // Delete post
  const [deletePost] = useMutation(DELETE_POST);
  const deletePostFunction = async (postID) => {
    try {
      console.log(postID, userID)
      const { data } = await deletePost({
        variables: { id: postID, author: userID }
      });
      window.location.assign('/');
    } catch (err) { console.error(err) }
  }; 

  //displays loading until information from QueryUser recieves information
  if (loading) {
    return <div>Loading...</div>;
  }

  const userData = data.myUser
  if (userData.resume) {

    const skillsArray = userData.resume.skills.split(";")
    var skillsArrayTrimmed = skillsArray.map(element => {
      return element.trim()
    })

    const responsibility1 = userData.resume.prevJ1Responsibilities.split(";")
    var responsibility1Trimmed = responsibility1.map(element => {
      return element.trim()
    })
    const responsibility2 = userData.resume.prevJ1Responsibilities.split(";")
    var responsibility2Trimmed = responsibility2.map(element => {
      return element.trim()
    })
    const responsibility3 = userData.resume.prevJ1Responsibilities.split(";")
    var responsibility3Trimmed = responsibility3.map(element => {
      return element.trim()
    })

  }

  return (
    <div>
      {/* Header section for profile ??? ... need to figure out what we want to do here */}
      <ProfileHeader userData={userData} />

      {/* Grid styling for profile section */}
      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10 grid grid-cols-4 grid-rows-6 text-white p-5 rounded-md gap-5 gridSection">
        <div className="myPosts bg-gray-900 rounded-md p-4 lg:col-start-4 lg:col-span-1 md:col-start-1 md:col-span-4 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-7 md:row-start-5 md:row-end-7 sm:row-start-5 sm:row-end-7 row-start-5 row-end-7 col-start-1 col-span-4 flex flex-col items-center">
          <h1 className="profileHeaders text-teal-400">My Posts</h1>

          {/* Start of inidividual post here */}
          {userData.posts ? <Posts posts={userData.posts} deletePostFunction={deletePostFunction} show={show}/> : "No Posts Yet"}

        </div>

        <div className="skillsEducation bg-gray-900 rounded-md p-4 lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-4 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-3 md:row-start-1 md:row-end-2 sm:row-start-1 sm:row-end-2 row-start-1 row-end-2 col-start-1 col-span-4">
          <h1 className="profileHeaders text-white">Education and Skills</h1>

          <div className="flex">
            <div className="educationSection mr-2">
              <h4 className="m-1 bold text-teal-400 text-lg">Education</h4>
              {/* Education section with users credentials */}
              <div className="m-1 educationTemplate">
                <h6 className="bold">{userData.resume ? userData.resume.education : " "}</h6>
                <p className="text-sm">{userData.resume ? userData.resume.educationType : " "}</p>
                <p className="text-sm">{userData.resume ? userData.resume.educationLength : " "}</p>
              </div>
              {/* end template */}

            </div>

            <div className="skillsSection ml-2">
              <h4 className="m-1 bold text-teal-400 text-lg">Skills</h4>
              {/* Skills section with users credentials */}
              <div className="skillsList flex flex-wrap">
                {userData.resume ? <Skills skills={skillsArrayTrimmed} /> : " "}
              </div>
            </div>
          </div>
        </div>
        <div className="resume bg-gray-900 rounded-md p-4 lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-4 sm:col-start-1 sm:col-span-4 lg:row-start-3 lg:row-end-7 md:row-start-2 md:row-end-5 sm:row-start-2 sm:row-end-5 row-start-2 row-end-5 col-start-1 col-span-4">
          <div className="profileResume bg-gray-200 text-black rounded-lg p-4 m-5">
            <h3 className="bold text-2xl text-center">{userData.resume ? userData.resume.fullName : " "}</h3>
            <hr className="my-3 mx-2 h-px border-0 bg-gray-400"></hr>
            <div className="m-1 py-1 px-10 text-sm">
              <p>
                {userData.resume ? userData.resume.summary : " "}
              </p>
            </div>
            <hr className="my-3 mx-2 h-px border-0 bg-gray-400"></hr>

            <div className="flex resume-flex">
              <div className="contactEducationSkills bg-gray-900 rounded-lg py-5 px-6 mx-6 text-white">
                <h4 className="bold text-lg text-teal-400">Contact</h4>
                <div className="m-1">
                  <p>
                    <span className="mr-2">
                      <ion-icon name="mail"></ion-icon>
                    </span>
                    {userData.resume ? userData.resume.email : " "}
                  </p>
                  <p>
                    <span className="mr-2">
                      <ion-icon name="call"></ion-icon>
                    </span>
                    {userData.resume ? userData.resume.phone : " "}
                  </p>
                  <p>
                    <span className="mr-2">
                      <ion-icon name="location"></ion-icon>
                    </span>
                    {userData.resume ? userData.resume.location : " "}
                  </p>
                </div>

                <h3 className="bold text-lg text-teal-400">Education</h3>
                <div className="m-1">
                  <p className="bold">{userData.resume ? userData.resume.education : " "}</p>
                  <p className="text-sm">{userData.resume ? userData.resume.educationType : " "}</p>
                  <p className="text-sm">{userData.resume ? userData.resume.educationLength : " "}</p>
                </div>

                <h3 className="bold text-lg text-teal-400">Skills</h3>
                <ul className="m-1">
                  {userData.resume ? <Skillslist skills={skillsArrayTrimmed} /> : " "}
                </ul>
              </div>

              <div className="resumeExperience mx-4">
                <h3 className="bold text-xl">Experience</h3>
                {/* Resume section with users credentials */}
                <div className="m-1 my-2">
                  <h4 className="bold">{userData.resume ? userData.resume.prevJ1Title : " "}</h4>
                  <h5 className="text-sm">{userData.resume ? userData.resume.prevJ1Company : " "}</h5>
                  <h5 className="text-sm">{userData.resume ? userData.resume.prevJ1Length : " "}</h5>
                  <h5 className="text-sm bold">Responsibilities</h5>
                  <ul className="text-sm list-disc ml-4">
                    {userData.resume ? <Responsibilities responsibilities={responsibility1Trimmed} /> : " "}
                  </ul>
                </div>

                <div className="m-1 my-2">
                  <h4 className="bold">{userData.resume ? userData.resume.prevJ2Title : " "}</h4>
                  <h5 className="text-sm">{userData.resume ? userData.resume.prevJ2Company : " "}</h5>
                  <h5 className="text-sm">{userData.resume ? userData.resume.prevJ2Length : " "}</h5>
                  <h5 className="text-sm bold">Responsibilities</h5>
                  <ul className="text-sm list-disc ml-4">
                    {userData.resume ? <Responsibilities responsibilities={responsibility2Trimmed} /> : " "}
                  </ul>
                </div>

                <div className="m-1 my-2">
                  <h4 className="bold">{userData.resume ? userData.resume.prevJ3Title : " "}</h4>
                  <h5 className="text-sm">{userData.resume ? userData.resume.prevJ3Company : " "}</h5>
                  <h5 className="text-sm">{userData.resume ? userData.resume.prevJ3Length : " "}</h5>
                  <h5 className="text-sm bold">Responsibilities</h5>
                  <ul className="text-sm list-disc ml-4">
                    {userData.resume ? <Responsibilities responsibilities={responsibility3Trimmed} /> : " "}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile