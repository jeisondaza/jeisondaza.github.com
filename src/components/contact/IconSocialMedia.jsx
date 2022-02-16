import "./IconSocialMedia.css";

const IconSocialMedia = ({ content, img }) => {
  return (
    <a className="icon_box" href={content.url} target="_blank">
      <img className="icon" src={img} alt={content.name} />
      <div className="icon_fondo"></div>
    </a>
  );
};

export default IconSocialMedia;
