import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, selectUser } from "../features/users/usersSlice";
import newRequest from "../utils/newRequest";

function ThanksPage() {
  const navigate = useNavigate()
  const {tickets} = useParams()
  const { currentUser } = useSelector(selectUser);
  const dispatch = useDispatch();

  const creatReq = async () => {
    try {
      const res = await newRequest.put(`purchase/update`, {
        id: currentUser._id,
        tickets: tickets
      });
      
      
      dispatch(getUser(res.data));
      
      setTimeout(()=>{
         navigate('/')
      },3000)
      
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    creatReq()
  }, [])
  


  return (
    <main className="flex-1 flex flex-col  gap-6 px-10 md:px-24 py-10 ">
      <h1 className="text-5xl  font-medium uppercase mb-6">THANK YOU!</h1>
      <p className="w-[80%] text-lg text-gray-600 font-medium pb-10">
        
      {tickets} Tickets added to your account successfully
      </p>
      
    </main>
  );
}

export default ThanksPage;
