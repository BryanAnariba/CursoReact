import { useEffect, useState } from 'react';

import './App.css';
import { Card } from './components/Card';
import { Loading } from './components/Loading';
import { getNotes, save } from './services/notes/Notes.service';


function App() {
  const [ notes, setNotes] = useState( [] );
  const [ newNote, setNewNote ] = useState( '' );

  useEffect(() => {
    getNotes()
    .then(( data ) => {
      setNotes( data );
    })
    .catch(( err ) => {
      console.error( err );
    });
  }, []);
  
  const handleInputChange = ( event ) => {
    setNewNote( event.target.value );
  }

  const saveNote = ( event ) => {
    event.preventDefault();
    const addNote = {
      userId: 1,
      title: newNote,
      body: newNote
    };
    console.log( { addNote } );
    save( addNote )
    .then(( data ) => {
      setNotes( (prevNotes) => [ data, ...prevNotes ] );
    })
    .catch(( err )  => {
      console.error( err );
    });
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
                <button type="submit" className="btn btn-primary">Save Note</button>
              </form>
            </div>
        </div>
        {
          <div  className='row mt-5'>
          {
            ( typeof notes === 'undefined' || notes.length === 0 || notes === null )
            ?
              <Loading message={ 'Loading......' }/>
            :
              notes
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
