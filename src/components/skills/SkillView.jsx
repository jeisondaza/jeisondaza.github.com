import "./SkillView.css";
import List from "~/components/List";

const SkillView = ({ content }) => {
   return (
      <div className="tech_section">
         {<p className="tech_title">{content.title}</p>}
         <ul className="tech_group">
            {content.tech.map((el, index) => (
               <List content={el} key={index} />
            ))}
         </ul>
      </div>
   );
};

export default SkillView;
