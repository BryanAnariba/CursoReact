import React from 'react'

export const Card = ({ note }) => {
  //console.log({ note });
  return (
    <>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className={ `card bg-success } mt-3` }>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-white">{ note.title }</h6>
                    <p className="card-text">{ note.body }</p>
                </div>
            </div>
        </div>
    </>
  )
}
