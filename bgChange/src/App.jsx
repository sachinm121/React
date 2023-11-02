import { useState } from "react"

function App() {
  const [color, setColor] = useState('green')
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl bg-slate-500">
              <button onClick={() => setColor("red")} className="outline-none rounded-2xl text-white shadow-xl px-4" style={{backgroundColor:"red"}}>Red</button>
              <button onClick={() => setColor("yellow")} className="outline-none rounded-2xl text-white shadow-xl px-4" style={{backgroundColor:"yellow"}}>Yellow</button>
              <button onClick={() => setColor("green")} className="outline-none rounded-2xl text-white shadow-xl px-4" style={{backgroundColor:"green"}}>Green</button>
              <button onClick={() => setColor("pink")} className="outline-none rounded-2xl text-white shadow-xl px-4" style={{backgroundColor:"pink"}}>Pink</button>
              <button onClick={() => setColor("purple")} className="outline-none rounded-2xl text-white shadow-xl px-4" style={{backgroundColor:"purple"}}>Purple</button>
              <button onClick={() => setColor("blue")} className="outline-none rounded-2xl text-white shadow-xl px-4" style={{backgroundColor:"blue"}}>Blue</button>
              <button onClick={() => setColor("white")} className="outline-none rounded-2xl text-black shadow-xl px-4" style={{backgroundColor:"white"}}>White</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
