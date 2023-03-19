import React from "react";
import { useForm } from "react-hook-form";

function Book3({ data, setData, setSteps }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(d) {
    setData({ ...data, ...d });
    setSteps(4);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-fit m-auto shadow-[0_4px_12px_rgba(0,0,0,0.12)] p-5 rounded-md flex flex-col gap-5 items-center justify-center"
    >
      <h1 className="font-medium text-xl">
        Have you ever been in therspy before?
      </h1>
      <ul className=" w-full mb-20 ">
        <li className="mb-3 w-full  flex">
          <input
            {...register("before")}
            id="true"
            type="radio"
            name="before"
            value={true}
            className="hidden peer"
          />
          <label
            htmlFor="true"
            className="  w-full text-lg font-medium bg-white p-3 border border-gray-200 rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            Yes
          </label>
        </li>
        <li className="mb-3 w-full  flex">
          <input
            {...register("before")}
            id="false"
            type="radio"
            name="before"
            value={false}
            className="hidden peer"
          />
          <label
            htmlFor="false"
            className="  w-full text-lg font-medium bg-white p-3 border border-gray-200 rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            No
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
          onClick={() => setSteps(2)}
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default Book3;
