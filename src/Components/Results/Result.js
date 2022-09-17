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
      <button onClick={add}>Add</button>
      <span> {result} </span>
      <button onClick={subtract}>Remove</button>
    </div>
  )
}

export default App;
