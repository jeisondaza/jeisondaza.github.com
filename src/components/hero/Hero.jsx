import "./Hero.css";
import Avatar from "./Avatar";
import About from "./About";
import { home } from "~/data/data.json";

const Hero = () => {
  return (
    <section className="home_container">
      <section className="avatar_section">
        <Avatar title={home.title} subtitle={home.subtitle} />
      </section>
      <About content={home.content} />
    </section>
  );
};

export default Hero;
