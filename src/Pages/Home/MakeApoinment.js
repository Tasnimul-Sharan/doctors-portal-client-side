import React from "react";
import doctor from "../../assets/images/doctor.png";
import apointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeApoinment = () => {
  return (
    <section
      style={{ background: `url(${apointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-110px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Apoinment</h3>
        <h2 className="text-3xl text-white py-5">Make an Apoinment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cumque
          adipisci at placeat expedita qui ratione fugit quasi libero, ipsam
          temporibus quis pariatur blanditiis eum iusto praesentium sunt eius
          laudantium?
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeApoinment;
