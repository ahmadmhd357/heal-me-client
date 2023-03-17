import React from "react";
import { useForm } from "react-hook-form";

function Book5({ data, setData, setSteps }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(d) {
    setData({ ...data, focusOn: { ...d } });
    setSteps(6);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-fit m-auto shadow-[0_4px_12px_rgba(0,0,0,0.12)] p-5 rounded-md flex flex-col gap-5 items-center justify-center"
    >
      <h1 className="font-medium text-xl">
        Are there any issues you'd like to focus on?
      </h1>
      <ul className=" w-full mb-20 ">
        <li className="mb-1 w-full items-center gap-2  flex">
          <input
            {...register("depression")}
            id="depression"
            type="checkbox"
            name="depression"
            className=""
          />
          <label
            htmlFor="depression"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100 "
          >
            Depression
          </label>
        </li>
        <li className="mb-1 w-full items-center gap-2 flex">
          <input
            {...register("stress")}
            id="stress"
            type="checkbox"
            name="stress"
            className=""
          />
          <label
            htmlFor="stress"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100  "
          >
            Stress and Anxiety
          </label>
        </li>
        <li className="mb-1 w-full items-center gap-2 flex">
          <input
            {...register("issues")}
            id="issues"
            type="checkbox"
            name="issues"
            className=""
          />
          <label
            htmlFor="issues"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100  "
          >
            Relationship issues
          </label>
        </li>
        <li className="mb-1 w-full items-center gap-2 flex">
          <input
            {...register("conflicts")}
            id="conflicts"
            type="checkbox"
            name="conflicts"
            className=""
          />
          <label
            htmlFor="conflicts"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100  "
          >
            Family conflicts
          </label>
        </li>
        <li className="mb-1 w-full items-center gap-2 flex">
          <input
            {...register("trauma")}
            id="trauma"
            type="checkbox"
            name="trauma"
            className=""
          />
          <label
            htmlFor="trauma"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100  "
          >
            Trauma and abuse
          </label>
        </li>
        <li className="mb-1 w-full items-center gap-2 flex">
          <input
            {...register("eating")}
            id="eating"
            type="checkbox"
            name="eating"
            className=""
          />
          <label
            htmlFor="eating"
            className="  w-full text-lg font-medium bg-white  rounded-md cursor-pointer  peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100  "
          >
            Eating disorders
          </label>
        </li>
      </ul>
      <div className="flex justify-between w-full">

      <button
        className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium"
      >
        Next
      </button>
      <button
        className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium"
        type="button"
        onClick={()=>setSteps(4)}
      >
        Back
      </button>
      </div>
    </form>
  );
}

export default Book5;
