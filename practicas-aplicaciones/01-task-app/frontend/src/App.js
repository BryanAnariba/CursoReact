import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Components
import { TaskTable } from './components/table/TaskTable';
import { Navbar } from './components/navbar/Navbar';
import { Contact } from './components/contact/Contact';
import { NotFound } from './components/not-found/NotFound';
import { TaskForm } from './components/table/TaskForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container mt-5'>
          <Routes>
            <Route path='/' element={ <TaskTable /> }/>
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/create' element={ <TaskForm /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
