import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import newRequest from "../../utils/newRequest";
import useSWR from "swr";

const fetcher = (url) => newRequest.get(url).then((res) => res.data);

function BookTherapist({ data, setData, setSteps }) {
  const { register, handleSubmit } = useForm();
  const [value, onChange] = useState();

  const { data: therapists } = useSWR("/therapist/therapists", fetcher);

  function onSubmit(d) {
    const { therapistName } = d;
    if (!therapistName) return alert("please choose a therapist");
    if (!value) return alert("please choose a date");
    setData({ ...data, ...d, date: format(value, "dd/MM/yyyy") });
    setSteps(8);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-fit m-auto shadow-[0_4px_12px_rgba(0,0,0,0.12)] p-5 rounded-md flex flex-col gap-5 items-center justify-center"
    >
      <h1 className="font-medium text-xl">
        Please choose a consolor and date?
      </h1>
      <ul className=" w-full mb-20 ">
        <li className="mb-3 w-full  flex ">
          <select
            required={true}
            name="therapist"
            {...register("therapistName")}
            className="w-full p-3 text-lg font-medium peer-checked:text-white peer-checked:bg-cyan-500 hover:text-gray-600 hover:bg-gray-100"
          >
            <option value="">-- Please choose a therapist --</option>
            {therapists?.map((th) => (
              <option key={th._id}>{th.username}</option>
            ))}
          </select>
        </li>
        <Calendar onChange={onChange} value={value} minDate={new Date()} />
        {/* <TimePicker  {...register("time")} /> */}
        <input
          required={true}
          type="time"
          min="09:00"
          max="18:00"
          className="w-full p-3 m-3"
          name="time"
          {...register("time")}
        />
      </ul>
      <div className="flex justify-between w-full">
        <button className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium">
          Next
        </button>
        <button
          className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium"
          type="button"
          onClick={() => setSteps(6)}
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default BookTherapist;
