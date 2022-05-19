import React, { useState } from "react";
import Footer from "../Shared/Footer";
import ApointmentBanner from "./ApointmentBanner";
import AvailableAppoinments from "./AvailableAppoinments";

const Apointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <ApointmentBanner date={date} setDate={setDate} />
      <AvailableAppoinments date={date} />
      <Footer />
    </div>
  );
};

export default Apointment;
