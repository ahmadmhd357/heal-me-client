import React from "react";

function UserProfileForm({
  onSubmit,
  data,
  navigate,
  handleInputChange,
  handlDelete,
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col md:flex-row items-center gap- md:gap-4">
        <label htmlFor="fullName" className="font-medium text-xl">
          Full Name
        </label>
        <input
          className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
          id="fullName"
          type="text"
          value={data.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap- md:gap-4">
        <label htmlFor="education" className="font-medium text-xl">
          Education Level
        </label>
        <select
          className="bg-gray-50 border border-SubTexts cursor-pointer text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
          id="education"
          type="text"
          value={data?.education}
          onChange={handleInputChange}
        >
          <option value="formal">Formal</option>
          <option value="primary">Primary</option>
          <option value="secondary ">Secondary </option>
          <option value="vocational">Vocational</option>
          <option value="bachelors">Bachelor's degree</option>
          <option value="master">Master's degree</option>
          <option value="doctorate">Doctorate</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row items-center gap- md:gap-4">
        <label htmlFor="hobbies" className="font-medium text-xl">
          Hobbies
        </label>
        <input
          className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
          id="hobbies"
          type="text"
          value={data?.hobbies}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col  md:flex-row items-center gap- md:gap-4">
        <label htmlFor="family" className="font-medium text-xl">
          Family Size
        </label>
        <input
          className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1  w-[4rem]"
          id="family"
          type="text"
          value={data?.family}
          onChange={handleInputChange}
        />
        <span className="font-medium text-xl">Member(s)</span>
      </div>
      <div className="flex flex-col  md:flex-row items-center gap- md:gap-4">
        <label htmlFor="gender" className="font-medium text-xl">
          Gender
        </label>
        <select
          className="bg-gray-50 border border-SubTexts cursor-pointer text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[10rem] w-[16em]"
          id="gender"
          type="text"
          value={data?.gender}
          onChange={handleInputChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other ">Other </option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row items-center gap- md:gap-4">
        <label htmlFor="birth" className="font-medium text-xl">
          Birth Date
        </label>
        <input
          className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
          id="birth"
          type="date"
          value={data?.birth}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap- md:gap-4">
        <label htmlFor="phone" className="font-medium text-xl">
          Phone Number
        </label>
        <input
          className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
          id="phone"
          type="tel"
          value={data?.phone}
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

export default UserProfileForm;
