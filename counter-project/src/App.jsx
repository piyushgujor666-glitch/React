import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);

    if(counter >= 20) {
      setCounter(0);
    }
  }

  const subtractValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);

    if(counter <= 0) {
      setCounter(0);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px'
        }}
      >

        <button
          style={{
            backgroundColor: 'lightblue',
            border: '1px solid #ccc',
            padding: '10px 20px',
            margin: '5px',
            width: '120px'
          }}
          onClick={addValue}
        >
          Add Value
        </button>

        <button
          style={{
            backgroundColor: 'lightcoral',
            border: '1px solid #ccc',
            padding: '10px 20px',
            margin: '5px',
            width: '120px'
          }}
          onClick={subtractValue}
        >
          Subtract Value
        </button>

      </div>
    </>
  )
}

export default App