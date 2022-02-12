import "./ContactForm.css";

const ContactForm = () => {
   return (
      <form className="form">
         <input
            className="form_input email"
            type="email"
            name=""
            id=""
            placeholder="Email"
         />
         <textarea
            className="form_input description"
            name=""
            id=""
            cols="30"
            rows="15"
            placeholder="What you want"
         ></textarea>
         <input className="form_submit" type="submit" value="Send" />
      </form>
   );
};

export default ContactForm;
