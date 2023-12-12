import "./Common.css";
import Info from "./Common/Json/Info.json";
import { useState, useEffect } from "react";
import Header from "./Component/Header/Header";
import Intro from "./Component/Intro/Intro";
import About from "./Component/About/About";
import Skill from "./Component/Skill/Skill";
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
  // setState 이용한 Tailwind Darkmode

  // useEffect(() => {
  //   const Section = document.querySelectorAll(".App>section");
  //   const totalSection = Section.length;
  //   const screenH = 0;
  //   const pageH = 0;
  //   const lastY = 0;
  //   let currentIdx = 0;

  //   const App = document.querySelector(".App");
  //   console.log(App);
  //   App.addEventListener("mousewheel", function (e) {
  //     console.log("scroll");
  //   });
  // }, []);

  return (
    <div className="App">
      <Header Info={Info} toggleDarkMode={toggleDarkMode} darkmode={darkmode} />
      <Intro Info={Info[0]} />
      <About Info={Info[1]} />
      <Skill Info={Info[2]} />
      <div></div>
    </div>
  );
}

export default App;
