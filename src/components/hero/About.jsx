import "./About.css";
import SubtitleParagraph from "~/components/SubtitleParagraph";
const About = ({ content }) => {
   return (
      <article className="home_bio">
         {content.map((el, index) => (
            <p className="home_description" key={index}>
               {el}
            </p>
         ))}
      </article>
   );
};

export default About;
