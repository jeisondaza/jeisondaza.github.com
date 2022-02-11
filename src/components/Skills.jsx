import "./Skills.css";
import SkillView from "./SkillView";
import SubtitleParagraph from "./SubtitleParagraph";
import { skills } from "~/data/data.json";

const Skills = () => {
   return (
      <section className="skills_container">
         <h2 className="title">{skills.title}</h2>
         <SubtitleParagraph content={skills.subtitle} />
         <article className="tech_container">
            {skills.content.map((el, index) => (
               <SkillView content={el} key={index} />
            ))}
         </article>
      </section>
   );
};

export default Skills;
