import React from 'react'

export const Card = ({ note }) => {
  //console.log({ note });
  return (
    <>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className={ `card ${ ( note.important === true ) ? 'bg-danger' : 'bg-warning' } mt-3` }>
                <div className="card-body">
                    <h5 className="card-title">{ ( note.important === true ) ? 'Important' : 'Not Important'}</h5>
                    <h6 className="card-subtitle mb-2 text-white">{ note.date }</h6>
                    <p className="card-text">{ note.content }</p>
                </div>
            </div>
        </div>
    </>
  )
}
