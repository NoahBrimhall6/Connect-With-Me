import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_USER, LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth';

export default function SignUp() {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', firstName: '', lastName: '' });

  // set state for form validation
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // When user submits signup form
  const [addUser, { error }] = useMutation(ADD_USER);
  const [login, { loginError }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: {
          username: userFormData.username,
          email: userFormData.email,
          password: userFormData.password,
          firstName: userFormData.firstName,
          lastName: userFormData.lastName
        }
      });

      try {
        const { data } = await login({
          variables: { email: userFormData.email, password: userFormData.password }
        })
        Auth.login(data.login.token)
      } catch (err) { console.error(err) };
    } catch (err) { console.error(err) };

    setUserFormData({
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    });
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Sign up for an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">First Name</label>
                <input
                  value={userFormData.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleInputChange}
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John"
                  required="" />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">Last Name</label>
                <input
                  value={userFormData.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleInputChange}
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Hunter"
                  required="" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input
                  value={userFormData.email}
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleInputChange}
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@email.com"
                  required="" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Username</label>
                <input
                  value={userFormData.username}
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleInputChange}
                  className="bordersm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="jobHunter1"
                  required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                <input
                  value={userFormData.password}
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="bordersm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required="" />
              </div>
              <button
                type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-500 hover:bg-teal-600 focus:ring-teal-600"
              >Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};