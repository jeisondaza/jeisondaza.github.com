import "./About.css";
import SubtitleParagraph from "./SubtitleParagraph";
const About = ({ content }) => {
   return (
      <article className="home_bio">
         {content.map((el, index) => (
            <SubtitleParagraph content={el} key={index} />
         ))}
      </article>
   );
};

export default About;
