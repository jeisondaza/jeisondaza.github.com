import "./Contact.css";
import { contact } from "~/data/data.json";
import SubtitleParagraph from "./SubtitleParagraph";
import IconSocialMedia from "./IconSocialMedia";
import ContactForm from "./ContactForm";

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
         <ContactForm />
      </section>
   );
};

export default Contact;
