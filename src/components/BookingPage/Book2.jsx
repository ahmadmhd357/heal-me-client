import React from "react";
import { useForm } from "react-hook-form";

function Book2({ data, setData, setSteps }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(d) {
    setData({ ...data, ...d });
    setSteps(3);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-fit m-auto shadow-[0_4px_12px_rgba(0,0,0,0.12)] p-5 rounded-md flex flex-col gap-5 items-center justify-center"
    >
      <h1 className="font-medium text-xl">What is your relationship status?</h1>
      <ul className=" w-full mb-20 ">
        <li className="mb-3 w-full  flex">
          <input
            {...register("status")}
            id="single"
            type="radio"
            name="status"
            value="single"
            className="hidden peer"
          />
          <label
            htmlFor="single"
            className="  w-full text-lg font-medium bg-white p-3 border border-gray-200 rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            Single
          </label>
        </li>
        <li className="mb-3 w-full  flex">
          <input
            {...register("status")}
            id="married"
            type="radio"
            name="status"
            value="married"
            className="hidden peer"
          />
          <label
            htmlFor="married"
            className="  w-full text-lg font-medium bg-white p-3 border border-gray-200 rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            Married
          </label>
        </li>
        <li className="mb-3 w-full  flex">
          <input
            {...register("status")}
            id="divorced"
            type="radio"
            name="status"
            value="divorced"
            className="hidden peer"
          />
          <label
            htmlFor="divorced"
            className="  w-full text-lg font-medium bg-white p-3 border border-gray-200 rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            Divorced
          </label>
        </li>
      </ul>
      <div className="flex justify-between w-full">
        <button className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium">
          Next
        </button>
        <button
          className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium"
          type="button"
          onClick={() => setSteps(1)}
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default Book2;
