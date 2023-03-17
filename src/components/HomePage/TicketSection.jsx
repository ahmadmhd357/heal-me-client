import React from "react";
import {useNavigate} from 'react-router-dom'

function TicketSection() {
  const navigate = useNavigate()
  return (
    <section className="flex flex-col bg-[#EAF8F9] items-start gap-20 p-20">
      <div>
        <h1 className=" text-5xl pb-4 font-medium uppercase">Purchase tickets</h1>
        <p className="text-xl uppercase font-medium">purchase tickets that can be used to book appointments!</p>
      </div>
      <div className="flex flex-wrap gap-8 w-full items-center justify-center ">
        <div className="flex min-w-[25%] bg-white flex-col px-5 py-10  rounded-lg gap-10 items-center justify-center shadow-md">
          <h1 className="text-4xl uppercase">5 Tickets</h1>
          <h2 className="text-2xl uppercase text-gray-500 font-bold">10$</h2>
          <button onClick={()=>navigate('/payment/10')} className="bg-cyan-500 hover:bg-cyan-400 uppercase py-2 px-3 rounded-lg font-medium">
          Purchase
        </button>
        </div>
        <div className="flex min-w-[25%] flex-col bg-white px-5  py-10  rounded-lg gap-10 items-center justify-center shadow-md">
          <h1 className="text-4xl uppercase">25 Tickets</h1>
          <h2 className="text-2xl uppercase text-gray-500 font-bold">40$</h2>
          <button onClick={()=>navigate('/payment/40')} className="bg-cyan-500 hover:bg-cyan-400 uppercase py-2 px-3 rounded-lg font-medium">
          Purchase
        </button>
        </div>
        <div className="flex min-w-[25%] flex-col bg-white px-5 py-10  rounded-lg gap-10 items-center justify-center shadow-md">
          <h1 className="text-4xl uppercase">50 Tickets</h1>
          <h2 className="text-2xl text-gray-500 uppercase font-bold">70$</h2>
          <button onClick={()=>navigate('/payment/70')} className="bg-cyan-500 hover:bg-cyan-400 py-2 px-3 rounded-lg uppercase font-medium">
          Purchase
        </button>
        </div>
        </div>
        <div className="flex flex-col py-4 px-8 rounded-md bg-white text-center gap-6 shadow-md w-full items-center justify-center ">
        <h1 className="text-4xl uppercase">Are you a counselor?</h1>
        <p className="text-lg font-normal">Interested in joining our mental health platform? You decide your schedule and how much you want to work, we'll take care of the client referrals and billing details!</p>
        <button onClick={()=>navigate('/requirements')} className="bg-cyan-500 hover:bg-cyan-400 py-2 px-3 rounded-lg uppercase font-medium">
          Learn more
        </button>
        </div>
    </section>
  );
}

export default TicketSection;
