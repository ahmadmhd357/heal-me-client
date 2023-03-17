import React from "react";
import { useNavigate } from "react-router-dom";

function TeamSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#FEE89E] flex flex-col items-start px-24 gap-10 py-20">
      <h1 className="text-5xl font-medium w-[70%] leading-relaxed">
        Professional, licensed, and vetted therapists that you can trust
      </h1>

      <div>
        <img src="./team.svg" alt="Team" />
      </div>

      <p className="w-[70%]">
        Tap into the world's largest network of licensed, accredited, and
        experienced therapists who can help you with a range of issues including
        depression, anxiety, relationships, trauma, grief, and more. with our
        therapists, you get the same professionalism and quality you would
        expect from an in-office therapist, but with the ability to communicate
        whenever and however you want.
      </p>

      <button
        onClick={() => navigate("/booking")}
        className="bg-cyan-500 hover:bg-cyan-400 py-2 px-3 rounded-lg font-medium"
      >
        Book an appointment
      </button>
    </section>
  );
}

export default TeamSection;
