import React, { useState } from "react";
import { Document, Packer, Paragraph, HeadingLevel } from "docx";
import { saveAs } from "file-saver";
import { useMutation } from "@apollo/client";
import { UPDATE_RESUME } from "../utils/mutations";

export default function Resume() {

  //all variables from the resume form
  const [userResumeForm, setUserResumeForm] = useState({
    summary: "",
    fullName: "",
    phone:"",
    email: "",
    location: "",
    skills: "",
    education: "",
    educationLength:"",
    educationType:"",
    prevJ1Title: "",
    prevJ1Company: "",
    prevJ1Length: "",
    prevJ1Responsibilities: "",
    prevJ2Title: "",
    prevJ2Company: "",
    prevJ2Length: "",
    prevJ2Responsibilities: "",
    prevJ3Title: "",
    prevJ3Company: "",
    prevJ3Length: "",
    prevJ3Responsibilities: "",
  });

  const [updateResume, { error, data }] = useMutation(UPDATE_RESUME);

  //handles input changes and sets the state accordingly
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserResumeForm({ ...userResumeForm, [name]: value });
  };

  //form submit downloads resume and calls to mutations.
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const prevJ1Array = userResumeForm.prevJ1Responsibilities.split(";");
    const prevJ2Array = userResumeForm.prevJ2Responsibilities.split(";");
    const prevJ3Array = userResumeForm.prevJ3Responsibilities.split(";");

    //renders the resume in a DOCS file.
    let doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: userResumeForm.fullName,
              heading: HeadingLevel.TITLE,
            }),
            new Paragraph({
              text: `${userResumeForm.location}
                        ${userResumeForm.email}
                         `,
              heading: HeadingLevel.HEADING_6,
            }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `Coding Languages:`,
              heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
              text: userResumeForm.skills,
              heading: HeadingLevel.HEADING_3,
            }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `Education:`,
              heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
              text: userResumeForm.education,
              heading: HeadingLevel.HEADING_3,
            }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `${userResumeForm.prevJ1Title} ${userResumeForm.prevJ1Length}`,
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: userResumeForm.prevJ1Company,
              heading: HeadingLevel.HEADING_4,
            }),
            new Paragraph({ text: `${prevJ1Array[0]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ1Array[1]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ1Array[2]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ1Array[3]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ1Array[4]}`, bullet: { level: 0 } }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `${userResumeForm.prevJ2Title} ${userResumeForm.prevJ2Length}`,
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: userResumeForm.prevJ2Company,
              heading: HeadingLevel.HEADING_4,
            }),
            new Paragraph({ text: `${prevJ2Array[0]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ2Array[1]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ2Array[2]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ2Array[3]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ2Array[4]}`, bullet: { level: 0 } }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `${userResumeForm.prevJ3Title} ${userResumeForm.prevJ3Length}`,
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: userResumeForm.prevJ3Company,
              heading: HeadingLevel.HEADING_4,
            }),
            new Paragraph({ text: `${prevJ3Array[0]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ3Array[1]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ3Array[2]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ3Array[3]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ3Array[4]}`, bullet: { level: 0 } }),
          ],
        },
      ],
    });
    saveDocumentToFile(doc, `${userResumeForm.fullName} Resume.docx`);

    //calls to the updateResume Mutation which creates a resume and updates the user
    try {
      const { data } = await updateResume({
        
        variables: {
          fullName: userResumeForm.fullName,
          email: userResumeForm.email,
          phone: userResumeForm.phone,
          summary: userResumeForm.summary,
          location: userResumeForm.location,
          skills: userResumeForm.skills,
          education: userResumeForm.education,
          educationType: userResumeForm.educationType,
          educationLength: userResumeForm.educationLength,
          prevJ1Title: userResumeForm.prevJ1Title,
          prevJ1Company: userResumeForm.prevJ1Company,
          prevJ1Length: userResumeForm.prevJ1Length,
          prevJ1Responsibilities: userResumeForm.prevJ1Responsibilities,
          prevJ2Title: userResumeForm.prevJ2Title,
          prevJ2Company: userResumeForm.prevJ2Company,
          prevJ2Length: userResumeForm.prevJ2Length,
          prevJ2Responsibilities: userResumeForm.prevJ2Responsibilities,
          prevJ3Title: userResumeForm.prevJ3Title,
          prevJ3Company: userResumeForm.prevJ3Company,
          prevJ3Length: userResumeForm.prevJ3Length,
          prevJ3Responsibilities: userResumeForm.prevJ3Responsibilities,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  function saveDocumentToFile(doc, fileName) {
    // Create a mime type that will associate the new file with Microsoft Word
    const mimeType =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    // Create a Blob object from Packer containing the Document instance and the mimeType
    Packer.toBlob(doc).then((blob) => {
      const docblob = blob.slice(0, blob.size, mimeType);
      // Save the file using saveAs from the file-saver package
      saveAs(docblob, fileName);
    });
  }

  return (
    <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10">
      <h2 className="bg-gray-900 rounded-md text-white text-3xl p-4 text-center m-3 mb-10">
        ResumeBuilder!
      </h2>
      {/* max-w-3xl */}
      <form className="contactForm m-3 bg-gray-900 p-6 rounded-lg">
        <div className="grid grid-cols-4">
          {/* basic information input section */}
          <div className="m-2 xl:pl-12 lg:pl-0 lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-5 sm:col-start-1 sm:col-end-5 col-start-1 col-end-5">
            <h2 className="bold text-onehalfxl text-teal-400 mb-1">
              Basic Information
            </h2>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Full Name:</h3>
              <input
                value={userResumeForm.fullName}
                name="fullName"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="fullName"
                placeholder="Your Full Name"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Email:</h3>
              <input
                value={userResumeForm.email}
                name="email"
                type="email"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Phone:</h3>
              <input
                value={userResumeForm.phone}
                name="phone"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="phone"
                placeholder="801-916-5555"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Location:</h3>
              <input
                value={userResumeForm.location}
                name="location"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="location"
                placeholder="(West Valley, Utah)"
              ></input>
            </div>
            <h2 className="bold text-onehalfxl text-teal-400 mb-1 mt-5">
              Skills
            </h2>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Skills:</h3>
              <textarea
                value={userResumeForm.skills}
                name="skills"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 h-40 bg-gray-200"
                id="skils"
                placeholder="What are your skills? (HTML CSS JS)"
              ></textarea>
            </div>
            <h2 className="bold text-onehalfxl text-teal-400 mb-1 mt-5">
              Education
            </h2>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Education:</h3>
              <input
                value={userResumeForm.education}
                name="education"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="education"
                placeholder="What educational facility did you attend?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Education Type:</h3>
              <input
                value={userResumeForm.educationType}
                name="educationType"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="educationType"
                placeholder="Enter your degree or certificate"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Education Length:</h3>
              <input
                value={userResumeForm.educationLength}
                name="educationLength"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="educationLength"
                placeholder="How long did you attend?"
              ></input>
            </div>
            <h2 className="bold text-onehalfxl text-teal-400 mb-1 mt-5">
              About
            </h2>
            <div className="mb-3 mx-1 sm:mb-0 xs:mb-0 md:mb-0">
              <h3 className="bold text-md text-white">Professional Summary:</h3>
              <textarea
                value={userResumeForm.summary}
                name="summary"
                type="text"
                onChange={handleInputChange}
                className="education form-control textarea-education focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="summary"
                placeholder="Write a professional Summary About yourself"
              ></textarea>
            </div>
          </div>
          <br></br>

          {/* previous experience */}
          <div className="m-2 2xl:pl-20 xl:pl-16 lg:pl-6 lg:col-start-3 lg:col-end-5 md:col-start-1 md:col-end-5 sm:col-start-1 sm:col-end-5 col-start-1 col-end-5">
          <div>
            <h2 className="bold text-onehalfxl text-teal-400 mb-1 mt-1">
              Previous Experience
            </h2>
          {/* previous experience job 1 */}
            <div className="mb-3 mx-1">
              <h3 className="bold text-xl text-teal-100 mb-1">Job 1</h3>
              <h3 className="bold text-md text-white">Job Title:</h3>
              <input
                value={userResumeForm.prevJ1Title}
                name="prevJ1Title"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ1Title"
                placeholder="What is your previous job title?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Company:</h3>
              <input
                value={userResumeForm.prevJ1Company}
                name="prevJ1Company"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ1Company"
                placeholder="What was the company of your previous job?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Job Duration:</h3>
              <input
                value={userResumeForm.prevJ1Length}
                name="prevJ1Length"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ1Length"
                placeholder="How long did you work there? (August 2021 - July 2022)"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Responsibilities:</h3>
              <textarea
                value={userResumeForm.prevJ1Responsibilities}
                name="prevJ1Responsibilities"
                type="text"
                onChange={handleInputChange}
                className="form-control textarea-form focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ1Responsibilities"
                placeholder="Responsibility 1; Responsibility 2; Responsibility 3; Responsibility 4; Responsibility 5; Responsibility 6; Responsibility 7; Responsibility 8; Responsibility 9; Responsibility 10"
              ></textarea>
            </div>
          </div>

          <br></br>

          {/* previous experience job 2 */}
          <div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-xl text-teal-100 mb-1">Job 2</h3>
              <h3 className="bold text-md text-white">Job Title:</h3>
              <input
                value={userResumeForm.prevJ2Title}
                name="prevJ2Title"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ2Title"
                placeholder="What is your previous job title?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Company:</h3>
              <input
                value={userResumeForm.prevJ2Company}
                name="prevJ2Company"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ2Company"
                placeholder="What was the company of your previous job?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Job Duration:</h3>
              <input
                value={userResumeForm.prevJ2Length}
                name="prevJ2Length"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ2Length"
                placeholder="How long did you work there? (August 2021 - July 2022)"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Responsibilities:</h3>
              <textarea
                value={userResumeForm.prevJ2Responsibilities}
                name="prevJ2Responsibilities"
                type="text"
                onChange={handleInputChange}
                className="form-control textarea-form focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ2Responsibilities"
                placeholder="Responsibility 1; Responsibility 2; Responsibility 3; Responsibility 4; Responsibility 5; Responsibility 6; Responsibility 7; Responsibility 8; Responsibility 9; Responsibility 10"
              ></textarea>
            </div>
          </div>

          <br></br>

          {/* previous experience job 3 */}
          <div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-xl text-teal-100 mb-1">Job 3</h3>
              <h3 className="bold text-md text-white">Job Title:</h3>
              <input
                value={userResumeForm.prevJ3Title}
                name="prevJ3Title"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ3Title"
                placeholder="What is your previous job title?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Company:</h3>
              <input
                value={userResumeForm.prevJ3Company}
                name="prevJ3Company"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ3Company"
                placeholder="What was the company of your previous job?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Job Duration:</h3>
              <input
                value={userResumeForm.prevJ3Length}
                name="prevJ3Length"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ3Length"
                placeholder="How long did you work there? (August 2021 - July 2022)"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Responsibilities:</h3>
              <textarea
                value={userResumeForm.prevJ3Responsibilities}
                name="prevJ3Responsibilities"
                type="text"
                onChange={handleInputChange}
                className="form-control textarea-form focus:outline-teal-400 rounded-md p-2 bg-gray-200"
                id="prevJ3Responsibilities"
                placeholder="Responsibility 1; Responsibility 2; Responsibility 3; Responsibility 4; Responsibility 5; Responsibility 6; Responsibility 7; Responsibility 8; Responsibility 9; Responsibility 10"
              ></textarea>
            </div>
          </div>
        </div>

          </div>
          
        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-400 rounded-lg py-2 px-6 bold m-2"
            id="contactSubmit"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
