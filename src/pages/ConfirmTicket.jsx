import React from "react";
import CrediCard from "../components/CrediCard";
import "../slick.css"; 
import "../slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


export default function ConfirmTicket() {
  const navigate = useNavigate()

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      };
  return (
    <main className="h-full flex-1 px-10 md:px-24 py-10  flex flex-col  gap-6  ">
      <div>
        <h1 className="font-bold uppercase text-3xl md:text-5xl">
          select card
        </h1>
        <p className="text-gray-500 text-lg font-medium">
          Please select the card you want to buy the tickets with
        </p>
      </div>
      <div>

      <Slider {...settings}>
        <CrediCard/>
        <CrediCard/>
        <CrediCard/>
        <CrediCard/>
        <CrediCard/>
        <CrediCard/>
      </Slider>
      </div>
      <button
          className=" rounded-md w-fit m-auto my-10 box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-cyan-600 hover:bg-cyan-500"
          type="button"
          onClick={()=>navigate('/payment')}
        >
          CONFIRM PURCHASE
        </button>
    </main>
  );
}
