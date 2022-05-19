import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0gl9DSPmuM2wlXUsxQUunhceYL44o1t3GvH8OLKIwCl95BkfeiI9KCfWMr1jRi09KTNH0AdOTK3647RO6gHH1k00j5G0DYnK"
);

const Payment = () => {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(`http://localhost:4000/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="card w-50  max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello {appointment.patientName}
          </p>
          <h2 class="card-title">Please Pay for: {appointment?.tretment}</h2>
          <p>
            your appointment:{" "}
            <span className="text-orange-700">{appointment?.date}</span> at{" "}
            {appointment?.slot}
          </p>
          <p>Please Pay: ${appointment?.price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card w-50 flex-shrink-0  max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
