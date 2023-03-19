import React from "react";
import { useForm } from "react-hook-form";

function Book4({ data, setData, setSteps }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(d) {
    setData({ ...data, ...d });
    setSteps(5);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-fit m-auto shadow-[0_4px_12px_rgba(0,0,0,0.12)] p-5 rounded-md flex flex-col gap-5 items-center justify-center"
    >
      <h1 className="font-medium text-xl">
        Are there any specific qualities that you'd like in a counselor?
      </h1>
      <ul className=" w-full mb-20 ">
        <li className="mb-1 w-full items-center gap-2  flex">
          <input
            {...register("gender")}
            id="male"
            type="radio"
            name="gender"
            value="male"
            className=""
          />
          <label
            htmlFor="male"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            I prefer a male counselor
          </label>
        </li>
        <li className="mb-1 w-full items-center gap-2 flex">
          <input
            {...register("gender")}
            id="female"
            type="radio"
            name="gender"
            value="female"
            className=""
          />
          <label
            htmlFor="female"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100  "
          >
            I prefer a female counselor
          </label>
        </li>
        <li className="mb-1 w-full items-center gap-2 flex">
          <input
            {...register("old")}
            id="old"
            type="checkbox"
            name="old"
            className=""
          />
          <label
            htmlFor="old"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100  "
          >
            I prefer an older counselor (45+)
          </label>
        </li>
        <li className="mb-1 w-full items-center gap-2 flex">
          <input
            {...register("religious")}
            id="religious"
            type="checkbox"
            name="religious"
            className=""
          />
          <label
            htmlFor="religious"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100  "
          >
            I prefer a non-religious counselor
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
          onClick={() => setSteps(3)}
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default Book4;
