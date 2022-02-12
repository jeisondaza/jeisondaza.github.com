import "./App.css";
import BlogPost from "./components/BlogPost";
import Contact from "./components/Contact";
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
         <Contact />
         <BlogPost />
      </>
   );
}

export default App;
