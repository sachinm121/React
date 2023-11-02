import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let Counter = 0

  const increase = () => {
    if(counter < 20){
      counter = counter+1;
      setCounter(counter)
      console.log(counter)
    }
  }
  const decrease = () => {
    if(counter >= 1){
      counter = counter-1;
      setCounter(counter)
      console.log(counter)
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
    </>
  )
}

export default App
