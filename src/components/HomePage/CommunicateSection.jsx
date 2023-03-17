import React from "react";
import { BsCameraVideo, BsTelephone, BsChatLeftText } from "react-icons/bs";

function CommunicateSection() {
  return (
    <section className="flex flex-col items-start gap-20 p-20">
      <h1 className=" text-5xl font-medium uppercase">
        we can communicate through
      </h1>
      <div className="flex flex-wrap gap-4 ">
        <div className="flex min-w-[25%] max-w-[30%] flex-col p-5 border rounded-lg gap-3 items-center justify-center shadow-md">
          <BsTelephone className="lg:text-4xl text-2xl" />
          <h1 className="lg:text-4xl text-2xl">Voice Call</h1>
          <p className="text-center">
            For better experience therapists recommend video calls, but always
            remember that its a choice!
          </p>
        </div>
        <div className="flex min-w-[25%] max-w-[30%]  flex-col p-5 border  rounded-lg gap-3 items-center justify-center shadow-md">
          <BsChatLeftText className="lg:text-4xl text-2xl" />
          <h1 className="lg:text-4xl text-2xl">Chat</h1>
          <p className="text-center">
            For better experience therapists recommend video calls, but always
            remember that its a choice!
          </p>
        </div>
        <div className="flex min-w-[25%] max-w-[30%] flex-col p-5 border rounded-lg gap-3 items-center justify-center shadow-md">
          <BsCameraVideo className="lg:text-4xl text-2xl" />
          <h1 className="lg:text-4xl text-2xl">Video Call</h1>
          <p className="text-center">
            For better experience therapists recommend video calls, but always
            remember that its a choice!
          </p>
        </div>
      </div>
    </section>
  );
}

export default CommunicateSection;
