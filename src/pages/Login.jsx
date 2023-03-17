import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest.js";
import { useDispatch } from "react-redux";
import { getUser } from "../features/users/usersSlice.js";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const handlSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post("auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      dispatch(getUser(res.data));
      navigate("/");
    } catch (error) {
      alert(error.response.data + " " + error.response.status);
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-6 px-24 py-10">
      <div className="text-center md:text-left">
        <h2 className='text-5xl font-["Poppins"] font-normal md:mt-20 max-[767px]:mb-5 md:mb-10'>
          LOGIN
        </h2>
        <form
          onSubmit={handlSubmit}
          className="flex flex-col min-w-full gap-8 shadow-2xl px-10 py-10 "
        >
          <input
            ref={email}
            type="email"
            placeholder="Your Email"
            name="userEmail"
            required
            className="h-20 px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Your Password"
            name="userPassword"
            required
            className="h-20 px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
          />
          <div className="flex justify-around py-3 gap-8">
            <button
              type="submit"
              className="bg-[#2DD3E3] font-medium text-2xl px-10 py-2 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
            >
              Login
            </button>
            <button
              type="button"
              className="broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-10 py-2 rounded-md"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </form>
      </div>

      <img src="/hero.svg" alt="Login" className="max-[767px]:mt-20 md:mt-20" />
    </section>
  );
}

export default Login;
