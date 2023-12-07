import "./Common.css";
import Header from "./Component/Header/Header";
import Intro from "./Component/Intro/Intro";

import Info from "./Common/Json/Info.json";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };
  useEffect(() => {
    if (darkmode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);
  return (
    <div className="App">
      <Header Info={Info} toggleDarkMode={toggleDarkMode} darkmode={darkmode} />
      <Intro />
    </div>
  );
}

export default App;
