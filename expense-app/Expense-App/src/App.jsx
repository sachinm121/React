import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-full max-w-md border-solid border-2 border-red-600 mx-auto text-white'>
        <h1 className='py-3 text-5xl'>₹ 500 <span>.00</span></h1>
        <form action="">
          <div className='flex justify-center gap-2 w-full'>
              <input className='w-1/2' type="text" placeholder='+3000 new music system'/>
              <input className='w-1/2' type="datetime-local" />
          </div>

          <div className="description">
            <input type="text" placeholder='description' className='w-full my-1'/>
          </div>

          <button type='submit'>Add new transaction</button>
        </form>

        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">Music System</div>
              <div className="description">It time to enjoy</div>
            </div>

            <div className="right">
              <div className="price">₹ 500</div>
              <div className="datetime">2023-11-07 01:37</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
