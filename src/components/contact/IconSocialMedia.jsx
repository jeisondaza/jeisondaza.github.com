import "./IconSocialMedia.css";

const IconSocialMedia = ({ content }) => {
   return (
      <a className="icon_box" href={content.url} target="_blank">
         <img className="icon" src={content.icon} alt={content.name} />
         <div className="icon_fondo"></div>
      </a>
   );
};

export default IconSocialMedia;
