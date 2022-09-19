import { useState } from 'react';


function App() {

  let [result, setResult] = useState(0);


  function add(){
      result++;
      setResult(result);
  }

  function subtract(){
    result--;
    setResult(result);
    
  }
  return (
    <div>
      <button onClick={add} type="button" className="btn btn-success px-4 py-2">Add</button>
      <span className="fw-bold fs-5 px-3"> {result} </span>
      <button onClick={subtract} type="button" className="btn btn-danger px-4 py-2">Remove</button>
    </div>
  )
}

export default App;
