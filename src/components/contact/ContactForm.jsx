import { useForm } from "../../hooks/useForm";
import Message from "../Message";
import "./ContactForm.css";

const initialForm = {
  email: "",
  description: "",
};

const validateForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.email.trim()) {
    errors.email = 'The "email" field is required';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Enter a valid email";
  }

  if (!form.description.trim()) {
    errors.description = 'The "description" field is required';
  }
  return errors;
};

function ContactForm() {
  const {
    form,
    errors,
    loading,
    response,
    handelBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validateForm);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form_input email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handelBlur}
          value={form.email}
          required
        />
        <textarea
          className="form_input description"
          name="description"
          cols="30"
          rows="20"
          placeholder="What you want"
          onChange={handleChange}
          onBlur={handelBlur}
          value={form.description}
          required
        ></textarea>
        <input className="form_submit" type="submit" value="Send" />
      </form>
      {response && (
        <Message msg="Your message has been sent 🎉" color="success" />
      )}
    </>
  );
}

export default ContactForm;
