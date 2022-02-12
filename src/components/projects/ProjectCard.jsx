import "./ProjectCard.css";

const ProjectCard = ({ content }) => {
   return (
      <div className="card">
         <img src={content.img} alt="project img" className="card_img" />
         <div className="card_description">
            <h3>{content.title}</h3>
            <p>{content.description}</p>
            <p className="card_btn">Learn more→</p>
         </div>
      </div>
   );
};

export default ProjectCard;
