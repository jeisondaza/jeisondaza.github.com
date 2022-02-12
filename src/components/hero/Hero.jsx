import "./Hero.css";
import Avatar from "./Avatar";
import About from "./About";
import { home } from "~/data/data.json";

const Hero = () => {
   return (
      <section className="home_container">
         <Avatar title={home.title} subtitle={home.subtitle} />
         <About content={home.content} />
      </section>
   );
};

export default Hero;
