import React from 'react'
import { useQuery } from "@apollo/client";
import Connection from '../Connection';
import { QUERY_CONNECTIONS } from '../../utils/queries';
import Auth from '../../utils/auth';

export default function ConnectionList() {
  //gets logged in user information and sets to userData
  const userID = Auth.getProfile().data._id
  const {loading, data} = useQuery(QUERY_CONNECTIONS, { variables: { id: userID } });
  if (loading) {return <h3>Loading...</h3>};

  const connections = data?.myUser.connections || [];
  if (!connections.length) {return <h3>No Connections Yet</h3>};

  return connections.map((connection) => <Connection key={connections._id} connection={connection} />)
}