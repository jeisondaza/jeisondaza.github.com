import "./Projects.css";
import { projects } from "~/data/data.json";
import ProjectCard from "./ProjectCard";
import SubtitleParagraph from "~/components/SubtitleParagraph";
const Projects = () => {
   return (
      <section className="container">
         <h2 className="title gradient">{projects.title}</h2>
         <SubtitleParagraph content={projects.subtitle} />
         <article className="card_container">
            {projects.content.map((el, index) => (
               <ProjectCard content={el} key={index} reverse={index % 2} />
            ))}
         </article>
      </section>
   );
};

export default Projects;
