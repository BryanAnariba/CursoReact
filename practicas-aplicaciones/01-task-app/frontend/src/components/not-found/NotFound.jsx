import React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='row mx-auto'>
      <h2 className='display-4 text-danger text-center'>
        Error-404: Page Not Found
      </h2>
      <NavLink to="/" className='btn btn-outline-info'>Go to Home</NavLink>
    </div>
  )
}

