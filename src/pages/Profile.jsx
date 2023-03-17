import axios from "axios";
import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TherapistProfileForm from "../components/TherapistProfileForm";
import UserProfileForm from "../components/UserProfileForm.jsx";
import { getUser, selectUser } from "../features/users/usersSlice";
import newRequest from "../utils/newRequest";

function Profile() {
  const { currentUser } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [data, setData] = useState({
    fullName: currentUser?.firstName + " " + currentUser?.lastName,
    education: currentUser?.education || "",
    hobbies: currentUser?.hobbies || "",
    family: currentUser?.family || "",
    gender: currentUser?.gender || "",
    birth: currentUser?.birth || "",
    phone: currentUser?.phone || "",
    img: currentUser?.img || "",
  });
  const [therapistData, settherapistData] = useState({
    username: currentUser?.username,
    liscens: currentUser?.liscens,
    city: currentUser?.city,
    img: currentUser?.img,
  });

  const uploadImg = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "therapist");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxfgqzyom/image/upload",
        data
      );
      const { url } = res.data;
      setImg(url);
      return url;
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = (e) => {
    currentUser?.isTherapist
      ? settherapistData((prev) => {
          return { ...prev, [e.target.id]: e.target.value };
        })
      : setData((prev) => {
          return { ...prev, [e.target.id]: e.target.value };
        });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = currentUser?.isTherapist
        ? await newRequest.put(`therapist/profile`, {
            ...therapistData,
            id: currentUser._id,
            img: img ? img : currentUser.img,
          })
        : await newRequest.put(`users/profile`, {
            ...data,
            id: currentUser._id,
            img: img ? img : currentUser.img,
          });
      dispatch(getUser(res.data));
      alert("your profile updated successfully.");
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handlDelete = async () => {
    if (window.confirm("Are you sure you want to delete this account")) {
      try {
        await newRequest.post("users/delete", {
          id: currentUser._id,
        });
        alert("your account deleted successfully");
        dispatch(getUser(null));
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <main className="h-full flex-1 px-10 md:px-24 py-10 items-center  flex flex-col md:flex-row md:items-start gap-6  justify-center">
      <section className="relative ">
        <img
          src={img || currentUser?.img || "/avatar.svg"}
          alt="avatar"
          className="  w-80 h-80 rounded-full z-10  object-cover"
        />
        <label className="cursor-pointer" htmlFor="img">
          <BsCircle className="text-5xl  absolute bottom-0 left-[80%] z-20" />
          <img
            src="./edit.svg"
            alt="edit"
            className="absolute bottom-1 left-[82%] w-10"
          />
        </label>
        <input type="file" className="hidden" id="img" onChange={uploadImg} />
      </section>
      <section className="flex flex-col items-center  gap-6">
        <h1 className="font-bold uppercase text-5xl">Profile Info</h1>
        {currentUser?.isTherapist ? (
          <TherapistProfileForm
            onSubmit={onSubmit}
            data={therapistData}
            navigate={navigate}
            handleInputChange={handleInputChange}
            handlDelete={handlDelete}
          />
        ) : (
          <UserProfileForm
            onSubmit={onSubmit}
            data={data}
            navigate={navigate}
            handleInputChange={handleInputChange}
            handlDelete={handlDelete}
          />
        )}
        <h1 className="font-bold uppercase m-auto text-5xl">Appointments  {currentUser?.isTherapist ? '' : ' & Tickets'}</h1>
        <div className="flex justify-around items-center gap-10  m-auto ">
          <div className="flex flex-col gap-2 mt-10 text-sm self-end ">
            <button
              // disabled={!currentUser}
              type="button"
              onClick={() => navigate("/appointments")}
              className="rounded-md box-border p-2 px-6 uppercase  transition-all duration-250 bg-cyan-600 hover:bg-cyan-500 "
            >
              appointments
            </button>
          </div>
         { currentUser?.isTherapist ? <div> </div> : <div className="flex flex-col  gap-2 mt-10  text-sm">
            <span className="font-medium text-xl">
              {currentUser?.tickets} Tickets Remaining
            </span>
            <button
              // disabled={!currentUser}
              type="button"
              onClick={() => navigate("/tickets")}
              className="rounded-md box-border p-2 pl-6 pr-6 transition-all duration-250 bg-cyan-600 hover:bg-cyan-500 "
            >
              BUY TICKETS
            </button>
          </div>}
        </div>
      </section>
    </main>
  );
}

export default Profile;
