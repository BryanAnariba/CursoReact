import React from 'react'

export const Loading = ({ message }) => {
  return (
    <div className="alert alert-primary" role="alert">
        { message }
    </div>
  )
}
