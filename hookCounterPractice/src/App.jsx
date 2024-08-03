import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);

  function addValue(){
    counter++
    setCounter(counter);
  }

  function removeValue(){
    counter--;
    setCounter(counter); 
  }
  return (
    <>
      <h1>Counter using hooks</h1>
      <button
      onClick={addValue}
      >Add to counter {counter}</button>

      <button
      onClick={removeValue}>remove from counter {counter}</button>      
    </>
  )
}

export default App
