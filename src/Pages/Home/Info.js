import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Openning Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <InfoCard cardTitle="Our locations" bgClass="bg-accent" img={marker} />
      <InfoCard
        cardTitle="Contract us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      />
    </div>
  );
};

export default Info;
