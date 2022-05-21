import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { DashBoard } from './pages/DashBoard';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={ <DashBoard /> }/>
            <Route path='/login' element={ <Login /> } />
            <Route  path='/register' element={ <Register /> } />
            <Route  path='*' element={ <NotFound /> } />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
