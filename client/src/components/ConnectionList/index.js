import React from 'react';
import Connection from '../Connection';
import { useQuery } from '@apollo/client';
import { QUERY_CONNECTIONS } from '../../utils/queries';

export default function ConnectionList({ userID }) {
  // gets logged in user information and sets to userData
  const {loading, data} = useQuery(QUERY_CONNECTIONS, {
    variables: { id: userID },
  });
  if (loading) {return <h3>loading</h3>};

  const connections = data?.myUser?.connections || [];
  if (!connections.length) {return <h3>No Connections Yet</h3>}
  return connections.map((connection) => <Connection key={connection.id} connection={connection}/>);
};