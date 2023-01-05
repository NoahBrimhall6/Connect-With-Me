import React from 'react';
import Img from "../../assets/images/blank-profile-pic.webp"
import { useParams } from 'react-router-dom';
import {useMutation, useQuery} from '@apollo/client'
import Auth from '../../utils/auth';

import { ADD_CONNECTION } from '../../utils/mutations'
import { QUERY_MYUSER } from '../../utils/queries'








export default function ProfileHeader ({userData}) {
  const [_, updateState] = React.useState();
  const forceUpdate = () => updateState({})
  const [addConnection] = useMutation(ADD_CONNECTION)
  const connection = async (connectionID) => {
    try {
      const { data } = await addConnection({
        variables: { id: userID, connections: connectionID }
      })
      forceUpdate();
      window.location.assign('/');
    } catch (err) { console.error(err) };
  }

    const userParamID  = useParams();
    const userID = Auth.getProfile().data._id;

    console.log(userParamID.id, userID)

    const {loading, data} = useQuery(QUERY_MYUSER, {
      variables: { id: userID },
    })

    if (loading) {
      return "...loading"
    }

    console.log (data.myUser.connections)
    const myUserConnections = data?.myUser?.connections
    console.log (myUserConnections)


    return (
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
              <h1 className="text-center text-lg bold">{`${userData.firstName} ${userData.lastName}`}</h1>
              <h3 className="text-white text-center">{userData.resume ? userData.resume.prevJ1Title : " "}</h3>
              { userParamID.id === userID ? "" : 
              (myUserConnections.some((element) => element._id === userParamID.id)?
              <div className="flex mt-4 space-x-3 md:mt-6 justify-center"><button onClick={() => connection(userParamID)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700">
                  Remove Connection</button>
              </div>: 
              <div className="flex mt-4 space-x-3 md:mt-6 justify-center"><button onClick={() => connection(userParamID)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700">
                  Add Connection</button>
              </div>) }
            </div>
          </div>

          <div className="lg:col-start-1 lg:col-end-7 lg:row-start-2 lg:row-end-3 mt-3 bg-white rounded-md p-4 md:col-start-1 md:-col-end-7 sm:col-start-1 sm:col-end-7 col-start-1 col-end-7">
            <div className="flex justify-center relative">
              <h3 className="text-black profileHeaders cols-start-3 col-end-6">About</h3>              
            </div>

            <p className="mx-10 my-5 text-black">
            {userData.resume ? userData.resume.summary : " "}
            </p>
          </div>
        </header>
      </div>
    )
}