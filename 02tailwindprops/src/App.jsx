import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 ">Tailwind test</h1>

      <Card username="ankit" />
      <Card username="yadav" />
      <Card username="shivapar" />
      <Card username="jaunpur" />
    </>
  );
}

export default App;
