import React from "react";

function AddNewCard() {
  return (
    <main className="h-full flex-1 px-10 md:px-24 py-10  flex flex-col  gap-6  ">
      <div>
        <h1 className="font-bold uppercase text-3xl md:text-5xl">
          add card details
        </h1>
        <p className="text-gray-500 text-lg font-medium">
          Please make sure all of the info you enter are the same as your card
          registration info.
        </p>
      </div>
      <section className="flex flex-col md:flex-row">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="cardNumber" className="text-xl text-gray-500">
              Card Number
            </label>
            <input
              type="tel"
              id="cardNumber"
              className="border-gray-500 border px-2"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </div>
          <div className="flex  gap-8">
            <div>
              <label htmlFor="expiryDate" className="text-xl text-gray-500">
                Expiry Date
              </label>
              <br />
              <input type="tel" className="border border-gray-500 w-10 px-2" placeholder="03" />
              {" "}/{" "}
              <input type="tel" className="border border-gray-500 w-10 px-2" placeholder="25" />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="ccv" className="text-xl text-gray-500">
                CCV Code
              </label>
              <input
                type="tel"
                id="ccv"
                className="border-gray-500 border w-16 px-2 "
                placeholder="xxx"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-xl text-gray-500">
              Name On Card
            </label>
            <input type="tel" id="name" className="border-gray-500 border px-2 " placeholder="full name" />
          </div>

          <button type="submit" className="rounded-md w-fit font-medium box-border p-2 pl-6 pr-6 transition-all duration-250 bg-cyan-600 hover:bg-cyan-500 " >Add Card</button>
        </form>
      </section>
    </main>
  );
}

export default AddNewCard;
