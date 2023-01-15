import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//Import Pages
import AboutUs from "./pages/AboutUs";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
