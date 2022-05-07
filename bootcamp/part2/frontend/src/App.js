import { useState } from 'react';

import './App.css';
import { Card } from './components/Card';


function App( { data = [] }) {
  const [ notes, setNotes] = useState( data );
  const [ newNote, setNewNote ] = useState( '' );
  const [ filterNotes, setFilterNotes ] = useState( false );
  
  const handleInputChange = ( event ) => {
    setNewNote( event.target.value );
  }

  const saveNote = ( event ) => {
    event.preventDefault();
    const addNote = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log( { addNote } )
    setNotes( [ ...notes, addNote ] );
    setNewNote( '' );
  }

  const handleFilterNote = () => {
    setFilterNotes( !filterNotes );
  }

  return (
    <>
      <h1 className='display-3 text-center'>Notes</h1>
      <div  className='container mt-5'>
        <div  className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 m-auto'>
              <form onSubmit={ saveNote }>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Write a note content: </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="content" 
                    name="content" 
                    aria-describedby="note content" 
                    onChange={ handleInputChange }
                    value={ newNote }
                  />
                </div>
                <button  
                  type="button" 
                  className="btn btn-info m-2"
                  onClick={ handleFilterNote }
                  >{ ( filterNotes === true ) ? 'Show All Notes' : 'Show Important Notes' }</button>
                <button type="submit" className="btn btn-primary">Save Note</button>
              </form>
            </div>
        </div>
        {
          <div  className='row mt-5'>
          {
            ( typeof notes === 'undefined' || notes.length === 0 || notes === null )
            ?
              <strong>Notes Not Found........</strong> 
            :
              notes
              .filter( note => {
                if ( note.important === filterNotes ) {
                  return note;
                }
                return note.important === true;
              })
              .map( note => (
                  <Card note={ note } key={ note.id }/>
                ))
          }
          </div>
        }
      </div>
    </>
  );
}

export default App;
