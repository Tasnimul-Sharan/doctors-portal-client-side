import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/fluoride.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
      describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: cavity,
      describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      img: whitening,
      describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold">Our Survices</h3>
        <h2 className="text-4xl">Survices we provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
