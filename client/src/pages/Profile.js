import React from "react";
import Img from "../assets/images/blank-profile-pic.webp";

export default function Profile() {
  return (
    <div>
      {/* Header section for profile ??? ... need to figure out what we want to do here */}
      <div className="grid grid-cols-6 mt-10">
        <header className="bg-gray-900 text-white p-8 rounded-lg col-start-2 col-end-6 grid grid-cols-6 gap-8">
          <div className="lg:col-start-2 lg:col-end-6 md:col-start-2 md:col-end-6 sm:col-start-2 sm:col-end-6 col-start-2 col-end-6 flex justify-center items-center">
            <div>
              {/* logic needed to UPLOAD IMAGE -- change to a button so when clicked can change picture ? */}
              <img
                className="rounded-lg my-3 placeholderImage"
                src={Img}
                alt="profile picture holder"
              ></img>
              {/* <h1 className='bold text-lg text-black mt-3 text-center rounded-lg bg-gray-200 py-5 my-3'>Banana Yomamma</h1> */}
              <h1 className="text-center text-lg bold">Sally Swanson</h1>
              <h3 className="text-white text-center">Software Developer</h3>
            </div>
          </div>

          <div className="lg:col-start-1 lg:col-end-7 lg:row-start-2 lg:row-end-3 mt-3 bg-white rounded-md p-4 md:col-start-1 md:-col-end-7 sm:col-start-1 sm:col-end-7 col-start-1 col-end-7">
            <div className="flex justify-center relative">
              <h3 className="text-black profileHeaders cols-start-3 col-end-6">About</h3>
            
            {/* added edit button, need to add logic now... */}
            <div className="absolute right-0">
            <button className="hover:text-teal-500 text-black">
                <ion-icon name="create-outline"></ion-icon>
              </button>
            </div>
              
            </div>

            <p className="mx-10 my-5 text-black">
              About me Section About me SectionAbout me SectionAbout me
              SectionAbout me Section About me Section About me Section About me
              Section
            </p>
          </div>
        </header>
      </div>

      {/* Grid styling for profile section */}
      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10 grid grid-cols-4 grid-rows-6 text-white p-5 rounded-md gap-5 gridSection">
        <div className="myPosts bg-gray-900 rounded-md p-4 lg:col-start-4 lg:col-span-1 md:col-start-4 md:col-span-1 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-7 md:row-start-1 md:row-end-7 sm:row-start-5 sm:row-end-7 row-start-5 row-end-7 col-start-1 col-span-4 flex flex-col items-center">
          <h1 className="profileHeaders text-teal-400">My Posts</h1>

          {/* Start of inidividual post here */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Post Title
              </h5>
              <span className="text-sm text-gray-400 text-center">
                Preview of post content
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  View Post
                </a>
              </div>
            </div>
          </div>
          {/* end of individual post here */}

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Post Title
              </h5>
              <span className="text-sm text-gray-400 text-center">
                Preview of post content
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  View Post
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="skillsEducation bg-gray-900 rounded-md p-4 lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-3 md:row-start-1 md:row-end-3 sm:row-start-1 sm:row-end-2 row-start-1 row-end-2 col-start-1 col-span-4">
          <h1 className="profileHeaders text-white">Education and Skills</h1>

          <div className="flex">
            <div className="educationSection mr-2">
              <h4 className="m-1 bold text-teal-400 text-lg">Education</h4>
              {/* Education template -- make responsive with users credentials */}
              <div className="m-1 educationTemplate">
                <h6 className="bold">University of Utah</h6>
                <p className="text-sm">Full Stack Coding Bootcamp</p>
                <p className="text-sm">Jul 2022 - Jan 2023</p>
              </div>
              {/* end template */}

              <div className="m-1 educationTemplate">
                <h6 className="bold">Harvard</h6>
                <p className="text-sm">Bachelor of Business Administration</p>
                <p className="text-sm">Jul 2012 - Jan 2018</p>
              </div>
            </div>

            <div className="skillsSection ml-2">
              <h4 className="m-1 bold text-teal-400 text-lg">Skills</h4>
              {/* Make the skills responsive . . . */}
              <div className="skillsList flex flex-wrap">
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
                <p className="mr-2 m-1">Skill here</p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume bg-gray-900 rounded-md p-4 lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-4 lg:row-start-3 lg:row-end-7 md:row-start-3 md:row-end-7 sm:row-start-2 sm:row-end-5 row-start-2 row-end-5 col-start-1 col-span-4">
          <div className="profileResume bg-gray-200 text-black rounded-lg p-4 m-5">
            <h3 className="bold text-2xl text-center">Jane Doe</h3>
            <hr className="my-3 mx-2 h-px border-0 bg-gray-400"></hr>
            <div className="m-1 py-1 px-10 text-sm">
              <p>
                Professional summary about me. Lots of good stuff. I am so
                amazing because of xyz and have a lot to offer... blah blah
                blah. Lots of good stuff. I am so amazing ya ya ya I am wow cool
                I am wow cool I am wow cool.
              </p>
            </div>
            <hr className="my-3 mx-2 h-px border-0 bg-gray-400"></hr>

            <div className="flex">
              <div className="contactEducationSkills bg-gray-900 rounded-lg py-5 px-6 mx-6 text-white">
                <h4 className="bold text-lg text-teal-400">Contact</h4>
                <div className="m-1">
                  <p>
                    <span className="mr-2">
                      <ion-icon name="mail"></ion-icon>
                    </span>
                    janedoe@gmail.com
                  </p>
                  <p>
                    <span>
                      <ion-icon name="call"></ion-icon>
                    </span>
                    <span className="mr-1 ml-2">(385)</span>123-1234
                  </p>
                  <p>
                    <span className="mr-2">
                      <ion-icon name="location"></ion-icon>
                    </span>
                    Salt Lake City, Utah
                  </p>
                </div>

                <h3 className="bold text-lg text-teal-400">Education</h3>
                <div className="m-1">
                  <p className="bold">University of Utah</p>
                  <p className="text-sm">Full Stack Coding Bootcamp</p>
                  <p className="text-sm">Jul 2022 - Jan 2023</p>
                </div>

                <h3 className="bold text-lg text-teal-400">Skills</h3>
                <ul className="m-1">
                  <li>skill</li>
                  <li>skill</li>
                  <li>skill</li>
                  <li>skill</li>
                </ul>
              </div>

              <div className="resumeExperience mx-4">
                <h3 className="bold text-xl">Experience</h3>
                {/* Make this responsive */}
                <div className="m-1 my-2">
                  <h4 className="bold">Software Developer</h4>
                  <h5 className="text-sm">Jan 2018 - Jan 2022</h5>
                  <h5 className="text-sm bold">Responsibilities</h5>
                  <ul className="text-sm list-disc ml-4">
                    <li>responsibility one goes here.</li>
                    <li>responsibility two goes here.</li>
                    <li>responsibility three goes here.</li>
                  </ul>
                </div>
                {/* end of template */}

                <div className="m-1 my-2">
                  <h4 className="bold">Software Developer</h4>
                  <h5 className="text-sm">Jan 2018 - Jan 2022</h5>
                  <h5 className="text-sm bold">Responsibilities</h5>
                  <ul className="text-sm list-disc ml-4">
                    <li>responsibility one goes here.</li>
                    <li>responsibility two goes here.</li>
                    <li>responsibility three goes here.</li>
                  </ul>
                </div>

                <div className="m-1 my-2">
                  <h4 className="bold">Software Developer</h4>
                  <h5 className="text-sm">Jan 2018 - Jan 2022</h5>
                  <h5 className="text-sm bold">Responsibilities</h5>
                  <ul className="text-sm list-disc ml-4">
                    <li>responsibility one goes here.</li>
                    <li>responsibility two goes here.</li>
                    <li>responsibility three goes here.</li>
                  </ul>
                </div>

                <div className="m-1 my-2">
                  <h4 className="bold">Software Developer</h4>
                  <h5 className="text-sm">Jan 2018 - Jan 2022</h5>
                  <h5 className="text-sm bold">Responsibilities</h5>
                  <ul className="text-sm list-disc ml-4">
                    <li>responsibility one goes here.</li>
                    <li>responsibility two goes here.</li>
                    <li>responsibility three goes here.</li>
                  </ul>
                </div>

                <div className="m-1 my-2">
                  <h4 className="bold">Software Developer</h4>
                  <h5 className="text-sm">Jan 2018 - Jan 2022</h5>
                  <h5 className="text-sm bold">Responsibilities</h5>
                  <ul className="text-sm list-disc ml-4">
                    <li>responsibility one goes here.</li>
                    <li>responsibility two goes here.</li>
                    <li>responsibility three goes here.</li>
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
