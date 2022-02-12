import "./Contact.css";
import { contact } from "~/data/data.json";
import SubtitleParagraph from "./SubtitleParagraph";
import IconSocialMedia from "./IconSocialMedia";

const Contact = () => {
   return (
      <section className="contact container">
         <h2 className="title">
            {contact.title} <span className="gradient">{contact.word}</span>
         </h2>
         <SubtitleParagraph content={contact.subtitle} />
         <div className="icons_container">
            {contact.icons.map((el, index) => (
               <IconSocialMedia content={el} key={index} />
            ))}
         </div>
      </section>
   );
};

export default Contact;
