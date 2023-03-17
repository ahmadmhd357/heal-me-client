import React from "react";
import { useForm } from "react-hook-form";

function Book1({ data, setData, setSteps }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(d) {
    setData({ ...data, ...d });
    setSteps(2);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-fit m-auto shadow-[0_4px_12px_rgba(0,0,0,0.12)] p-5 rounded-md flex flex-col gap-5 items-center justify-center"
    >
      <h1 className="font-medium text-xl">
        What type of coumseling are you looking for?
      </h1>
      <ul className=" w-full mb-20 ">
        <li className="mb-3 w-full  flex">
          <input
            id="Individual"
            type="radio"
            name="type"
            value="individual"
            className="hidden peer"
            {...register("type")}
          />
          <label
            htmlFor="Individual"
            className="  w-full text-lg font-medium bg-white p-3 border border-gray-200 rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            Individual counseling
          </label>
        </li>
        <li className="mb-3 w-full  flex">
          <input
            id="Teen"
            type="radio"
            name="type"
            value="teen"
            className="hidden peer"
            {...register("type")}
          />
          <label
            htmlFor="Teen"
            className="  w-full text-lg font-medium bg-white p-3 border border-gray-200 rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            Teen counseling (for my child)
          </label>
        </li>
      </ul>
      <button
        className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium"
      >
        Next
      </button>
    </form>
  );
}

export default Book1;
