import React from "react";
import ContactForm from "./ContactForm";
import Links from "./Links";

const Contact = () => {
  return (
    <div className="mx-auto px-[10px] flex flex-col justify-between items-center max-w-[480px] lg:mx-[0] lg:max-w-[none] lg:gap-5 lg:items-start lg:flex-row ">
      <ContactForm />
      <Links />
    </div>
  );
};

export default Contact;
