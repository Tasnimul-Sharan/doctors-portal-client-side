import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:4000/service").then((res) => res.json())
  );

  const imageStorageKey = "9e152fb87d4e4c803a92161f47792cc6";

  /*
   *3 ways to store images
   *
   *
   */

  const onSubmit = async (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("imagebb", result);
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };

          fetch("http://localhost:4000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log("doctor", inserted);
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
              } else {
                toast.error("Faild to add an doctor");
              }
            });

          //   axios
          //     .post("http://localhost:4000/doctor", doctor, {
          //       headers: {
          //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          //       },
          //     })
          //     .then((res) => {
          //       const { inserted } = res;
          //       if (inserted.insertedId) {
          //         toast.success("Doctor added successfully");
          //       } else {
          //         toast.error("Faild to add an doctor");
          //       }
          //     });
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl">Add new Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            class="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "provide a valid email", // JS only: <p>error message</p> TS only support string
              },
            })}
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            class="select input-bordered w-full max-w-xs"
          >
            {services?.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            type="file"
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "image is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <input className="btn w-full max-w-xs" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddDoctor;
