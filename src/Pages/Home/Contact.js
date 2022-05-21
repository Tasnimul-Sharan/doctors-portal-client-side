import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      className="bg-primary px-10 py-14 "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br-from-accent-to-secondary">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay Connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input type="email" placeholder="Email" class="input w-full max-w-md" />
        <input
          type="text"
          placeholder="Subject"
          class="input w-full max-w-md"
        />
        <textarea
          class="textarea  w-full max-w-md"
          rows={6}
          placeholder="Your massage"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
