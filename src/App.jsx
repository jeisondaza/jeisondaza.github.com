import "./App.css";
import BlogPost from "./components/posts/BlogPost";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

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
