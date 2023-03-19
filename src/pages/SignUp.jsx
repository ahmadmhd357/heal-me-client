import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";

function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confEmail: "",
    password: "",
    confPassword: "",
    birth: "",
  });

  const onChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { confPassword, confEmail, ...info } = data;
    if (data.confEmail === data.email && data.password === data.confPassword) {
      try {
        await newRequest.post("auth/register", {
          ...info,
        });
        alert("new user has been created");
        navigate("/login");
      } catch (error) {
        alert(error.response.data);
      }
    } else {
      alert("please make sure to write the email and password correctly");
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-6 px-24 py-10">
      <img src="./signUp.svg" alt="Sign up" />
      <div className="flex flex-col items-center justify-center gap-5  w-full">
        <h2 className='text-5xl font-["Poppins"]'>Sign Up Now</h2>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center gap-3 shadow-2xl px-10 py-10"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <input
              id="firstName"
              value={data.firstName}
              onChange={onChange}
              placeholder="First Name"
              type="text"
              required
              className="h-10 px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            />
            <input
              id="lastName"
              value={data.lastName}
              onChange={onChange}
              placeholder="Last Name"
              type="text"
              required
              className="h-10 px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            />
          </div>
          <div className="flex flex-col md:w-full gap-3">
            <input
              id="email"
              value={data.email}
              onChange={onChange}
              placeholder="Your Email"
              type="email"
              required
              className="h-10 px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            />
            <input
              id="confEmail"
              value={data.confEmail}
              onChange={onChange}
              placeholder="Confirm Your Email"
              type="email"
              required
              className="h-10 px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              id="password"
              value={data.password}
              onChange={onChange}
              placeholder="Password"
              type="password"
              required
              className="h-10 px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            />
            <input
              id="confPassword"
              value={data.confPassword}
              onChange={onChange}
              placeholder="Confirm Your Password"
              type="password"
              required
              className="h-10 px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <span className=" text-[#9DAFBD] font-medium text-lg">
              Birth Date
            </span>

            <input
              id="birth"
              value={data.birth}
              onChange={onChange}
              type="date"
              className="h-10 placeholder: text-[#9DAFBD]  px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
            />
          </div>
          <div className="flex items-center flex-col md:flex-row py-3 gap-4">
            <button
              type="submit"
              className="broder-solid border-2 py-3 border-[#2DD3E3] font-medium text-xl px-10 rounded-md"
            >
              Sign Up
            </button>
            <span className="text-xl text-cyan-500 font-bold">Or</span>
            <button
              type="button"
              className="bg-[#2DD3E3] font-medium text-xl px-10 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
              onClick={() => navigate("/login")}
            >
              Loge In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
