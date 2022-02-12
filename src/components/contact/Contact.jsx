import "./Contact.css";
import { contact } from "~/data/data.json";
import SubtitleParagraph from "~/components/SubtitleParagraph";
import IconSocialMedia from "./IconSocialMedia";
import ContactForm from "./ContactForm";

const Contact = () => {
   return (
      <section className="contact container fullHeight">
         <h2 className="title">
            {contact.title} <span className="gradient">{contact.word}</span>
         </h2>
         <SubtitleParagraph content={contact.subtitle} />
         <article className="contact_size">
            <div className="icons_container">
               {contact.icons.map((el, index) => (
                  <IconSocialMedia content={el} key={index} />
               ))}
            </div>
            <ContactForm />
         </article>
      </section>
   );
};

export default Contact;
