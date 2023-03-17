import React from "react";
import BlueCard from "/crediCard.svg";

function CrediCard() {
  return (
    <div
      className=" box-border rounded-lg  h-full border border-black font-poppins w-[95%]"
      style={{
        backgroundImage: `url(${BlueCard})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        top: 0,
      }}
    >
      <div className="flex flex-row">
        <div className="pl-12 pt-12  text-white">
          <div className="p-4">10/2025</div>
          <div className="p-4">xxxx xxxx xxxx 1983</div>
          <div className="p-4">Natasha Black</div>
        </div>
        <div className="p-12 pl-28">
          <img src="/viza.svg" alt="viza" />
        </div>
      </div>
      <div className="p-4 flex justify-end">
        <button
          className=" rounded-md box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-cyan-600 hover:bg-cyan-500"
          type="button"
          // onClick={() => deleteCardFirebase(doc.id)}
        >
          Delete Card -
        </button>
      </div>
    </div>
  );
}

export default CrediCard;
