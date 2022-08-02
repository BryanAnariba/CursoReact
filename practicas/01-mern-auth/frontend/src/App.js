import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages & Components
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={ <Home /> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
