import { useState } from "react" // this is Hook library



function App() {

    let [val, setCounter] = useState(5); // This 5 is default value
    // val and setCounter is a variable name

  // let counter=5;

  const addValue = () =>{
    // counter+=1;
    if(val<20)
    {
      val=val+1;
      setCounter(val);
    }
    console.log("value added", val);
  }
  function RemoveVal(){
    val=val-1;
    setCounter(val);
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter: {val}</h2>

      <button onClick={addValue}>Add value {val}</button>
      <br />
      <button onClick={RemoveVal}>Remove value {val}</button>
    </>
  )
}

export default App
