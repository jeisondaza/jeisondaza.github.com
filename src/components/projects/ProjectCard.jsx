import "./ProjectCard.css";

const ProjectCard = ({ content, reverse }) => {
  console.log(!reverse);
  return (
    <div className={`card ${!reverse && "reverse"}`}>
      <img src={content.img} alt="project img" className="card_img" />
      <div className="card_description">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <div className="card_btns">
          <a
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn_cta"
          >
            Go live
          </a>
          <a
            href={content.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn_text"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
