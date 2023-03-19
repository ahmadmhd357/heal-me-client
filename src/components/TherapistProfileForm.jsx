import React from "react";

function TherapistProfileForm({
  onSubmit,
  data,
  navigate,
  handleInputChange,
  handlDelete,
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col md:flex-row items-center gap- md:gap-4">
        <label htmlFor="username" className="font-medium text-xl">
          User Name
        </label>
        <input
          className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
          id="username"
          type="text"
          value={data.username}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap- md:gap-4">
        <label htmlFor="liscens" className="font-medium text-xl">
          Liscens Number
        </label>
        <input
          className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
          id="liscens"
          type="text"
          value={data?.liscens}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col  md:flex-row items-center gap- md:gap-4">
        <label htmlFor="city" className="font-medium text-xl">
          City
        </label>
        <input
          className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1  w-[4rem]"
          id="city"
          type="text"
          value={data?.city}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10  text-sm">
        <button
          type="submit"
          className="rounded-md box-border py-2 px-6 w-fit transition-all duration-250 bg-cyan-600 hover:bg-cyan-500 "
        >
          Save Changes
        </button>
        <button
          type="button"
          className="rounded-md box-border p-2 pl-6 pr-6 transition-all duration-250 bg-cyan-600 hover:bg-cyan-500 "
          onClick={handlDelete}
        >
          Delete The Account
        </button>
        <button
          className="rounded-md box-border p-2 lg:pl-16 lg:pr-16  pl-8 pr-8 transition-all duration-250 bg-cyan-600 hover:bg-cyan-500 "
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TherapistProfileForm;
