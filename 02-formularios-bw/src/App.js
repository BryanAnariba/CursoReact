//import FormNoControlado from './components/FormNoControlado';
import './App.css';
import FormControlado from './components/FormControlado';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <h1 className='display-4 text-center text-primary'>
        Formularios en React
      </h1>
      {/* <hr/> */}
      {/* <FormNoControlado /> */}
      <hr/>
      <FormControlado />
    </>
  );
}

export default App;
