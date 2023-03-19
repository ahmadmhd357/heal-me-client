import React from "react";
import { useForm } from "react-hook-form";

function Book6({ data, setData, setSteps }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(d) {
    setData({ ...data, ...d });
    setSteps(7);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-[90%] m-auto shadow-[0_4px_12px_rgba(0,0,0,0.12)] p-5 rounded-md "
    >
      <textarea
        {...register("desc")}
        type="text"
        className="border w-full px-3 pt-3 pb-40 mb-10 "
        placeholder="write your descreption..."
      />
      <div className="flex justify-between w-full">
        <button className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium">
          Next
        </button>
        <button
          className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium"
          type="button"
          onClick={() => setSteps(5)}
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default Book6;
