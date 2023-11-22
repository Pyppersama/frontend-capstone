import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Main from './Main';

function Homepage() {
  return (
    <>
    <Routes>
      <Route 
        path='*' 
        element=
          {
              <Main />
          }
      />
    </Routes>
    </>
  )
}

export default Homepage