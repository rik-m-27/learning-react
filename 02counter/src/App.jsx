import { useState } from 'react'

import './App.css'

function App() {

  // let counter = 0;
  const [counter, setCounter] = useState(0); //initalizing counter with 0, setCounter is a method

  /**set value*/
  const addValue = () =>{
    // counter++;
    // console.log(counter);
    /**This is concept of batching. 
     * react doesn't things immediately when you actually perform an action or state, 
     * it actually bundles everything together.*/
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    /**if we want to call each and everyone, 
     * than we have define our own call back method for setCounter */
    setCounter((prevCounter) => {return (prevCounter+1);});
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  /**remove value*/
  const removeValue = () =>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Learner: Rik</p>
    </>
  )
}

export default App
