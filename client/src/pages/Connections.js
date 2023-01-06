import react from "react";
import Auth from '../utils/auth';
import ConnectionList from '../components/ConnectionList';

export default function Connections() {

  var userID = Auth.getProfile().data._id;
  return (
    <>
      <h1 className="text-center text-2xl bold my-10 text-teal-600">
        Connections
      </h1>
      <ConnectionList userID={userID}/>
    </>
  );
}
