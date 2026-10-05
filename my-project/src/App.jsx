import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./Components/card.jsx";

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <h1 className='bg-green-400 h-16 flex items-center justify-center p-4 rounded-lg'>
        Tailwind Test
      </h1>
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <Card username="Piyush" btntext="Click me"/>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <Card username = "Aman"/>
      </div>
    </>
  )
}

export default App
