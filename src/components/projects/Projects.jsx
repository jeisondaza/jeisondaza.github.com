import "./Projects.css";
import { projects } from "~/data/data.json";
import ProjectCard from "./ProjectCard";
import SubtitleParagraph from "~/components/SubtitleParagraph";
import pokeImg from "~/assets/thumbnails/poke.jpg";
import bssnImg from "~/assets/thumbnails/bssn.jpg";
import keyboardImg from "~/assets/thumbnails/keyboard.jpg";

const Projects = () => {
  let imgs = [pokeImg, bssnImg, keyboardImg];
  return (
    <section className="container">
      <h2 className="title gradient">{projects.title}</h2>
      <SubtitleParagraph content={projects.subtitle} />
      <article className="card_container">
        {projects.content.map((el, index) => (
          <ProjectCard
            content={el}
            img={imgs[index]}
            reverse={index % 2}
            key={index}
          />
        ))}
      </article>
    </section>
  );
};

export default Projects;
