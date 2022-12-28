import React, { useState } from "react";
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from "docx";
import { saveAs } from "file-saver";

export default function Resume() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [prevJ1Title, setPrevJ1Title] = useState("");
  const [prevJ1Company, setPrevJ1Company] = useState("");
  const [prevJ1Length, setPrevJ1Length] = useState("");
  const [prevJ1Responsibilities, setPrevJ1Responsibilities] = useState("");
  const [prevJ2Title, setPrevJ2Title] = useState("");
  const [prevJ2Company, setPrevJ2Company] = useState("");
  const [prevJ2Length, setPrevJ2Length] = useState("");
  const [prevJ2Responsibilities, setPrevJ2Responsibilities] = useState("");
  const [prevJ3Title, setPrevJ3Title] = useState("");
  const [prevJ3Company, setPrevJ3Company] = useState("");
  const [prevJ3Length, setPrevJ3Length] = useState("");
  const [prevJ3Responsibilities, setPrevJ3Responsibilities] = useState("");

  //handles input changes and sets the state accordingly
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "fullName") {
      setFullName(inputValue);
    } else if (inputType === "location") {
      setLocation(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "skills") {
      setSkills(inputValue);
    } else if (inputType === "education") {
      setEducation(inputValue);
    } else if (inputType === "prevJ1Title") {
      setPrevJ1Title(inputValue);
    } else if (inputType === "prevJ1Company") {
      setPrevJ1Company(inputValue);
    } else if (inputType === "prevJ1Length") {
      setPrevJ1Length(inputValue);
    } else if (inputType === "prevJ1Responsibilities") {
      setPrevJ1Responsibilities(inputValue);
    } else if (inputType === "prevJ2Title") {
      setPrevJ2Title(inputValue);
    } else if (inputType === "prevJ2Company") {
      setPrevJ2Company(inputValue);
    } else if (inputType === "prevJ2Length") {
      setPrevJ2Length(inputValue);
    } else if (inputType === "prevJ2Responsibilities") {
      setPrevJ2Responsibilities(inputValue);
    } else if (inputType === "prevJ3Title") {
      setPrevJ3Title(inputValue);
    } else if (inputType === "prevJ3Company") {
      setPrevJ3Company(inputValue);
    } else if (inputType === "prevJ3Length") {
      setPrevJ3Length(inputValue);
    } else {
      setPrevJ3Responsibilities(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const prevJ1Array = prevJ1Responsibilities.split(";");
    const prevJ2Array = prevJ2Responsibilities.split(";");
    const prevJ3Array = prevJ3Responsibilities.split(";");

    let doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({ text: fullName, heading: HeadingLevel.TITLE }),
            new Paragraph({
              text: `${location}
                        ${email}
                         `,
              heading: HeadingLevel.HEADING_6,
            }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `Coding Languages:`,
              heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({ text: skills, heading: HeadingLevel.HEADING_3 }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `Education:`,
              heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({ text: education, heading: HeadingLevel.HEADING_3 }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `${prevJ1Title} ${prevJ1Length}`,
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: prevJ1Company,
              heading: HeadingLevel.HEADING_4,
            }),
            new Paragraph({ text: `${prevJ1Array[0]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ1Array[1]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ1Array[2]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ1Array[3]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ1Array[4]}`, bullet: { level: 0 } }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `${prevJ2Title} ${prevJ2Length}`,
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: prevJ2Company,
              heading: HeadingLevel.HEADING_4,
            }),
            new Paragraph({ text: `${prevJ2Array[0]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ2Array[1]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ2Array[2]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ2Array[3]}`, bullet: { level: 0 } }),
            new Paragraph({ text: `${prevJ2Array[4]}`, bullet: { level: 0 } }),
            new Paragraph({ text: ``, heading: HeadingLevel.HEADING_1 }),
            new Paragraph({
              text: `${prevJ3Title} ${prevJ3Length}`,
              heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: prevJ3Company,
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
    saveDocumentToFile(doc, `${fullName} Resume.docx`);
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
      <h2 className="bg-gray-900 rounded-md text-white text-3xl p-4 text-center m-3">
        ResumeBuilder!
      </h2>
      {/* max-w-3xl */}
      <form className="contactForm m-3 bg-gray-800 p-6 rounded-lg">
        <div className="grid grid-cols-4">
          {/* basic information input section */}
          <div className="m-2 xl:pl-12 lg:pl-0 lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-5 sm:col-start-1 sm:col-end-5 col-start-1 col-end-5">
            <h2 className="bold text-onehalfxl text-teal-400 mb-1">
              Basic Information
            </h2>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Full Name:</h3>
              <input
                value={fullName}
                name="fullName"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="fullName"
                placeholder="Your Full Name"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Email:</h3>
              <input
                value={email}
                name="email"
                type="email"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Location:</h3>
              <input
                value={location}
                name="location"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="location"
                placeholder="(West Valley, Utah)"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Skills:</h3>
              <input
                value={skills}
                name="skills"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="skils"
                placeholder="What are your skills? (HTML CSS JS)"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Education:</h3>
              <textarea
                value={education}
                name="education"
                type="text"
                onChange={handleInputChange}
                className="education form-control textarea-education focus:outline-teal-400  rounded-md p-1 bg-gray-200"
                id="education"
                placeholder="What education do you have?"
              ></textarea>
            </div>
          </div>
          <br></br>

          {/* previous experience job 1 */}
          <div className="m-2 2xl:pl-20 xl:pl-16 lg:pl-6 lg:col-start-3 lg:col-end-5 md:col-start-1 md:col-end-5 sm:col-start-1 sm:col-end-5 col-start-1 col-end-5">
            <h2 className="bold text-onehalfxl text-teal-400 mb-1 mt-1">
              Previous Experience
            </h2>
            <div className="mb-3 mx-1">
              <h3 className="bold text-xl text-white mb-1">Job 1</h3>
              <h3 className="bold text-md text-white">Job Title:</h3>
              <input
                value={prevJ1Title}
                name="prevJ1Title"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ1Title"
                placeholder="What is your previous job title?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Company:</h3>
              <input
                value={prevJ1Company}
                name="prevJ1Company"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ1Company"
                placeholder="What was the company of your previous job?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Job Duration:</h3>
              <input
                value={prevJ1Length}
                name="prevJ1Length"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ1Length"
                placeholder="How long did you work there? (August 2021 - July 2022)"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Responsibilities:</h3>
              <textarea
                value={prevJ1Responsibilities}
                name="prevJ1Responsibilities"
                type="text"
                onChange={handleInputChange}
                className="form-control textarea-form focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ1Responsibilities"
                placeholder="Responsibility 1; Responsibility 2; Responsibility 3; Responsibility 4; Responsibility 5; Responsibility 6; Responsibility 7; Responsibility 8; Responsibility 9; Responsibility 10"
              ></textarea>
            </div>
          </div>

          <br></br>

          {/* previous experience job 2 */}
          <div className="m-2 xl:pl-12 lg:pl-0 lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-5 sm:col-start-1 sm:col-end-5 col-start-1 col-end-5">
            <div className="mb-3 mx-1">
              <h3 className="bold text-xl text-white mb-1">Job 2</h3>
              <h3 className="bold text-md text-white">Job Title:</h3>
              <input
                value={prevJ2Title}
                name="prevJ2Title"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ2Title"
                placeholder="What is your previous job title?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Company:</h3>
              <input
                value={prevJ2Company}
                name="prevJ2Company"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ2Company"
                placeholder="What was the company of your previous job?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Job Duration:</h3>
              <input
                value={prevJ2Length}
                name="prevJ2Length"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ2Length"
                placeholder="How long did you work there? (August 2021 - July 2022)"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Responsibilities:</h3>
              <textarea
                value={prevJ2Responsibilities}
                name="prevJ2Responsibilities"
                type="text"
                onChange={handleInputChange}
                className="form-control textarea-form focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ2Responsibilities"
                placeholder="Responsibility 1; Responsibility 2; Responsibility 3; Responsibility 4; Responsibility 5; Responsibility 6; Responsibility 7; Responsibility 8; Responsibility 9; Responsibility 10"
              ></textarea>
            </div>
          </div>

          <br></br>

          {/* previous experience job 3 */}
          <div className="m-2 2xl:pl-20 xl:pl-16 lg:pl-6 lg:col-start-3 lg:col-end-5 md:col-start-1 md:col-end-5 sm:col-start-1 sm:col-end-5 col-start-1 col-end-5">
            <div className="mb-3 mx-1">
              <h3 className="bold text-xl text-white mb-1">Job 3</h3>
              <h3 className="bold text-md text-white">Job Title:</h3>
              <input
                value={prevJ3Title}
                name="prevJ3Title"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ3Title"
                placeholder="What is your previous job title?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Company:</h3>
              <input
                value={prevJ3Company}
                name="prevJ3Company"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ3Company"
                placeholder="What was the company of your previous job?"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Job Duration:</h3>
              <input
                value={prevJ3Length}
                name="prevJ3Length"
                type="text"
                onChange={handleInputChange}
                className="form-control focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ3Length"
                placeholder="How long did you work there? (August 2021 - July 2022)"
              ></input>
            </div>
            <div className="mb-3 mx-1">
              <h3 className="bold text-md text-white">Responsibilities:</h3>
              <textarea
                value={prevJ3Responsibilities}
                name="prevJ3Responsibilities"
                type="text"
                onChange={handleInputChange}
                className="form-control textarea-form focus:outline-teal-400 rounded-md p-1 bg-gray-200"
                id="prevJ3Responsibilities"
                placeholder="Responsibility 1; Responsibility 2; Responsibility 3; Responsibility 4; Responsibility 5; Responsibility 6; Responsibility 7; Responsibility 8; Responsibility 9; Responsibility 10"
              ></textarea>
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
