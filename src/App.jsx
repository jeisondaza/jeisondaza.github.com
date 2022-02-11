import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
   return (
      <>
         <NavBar />
         <Hero />
         <Skills />
         <Projects />
      </>
   );
}

export default App;
