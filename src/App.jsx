import { useState } from "react";



function App() {

  let counter=5;

  const addValue = () =>{
    counter+=1;
    console.log("value added", counter);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
