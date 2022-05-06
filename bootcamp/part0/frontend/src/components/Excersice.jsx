import React, { useState } from 'react';
import data from '../data/data.json';
export const Excersice = () => {
  const [ courses, setCourse ] = useState( data ) ;
  return (
    <>
      <h1>Courses</h1>
      {
        courses.map( course =>  ( // ESTO SE PUEDE PASAR A UNA CARD
          <div key={ course.id }>
            <h2>{ course.course }</h2>
            <p>Content: <small>{ course.chapter }</small></p>
          </div>
        ))
      }
    </>
  )
}
