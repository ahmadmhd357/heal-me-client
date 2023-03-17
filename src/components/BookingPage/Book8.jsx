import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../../features/users/usersSlice";
import newRequest from "../../utils/newRequest";

function Book8({ data,setSteps }) {
  const { currentUser } = useSelector(selectUser);
  const dispatch = useDispatch();
  
  const onSubmit = async () => {
    try {
     await newRequest.put('/users/book',{id:currentUser._id, appointment:data})
     const res = await newRequest.get('users/user',{id:currentUser._id})
     dispatch(getUser(res.data));
     alert('success')
    } catch (error) {
      alert(error.response.data)
    }
  };
  return (
    <div className=" w-fit m-auto shadow-[0_4px_12px_rgba(0,0,0,0.12)] p-5 flex flex-col items-center gap-6 justify-center rounded-md ">
      <h1 className="font-medium text-xl">Submit Appointment?</h1>

      <p className="w-[90%] text-lg text-gray-800 font-medium">
        Please be aware that this action will cost you a ticket!
      </p>
       <div className="flex justify-between w-full">

      <button
        className="bg-cyan-400 py-2 uppercase  px-4 rounded-md font-medium"
        onClick={onSubmit}
      >
        submit
      </button>
      
      <button
        className="bg-cyan-400 py-2 uppercase self-start px-4 rounded-md font-medium"
        type="button"
        onClick={()=>setSteps(7)}
      >
        Back
      </button>
      
       </div>
    </div>
  );
}

export default Book8;
