/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const {localStorageData}=useAuthContext();

  return localStorageData?.token ? children : <Navigate to="/signin"/>
}
