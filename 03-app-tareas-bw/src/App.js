import './App.css';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

function App() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1 className='text-center text-primary display-5'>
            Aplicacion de Tareas
            <hr />
          </h1>
        </div>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-8 col-sm-12'>
            <TaskForm />
          </div>
          <div className='col-xl-6 col-lg-6 col-md-4 col-sm-12'>
            <TaskList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
