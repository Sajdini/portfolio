import { contactData } from "@/public/contacts";
import React from "react";

const Links = () => {
  return (
    <div className="flex flex-col justify-start basis-1/3 gap-5 pt-[50px] self-start">
      <h2 className="text-amber-400 text-2xl lg:hidden">
        Or reach me out on my channels!
      </h2>
      {contactData.map((item, index) => (
        <div
          className="flex justify-start items-center gap-3  text-amber-400"
          key={index}
        >
          <div className="text-2xl">{item.icon}</div>
          <span className="text-xl text-cyan-900">{item.link}</span>
        </div>
      ))}
    </div>
  );
};

export default Links;
