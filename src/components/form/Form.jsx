import React, { useRef, useState } from "react";
import "./form.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d7k0h0b",
        "template_y3j5r05",
        formRef.current,
        "oFnGLNtyBS5K8i-nk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="form" id="form" ref={formRef} onSubmit={submitHandler}>
      <div className="form__input">
        <input type="text" placeholder="Your name?" name="user_name" />
      </div>
      <div className="form__input">
        <input type="text" placeholder="Subject" name="user_subject"></input>
      </div>
      <div className="form__input">
        <input type="email" placeholder="Your email?" />
      </div>
      <div>
        <textarea
          className="form__input-textarea"
          rows="7"
          placeholder="Write your message"
          name="message"
        ></textarea>
      </div>
      <button className="submit__btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
