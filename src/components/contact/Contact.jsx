import "./Contact.css";
import { contact } from "~/data/data.json";
import SubtitleParagraph from "~/components/SubtitleParagraph";
import IconSocialMedia from "./IconSocialMedia";
import ContactForm from "./ContactForm";
import lk from "~/assets/icons/linkedin.svg";
import gh from "~/assets/icons/github.svg";
import tw from "~/assets/icons/twitter.svg";

const Contact = () => {
  let icons = [lk, gh, tw];
  return (
    <section className="contact container fullHeight">
      <h2 className="title">
        {contact.title} <span className="gradient">{contact.word}</span>
      </h2>
      <SubtitleParagraph content={contact.subtitle} />
      <article className="contact_size">
        <div className="icons_container">
          {contact.icons.map((el, index) => (
            <IconSocialMedia content={el} img={icons[index]} key={index} />
          ))}
        </div>
        <ContactForm />
      </article>
    </section>
  );
};

export default Contact;
