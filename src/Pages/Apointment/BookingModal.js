import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
// import { format } from "date-fns";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formatedDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    console.log(booking);
    axios.post("http://localhost:4000/booking", booking).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.success) {
        toast.success(`Appointment set ${formatedDate} at ${slot}`);
      } else {
        toast.error(
          `Already have an appointment on ${data.booking?.date} at ${data?.booking?.slot}`
        );
      }
      refetch();
      setTreatment(null);
    });

    // fetch("http://localhost:4000/booking", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application-type",
    //   },
    //   body: JSON.stringify(booking),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setTreatment(null);
    //   });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              //   placeholder="Type here"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="your name"
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="your email"
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
