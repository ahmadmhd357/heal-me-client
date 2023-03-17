import { useState } from "react";
// import { useForm } from "react-hook-form";
import Book1 from "../components/BookingPage/Book1";
import Book2 from "../components/BookingPage/Book2";
import Book3 from "../components/BookingPage/Book3";
import Book4 from "../components/BookingPage/Book4";
import Book5 from "../components/BookingPage/Book5";
import Book6 from "../components/BookingPage/Book6";
import Book8 from "../components/BookingPage/Book8";
import BookTherapist from "../components/BookingPage/BookTherapist";

function Booking() {
  // const { register, handleSubmit } = useForm();
  const [steps, setSteps] = useState(1);
  const [data, setData] = useState({});
  return (
    <main className="flex-1 flex flex-col gap-6 px-10 md:px-24 py-10 ">
      <section className="flex flex-col gap-4 items-start">
        {steps <= 5 && (
          <>
            <h1 className="text-5xl  font-medium uppercase">
              let's match you with the right therapist
            </h1>
            <p className="w-[90%] text-lg text-gray-800 font-medium pb-10">
              Please fill out this short questionnaire to provide some general
              and anonymous background about you and the issues you'd like to
              deal with in online therapy. It would help us match you with the
              most suitable therapist for you.
            </p>
          </>
        )}
        {steps === 6 && (
          <>
            <h1 className="text-5xl  font-medium uppercase">
              What brings you here?
            </h1>
            <p className="w-[90%] text-lg text-gray-800 font-medium pb-10">
              Please specify (in a few sentences) why you'd like counseling.
              This will give your counselor a good understanding of where to
              start.
            </p>
          </>
        )}
        {steps === 8 && (
          <>
            <h1 className="text-5xl  font-medium uppercase">
            Submit your appointment
            </h1>
            <p className="w-[90%] text-lg text-gray-800 font-medium pb-10">
            Click Submit if you are sure of all your choices.
            </p>
          </>
        )}
      </section>
      {steps === 1 && (
        <Book1 setSteps={setSteps} data={data} setData={setData} />
      )}
      {steps === 2 && (
        <Book2 setSteps={setSteps} data={data} setData={setData} />
      )}
      {steps === 3 && (
        <Book3 setSteps={setSteps} data={data} setData={setData} />
      )}
      {steps === 4 && (
        <Book4 setSteps={setSteps} data={data} setData={setData} />
      )}
      {steps === 5 && (
        <Book5 setSteps={setSteps} data={data} setData={setData} />
      )}
      {steps === 6 && (
        <Book6 setSteps={setSteps} data={data} setData={setData} />
      )}
      {steps === 7 && (
        <BookTherapist setSteps={setSteps} data={data} setData={setData} />
      )}
      {steps === 8 && (
        <Book8 data={data} setSteps={setSteps}/>
      )}
    </main>
  );
}

export default Booking;
