import { useState } from "react";
import "./App.css";
//Import Pages
import AboutUs from "./pages/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AboutUs />
    </div>
  );
}

export default App;
