import "./Avatar.css";
import imgUrl from "~/assets/meBG.png";

const Presentation = ({ title, subtitle }) => {
  return (
    <figure className="avatar_container">
      <img className="avatar_img" src={imgUrl} alt="me" />
      <figcaption>
        <h1 className="title">{title}</h1>
        <h2 className="avatar_subtitle gradient">{subtitle}</h2>
      </figcaption>
    </figure>
  );
};

export default Presentation;
