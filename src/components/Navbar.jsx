import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../features/users/usersSlice";
import newRequest from "../utils/newRequest";

function Navbar() {
  const location = useLocation();
  const { currentUser } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contactus",
    },
  ];
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logOut = async () => {
    await newRequest.post("auth/logOut");
    dispatch(getUser(null));
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {/* big screens navbar */}
      <nav className="flex sticky z-50 top-0 justify-between items-center bg-[#EAF8F9] py-4 px-10 max-md:hidden">
        <div
          className="flex gap-2 items-center cursor-pointer "
          onClick={() => navigate("/")}
        >
          <img src="/logo.svg" alt="logo" />
          <h1 className="font-bold text-5xl uppercase">Heal Me</h1>
        </div>
        <div className="flex gap-6 items-center">
          {links.map((link) => (
            <Link
              className={
                location?.pathname === link.path
                  ? "text-yellow-400 font-semibold text-lg"
                  : "text-gray-400 font-semibold text-lg"
              }
              key={link.name}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
          {!currentUser ? (
            <button
              className="bg-cyan-500 py-2 hover:bg-cyan-400  px-4 rounded-md font-medium"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          ) : (
            <>
              <Link to="/profile">
                <img
                  src={currentUser.img ? currentUser.img : "/avatar.svg"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
              </Link>
              <button
                className="bg-cyan-500 hover:bg-cyan-400 py-2  px-4 rounded-md font-medium"
                onClick={() => logOut()}
              >
                log out
              </button>
            </>
          )}
        </div>
      </nav>
      {/* small screen navabar */}
      <nav className="hidden sticky top-0  z-50  max-md:flex bg-[#EAF8F9] py-4 px-5 justify-between items-center">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.svg" alt="logo" />
          <h1 className="font-bold text-5xl">Heal Me</h1>
        </div>
        <FaBars
          className="text-3xl mr-4 cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        />
        <div
          className={`absolute transition-all top-0  z-50 h-screen ease-in-out duration-300 rounded-l-lg  bg-[#a9edf1] w-[50%] ${
            openNav ? "right-0" : "-right-[1000%]"
          }`}
        >
          <FaBars
            className="text-3xl  m-8 cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          />
          <div className=" flex flex-col ml-8 mt-24  gap-4">
            {links.map((link) => (
              <Link
                className={
                  location?.pathname === link.path
                    ? "text-yellow-400 font-semibold text-lg"
                    : "text-gray-400 font-semibold text-lg"
                }
                key={link.name}
                to={link.path}
                onClick={() => setOpenNav(!openNav)}
              >
                {link.name}
              </Link>
            ))}
            {!currentUser ? (
              <button
                className=" text-sm 
              px-6 py-3
              rounded-md box-border 
              font-semibold m-auto
              bg-cyan-500 hover:bg-cyan-400
              cursor-pointer"
                onClick={() => {
                  navigate("/login"), setOpenNav(!openNav);
                }}
              >
                Login
              </button>
            ) : (
              <>
                <img
                  src={currentUser.img ? currentUser.img : "/avatar.svg"}
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-contain cursor-pointer"
                  onClick={() => {
                    navigate("/profile"), setOpenNav(!openNav);
                  }}
                />
                <button
                  className=" absolute bottom-1 left-0 right-0 lg:text-xl md:text-base text-sm 
                lg:ml-0 lg:mb-10 lg:px-16 
                px-6 py-3
                rounded-md box-border 
                font-semibold 
                bg-cyan-500 hover:bg-cyan-400
                cursor-pointer  "
                  onClick={() => logOut()}
                >
                  log out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
