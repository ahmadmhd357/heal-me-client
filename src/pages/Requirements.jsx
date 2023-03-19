import React from "react";
import { useNavigate } from "react-router-dom";

function Requirements() {
  const navigate = useNavigate();
  return (
    <main className="flex-1 flex flex-col md:flex-row  gap-6 px-10 md:px-24 py-10 ">
      <section className="flex flex-col gap-4 items-start">
        <h1 className="text-5xl  font-medium uppercase mb-6">
          Why work with Healing?
        </h1>
        <div className="">
          <h3 className="text-xl font-bold">Reliable Income</h3>
          <p className="text-lg text-gray-600 font-medium">
            Over 10,000 people sign up on BetterHelp every day looking for a
            counselor to help with life's challenges. BetterHelp can be your
            main source of income ("full time") or a supplement to your current
            work.
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Focus on Counseling</h3>
          <p className="text-lg text-gray-600 font-medium">
            No need to worry about costs from acquiring clients, billing,
            support or operations. Let us handle the fees and paperwork so you
            can focus on what you do best!
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-bold">Focus on Counseling</h3>
          <p className="text-lg text-gray-600 font-medium">
            No need to worry about costs from acquiring clients, billing,
            support or operations. Let us handle the fees and paperwork so you
            can focus on what you do best!
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase my-6">requirements</h1>
          <ul className="list-disc marker:text-black ml-5 ">
            <li className="text-gray-600 font-medium">
              Licensed by a State Board to provide counseling
            </li>
            <li className="text-gray-600 font-medium">
              Experience in counseling for adults, couples, and/or teens
            </li>
            <li className="text-gray-600 font-medium">
              Excellent writing skills
            </li>
            <li className="text-gray-600 font-medium">
              Reliable Internet connection
            </li>
            <li className="text-gray-600 font-medium">
              Currently residing in the US
            </li>
          </ul>
        </div>
        <button
          className=" rounded-md w-fit  my-10 box-border py-3 px-4 md:px-6  lg:text-lg md:text-base text-sm transition-all duration-250 bg-cyan-600 hover:bg-cyan-500"
          onClick={() => navigate("/create-therapist")}
        >
          GET STARTED
        </button>
      </section>
      <img src="/req.svg" alt="image" />
    </main>
  );
}

export default Requirements;
