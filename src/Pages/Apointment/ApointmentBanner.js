import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import bg from "../../assets/images/bg.png";

const ApointmentBanner = ({ date, setDate }) => {
  return (
    <div style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt="" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApointmentBanner;
