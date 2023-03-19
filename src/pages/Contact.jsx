import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="h-full flex-1  flex flex-col  ">
      <section className="flex flex-col gap-4 items-start px-24 py-10">
        <h1 className="text-5xl  font-medium uppercase">
          {" "}
          SEND US YOUR REQUEST!{" "}
        </h1>
        <p className="w-[90%] text-lg text-gray-800 font-medium pb-10">
          Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we'd be happy to
          help!
        </p>
      </section>
      <section className="flex flex-col md:flex-row gap-8 justify-between items-center pb-20 px-24 ">
        <div>
          <h2 className="text-2xl font-medium">Type of contact</h2>
          <ul className="text- font-medium mt-4 lg:text-xl lg:mt-5 lg:mr-0">
            <li className="w-full pb-3">
              <label htmlFor="list-radio-1" className="w-full py-5 font-medium">
                <input
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I have a question about the service.
                </span>
              </label>
            </li>
            <li className="w-full pb-3">
              <label
                htmlFor="list-radio-1"
                className="w-full py-5  font-medium"
              >
                <input
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I'm a registered client and I need support.
                </span>
              </label>
            </li>
            <li className="w-full pb-3">
              <label
                htmlFor="list-radio-1"
                className="w-full py-5  font-medium"
              >
                <input
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I'm a counselor interested in joining.
                </span>
              </label>
            </li>
            <li className="w-full pb-3">
              <label
                htmlFor="list-radio-1"
                className="w-full py-5  font-medium"
              >
                <input
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I'm a registered counselor and I need support.
                </span>
              </label>
            </li>
            <li className="w-full pb-3">
              <label
                htmlFor="list-radio-1"
                className="w-full py-5  font-medium"
              >
                <input
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">I have a business-related inquiry.</span>
              </label>
            </li>
            <li className="w-full pb-3">
              <label
                htmlFor="list-radio-1"
                className="w-full py-5  font-medium"
              >
                <input
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">
                  I'm interested in Healing Online for my organization.
                </span>
              </label>
            </li>
            <li className="w-full pb-3">
              <label
                htmlFor="list-radio-1"
                className="w-full py-5  font-medium"
              >
                <input
                  id="list-radio-1"
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4"
                />
                <span className="ml-2">I have a billing related question.</span>
              </label>
            </li>
          </ul>
        </div>
        <div className=" flex justify-center">
          <img src="./contact.svg" alt="contact" className="w-[75%]" />
        </div>
      </section>
      <section className="flex  flex-col md:flex-row gap-8 justify-center md:justify-between items-center pb-20 px-24">
        <form className="min-w-[50%]">
          <div>
            <label
              htmlFor="fullname"
              className="inline-block lg:w-[70%] mt-2 mb-2"
            >
              Full Name:
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name here..."
                className="
                          w-full
                          px-3
                          py-3
                          text-base 
                          font-normal
                          text-gray-700
                          border-#0000001F
                          border-solid
                          rounded-[10px]
                          drop-shadow-lg
                          shadow-[#AC97971F]"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="email"
              className="inline-block lg:w-[70%] mt-2 mb-2"
            >
              Email:
              <input
                type="text"
                id="email"
                placeholder="Enter your email address here..."
                className="
                          w-full
                          px-3
                          py-3
                          text-base 
                          font-normal
                          text-gray-700
                          border-#0000001F
                          border-solid
                          rounded-[10px]
                          drop-shadow-lg
                          shadow-[#AC97971F] z-10"
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="message"
              className="inline-block lg:w-[70%] mt-2 mb-2"
            >
              Details:
              <textarea
                id="message"
                rows="4"
                className="
                        w-full 
                        px-3
                        py-3
                        text-base 
                        font-normal
                        text-gray-700
                        border-#0000001F
                        border-solid
                        rounded-[10px]
                        drop-shadow-lg
                        shadow-[#AC97971F] z-0"
                placeholder="Enter your details here..."
              />
            </label>
          </div>

          <div className="mt-6">
            <Link>
              <button
                type="submit"
                className="
                        lg:text-xl md:text-base text-sm 
                        lg:ml-0 lg:mb-10 lg:px-16 
                        px-6 py-3
                        rounded-md box-border 
                        font-semibold 
                        bg-cyan-500 hover:bg-cyan-400
                        cursor-pointer"
              >
                SUBMIT
              </button>
            </Link>
          </div>
        </form>
        <div className="bg-sky-100 min-w-[30%] flex flex-col rounded-lg p-6 ">
          <h3 className="text-xl font-semibold">Find Us At:</h3>
          <span className=" text-gray-500 font-medium">Nergiz Plaza</span>
          <span className=" text-gray-500 font-medium">3rd Floor</span>
          <span className=" text-gray-500 font-medium">
            Bakhtiyari Street 40m
          </span>
          <span className=" text-gray-500 font-medium">Erbil, Iraq</span>
          <span className=" text-gray-500 font-medium">44001</span>
        </div>
      </section>
    </main>
  );
}

export default Contact;
