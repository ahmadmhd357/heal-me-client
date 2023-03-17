import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FaPaperPlane } from "react-icons/fa";
import { BsTwitter, BsFacebook, BsGoogle } from "react-icons/bs";

function Footer() {
  const location = useLocation();
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

  return (
    <footer className="flex  sm:flex-row flex-col items-center gap-2 sm:justify-between py-4 px-10 bg-[#FEE89E]">
      <div className="flex flex-col items-center md:items-start gap-3">
        <h1 className="text-3xl font-medium">Subscribe</h1>
        <p className="text-gray-500 ">
          We'll never to spam you or share your email
        </p>
        <div className="flex rounded-md   border-gray-400 ">
          <input
            type="text"
            className="flex-1 pl-2 outline-none"
            placeholder="Enter your e-mail"
          />
          <button className="bg-cyan-500 py-2 px-3 text-center">
            <FaPaperPlane />{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              className={location?.pathname === link.path
              ? "text-slate-900 font-semibold text-lg"
              : "text-gray-400 font-semibold text-lg"
          }
              key={link.name}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-8 justify-center">
          <BsFacebook className="text-3xl cursor-pointer" />
          <BsTwitter className="text-3xl cursor-pointer" />
          <BsGoogle className="text-3xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
