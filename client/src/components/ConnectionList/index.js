import React from 'react';
import Connection from '../Connection';
import { useCurrentUser } from '../../utils/UserContext';

export default function ConnectionList() {
  const { currentUser } = useCurrentUser();
  
  return (
    <Connection />
  )
};