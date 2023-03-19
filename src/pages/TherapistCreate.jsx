import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import newRequest from "../utils/newRequest";

function TherapistCreate() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.copassword) {
      alert("make sure to write your password correctly");
      return;
    }
    const { copassword, ...info } = data;
    try {
      await newRequest.post("therapist/register", {
        ...info,
      });
      alert("new user has been created");
      navigate("/login");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <main className="flex-1 flex flex-col gap-6 px-10 md:px-24 py-10 ">
      <h1 className="text-5xl  font-medium uppercase mb-6">
        CREATE AN ACCOUNT
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-6 "
      >
        <div className="flex flex-col w-[25%] ">
          <label
            htmlFor="username"
            className="text-gray-600 text-lg font-medium"
          >
            User name
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="outline-none border rounded-md px-3 py-1"
            required={true}
          />
        </div>
        <div className="flex flex-col w-[25%] ">
          <label htmlFor="email" className="text-gray-600 text-lg font-medium">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="outline-none border rounded-md px-3 py-1"
            required={true}
          />
        </div>
        <div className="flex flex-col w-[25%] ">
          <label htmlFor="city" className="text-gray-600 text-lg font-medium">
            City
          </label>
          <input
            {...register("city")}
            type="text"
            id="city"
            className="outline-none border rounded-md px-3 py-1"
            required={true}
          />
        </div>
        <div className="flex flex-col w-[25%] ">
          <label
            htmlFor="liscens"
            className="text-gray-600 text-lg font-medium"
          >
            License number
          </label>
          <input
            {...register("liscens")}
            type="text"
            id="liscens"
            className="outline-none border rounded-md px-3 py-1"
            required={true}
          />
        </div>
        <div className="flex flex-col w-[25%] ">
          <label
            htmlFor="password"
            className="text-gray-600 text-lg font-medium"
          >
            Create Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="outline-none border rounded-md px-3 py-1"
            required={true}
          />
        </div>
        <div className="flex flex-col w-[25%] ">
          <label
            htmlFor="copassword"
            className="text-gray-600 text-lg font-medium"
          >
            Confirm Password
          </label>
          <input
            {...register("copassword")}
            type="password"
            id="copassword"
            className="outline-none border rounded-md px-3 py-1"
            required={true}
          />
        </div>
        <button className="bg-cyan-400 py-2 uppercase px-6 rounded-md font-medium">
          Create
        </button>
      </form>
    </main>
  );
}

export default TherapistCreate;
