import "./Avatar.css";

const Presentation = ({ title, subtitle }) => {
   return (
      <figure className="home_main">
         <img className="home_img" src="src/assets/meBG.png" alt="me" />
         <figcaption>
            <h1 className="title">{title}</h1>
            <h2 className="home_subtitle gradient">{subtitle}</h2>
         </figcaption>
      </figure>
   );
};

export default Presentation;
