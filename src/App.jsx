import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-gradient-to-tr from-[#370d97] to-[#895ce0]">
        <Navbar />
      </main>
    </>
  );
}

export default App;
