import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);
  const obj = {
    name: "sachin",
    age: 25
  }
  const array = [1, 22, 43]
  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-md mb-4">Tailwind test</h1>
      <Card name="rani" myObj={obj} myArray={array } btnTxt="Visit profile"/>
      <Card name="rani" myObj={obj} myArray={array } />
    </>
  );
}

export default App;
