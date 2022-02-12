import "./Skills.css";
import SkillView from "./SkillView";
import SubtitleParagraph from "~/components/SubtitleParagraph";
import { skills } from "~/data/data.json";

const Skills = () => {
   return (
      <section className="fullHeight container">
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
