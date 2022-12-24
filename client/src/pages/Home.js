import React, { useState } from "react";
import { useQuery } from "@apollo/client";

// posting to the page, but it is not saving on refresh, need database


export default function Home() {
  // Comments section use state to show and hide comments
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Get current Date
  const current = new Date();
  const date = `${current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  // Logic to show the modal when creating a post
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Post button -- when user creates a clicks submit, will appear on feed
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add new post to the posts array
    setPosts([...posts, formData]);
    // Clear form data
    setFormData({});
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <header className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5">
        <div className="flex flex-col justify-center items-center m-10 bg-gray-900 p-6 rounded-lg">
          <h3 className="bold text-2xl mb-2 text-white">Create a Post</h3>
          <div>
            <button
              className="createPost px-6 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 "
              placeholder="Start your post here"
              onClick={toggleModal}
            >Start</button>
            {isOpen && (
              <div
                className="modal-overlay"
                onClick={toggleModal}
                role="button"
                tabIndex={0}
              >
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <form onSubmit={handleSubmit}>
                    <h3 className="heading text-center font-bold text-2xl m-5 text-gray-800">
                      New Post
                    </h3>
                    <div className="bg-gray-800 editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-lg">
                      <input
                        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                        spellcheck="false"
                        placeholder="Title"
                        type="text"
                        name="title"
                        onChange={handleChange}
                      />
                      <textarea
                        className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                        spellcheck="false"
                        placeholder="Describe everything about this post here"
                        name="content"
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                    <div className="buttons mx-2 my-3 col-start-5 col-span-1 mr-10">
                      <button
                        className="btn border border-teal-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-teal-600 rounded-lg m-1 hover:bg-teal-500"
                        type="submit"
                      >
                        Post
                      </button>
                      <button
                        onClick={toggleModal}
                        className="btn border border-gray-800 p-1 px-4 font-semibold cursor-pointer bg-gray-900 text-white ml-auto rounded-lg m-1 mr-4 hover:bg-gray-800"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Feed section starts here */}
      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10 grid grid-cols-8 grid-rows-6 gap-3 rounded-md text-white p-4 gridFeed">
        <div className="bg-gray-900 rounded-lg p-4 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-7 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-9 sm:row-start-1 sm:row-end-5 col-start-1 col-end-9 row-start-1 row-end-5">


          {/* Start of feed post template - example, not final one! */}
          <section className="flex justify-center mt-5">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-100 shadow-lg">
              <div className="p-6 flex flex-col justify-start">
                <div className="flex justify-between mb-3">
                  <div className="">
                    <h5 className="text-gray-900 text-xl font-medium mb-1 bold">
                      Jose Jenkins
                    </h5>
                    <h6 className="text-gray-500 text-sm font-medium mb-1">
                      Secret FBI Agent
                    </h6>
                  </div>
                  {/* Make a responsive date change !!! */}
                  <div className="mr-2">
                    <h6 className="text-gray-500 text-xs font-medium">
                      {date}
                    </h6>
                  </div>
                </div>

                <div className="text-gray-700 text-base mb-4">
                  <h5 className="text-gray-900 text-md bold">
                    Title of Post Here
                  </h5>
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>

                <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                {/* Make this responsive with current likes and comments!!! */}
                <div className="flex flex-row justify-between mx-5">
                  <p className="text-black text-xs">93 Likes</p>
                  {/* create comment section how to reference that post?? */}
                  <button
                    onClick={() =>
                      setIsSectionVisible((currentState) => !currentState)
                    }
                    className="text-black hover:underline text-xs"
                  >
                    63 Comments
                  </button>
                </div>

                <div>
                  {/* hidden comments visible */}
                  {isSectionVisible && (
                    <div>
                      <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                      <div className="bg-gray-500 rounded-lg p-3">
                        <div className="flex justify-between">
                          <h3 className="text-white mx-2 text-lg">Comments</h3>
                          <button
                            onClick={() =>
                              setIsSectionVisible(
                                (currentState) => !currentState
                              )
                            }
                            className="bg-teal-500 hover:bg-teal-400 text-white xbutton  rounded-full mx-1 mr-1 mb-1 text-xs"
                          >
                            <ion-icon name="close"></ion-icon>
                          </button>
                        </div>

                        {/* Comments section */}
                        <section>
                          {/* Start of a comment template */}
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
                          {/* End of comment template */}

                          {/* Start of a comment template */}
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
                          {/* End of comment template */}

                          {/* Start of a comment template */}
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
                          {/* End of comment template */}
                        </section>

                        <div className="flex justify-end">
                          <button
                            onClick={() =>
                              setIsSectionVisible(
                                (currentState) => !currentState
                              )
                            }
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
                      <ion-icon name="thumbs-up"></ion-icon>
                    </button>
                    <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-3 rounded-full mx-1">
                      <ion-icon name="thumbs-down"></ion-icon>
                    </button>

                    <button className="bg-red-400 hover:bg-red-300 text-white py-2 px-3 rounded-full mx-1">
                      <ion-icon name="heart"></ion-icon>
                    </button>

                    <button className="bg-yellow-400 hover:bg-yellow-300 text-white py-2 px-3 rounded-full mx-1">
                      <ion-icon name="star"></ion-icon>
                    </button>
                  </div>

                  <div className="flex flex-col">
                    <div>
                      <textarea
                        className="resizable-input placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 text-slate-600 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-teal-500 focus:ring-1 sm:text-sm"
                        placeholder="Add a comment"
                        type="text"
                        name="comment"
                      />
                    </div>

                    <div className="mr-1 mt-2 flex justify-end">
                      <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-1 px-4 rounded-lg text-sm ml-1">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End of feed post template */}


          {/* THIS IS THE TEMPLATE TO USE when mapping through posts -- updated styling to fix bugs */}
          {posts.map((post) => (
          <section className="flex justify-center mt-5">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-100 shadow-lg w-full">
              <div className="p-6 flex flex-col justify-start w-full">
                <div className="flex justify-between mb-3">
                  <div>
                    <h5 className="text-gray-900 text-xl font-medium mb-1 bold">
                      Jose Jenkins
                    </h5>
                    <h6 className="text-gray-500 text-sm font-medium mb-1">
                      Secret FBI Agent
                    </h6>
                  </div>
                  {/* Make a responsive date change !!! */}
                  <div className="mr-2">
                    <h6 className="text-gray-500 text-xs font-medium">
                      {date}
                    </h6>
                  </div>
                </div>

                <div className="text-gray-700 text-base mb-4">
                  <h5 className="text-gray-900 text-md bold">
                    {post.title}
                  </h5>
                  <p>
                    {post.content}
                  </p>
                </div>

                <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                {/* Make this responsive with current likes and comments!!! */}
                <div className="flex flex-row justify-between mx-5">
                  <p className="text-black text-xs">93 Likes</p>
                  {/* create comment section how to reference that post?? */}
                  <button
                    onClick={() =>
                      setIsSectionVisible((currentState) => !currentState)
                    }
                    className="text-black hover:underline text-xs"
                  >
                    63 Comments
                  </button>
                </div>

                <div>
                  {/* hidden comments visible */}
                  {isSectionVisible && (
                    <div>
                      <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                      <div className="bg-gray-500 rounded-lg p-3">
                        <div className="flex justify-between">
                          <h3 className="text-white mx-2 text-lg">Comments</h3>
                          <button
                            onClick={() =>
                              setIsSectionVisible(
                                (currentState) => !currentState
                              )
                            }
                            className="bg-teal-500 hover:bg-teal-400 text-white xbutton  rounded-full mx-1 mr-1 mb-1 text-xs"
                          >
                            <ion-icon name="close"></ion-icon>
                          </button>
                        </div>

                        {/* Comments section */}
                        <section>
                          {/* Start of a comment template */}
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
                          {/* End of comment template */}

                          {/* Start of a comment template */}
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
                          {/* End of comment template */}

                          {/* Start of a comment template */}
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
                          {/* End of comment template */}
                        </section>

                        <div className="flex justify-end">
                          <button
                            onClick={() =>
                              setIsSectionVisible(
                                (currentState) => !currentState
                              )
                            }
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
                      <ion-icon name="thumbs-up"></ion-icon>
                    </button>
                    <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-3 rounded-full mx-1">
                      <ion-icon name="thumbs-down"></ion-icon>
                    </button>

                    <button className="bg-red-400 hover:bg-red-300 text-white py-2 px-3 rounded-full mx-1">
                      <ion-icon name="heart"></ion-icon>
                    </button>

                    <button className="bg-yellow-400 hover:bg-yellow-300 text-white py-2 px-3 rounded-full mx-1">
                      <ion-icon name="star"></ion-icon>
                    </button>
                  </div>

                  <div className="flex flex-col">
                    <div>
                      <textarea
                        className="resizable-input placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 text-slate-600 shadow-sm focus:outline-none focus:border-teal-500 focus:ring-teal-500 focus:ring-1 sm:text-sm"
                        placeholder="Add a comment"
                        type="text"
                        name="comment"
                      />
                    </div>

                    <div className="mr-1 mt-2 flex justify-end">
                      <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-1 px-4 rounded-lg text-sm ml-1">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          ))}
          {/* END OF TESTING HERE !!!  */}


        </div>

        <div className="bg-gray-900 rounded-lg p-4 lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-7 md:col-start-7 md:col-end-9 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-9 sm:row-start-5 sm:row-end-7 col-start-1 col-end-9 row-start-5 row-end-7 flex flex-col items-center">
          <h1 className="profileHeaders m-2">Connections</h1>

          {/* start of connection card template -- will map through this? */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Sally Sue
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
          {/* end of connection card template */}

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Keke Christen
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Jonny Flicker
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Hannah Parker
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
