import './App.css';
// import { Counter } from './components/Counter/Counter';
import { CounterLeftRight } from './components/CounterLeftRight/CounterLeftRight';
function App() {
  return (
    <>
      {/* <Counter initialState={ 10 }/> */}
      <CounterLeftRight initState = { { left: 0, right: 0 } }/>
    </>
  );
}

export default App;
