import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";

function NavBar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search", { state: { query: text } });
    setText("");
  };
  return (
    <>
      <div className="navbar w-full flex justify-between fixed text-[#e5e5e5] py-3 px-[6%] z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
        <div className="navbar-left flex items-center gap-10">
          <Link to={"/"}>
            <img src={logo} alt="" className="logo w-24" />
          </Link>
          <ul className="flex gap-5 ">
            <Link to={"/"}>
              <li className="cursor-pointer ">Home</li>
            </Link>
            <li className="cursor-pointer">TV Shows</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">New & Popular</li>
            <li className="cursor-pointer">My List</li>
            <li className="cursor-pointer ">Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar-right flex items-center gap-5  ">
          <input
            type="text"
            placeholder="Search Movie"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-8 w-full p-3 border-none outline-none rounded-md text-black"
          />

          <img
            src={search_icon}
            alt=""
            onClick={handleSearch}
            className="cursor-pointer absolute w-8 right-[270px] bg-black p-1 rounded filter invert "
          />

          <p>children</p>
          <img src={bell_icon} alt="" className="cursor-pointer w-5" />

          <div className="navbar-profile group flex items-center gap-3 cursor-pointer relative">
            <img src={profile_img} alt="" className="profile rounded-md" />
            <img src={caret_icon} alt="" />

            {/* Dropdown */}
            <div className="dropdown hidden absolute group-hover:flex top-full right-0  bg-[#191919] w-40 p-4 rounded-sm flex-col ">
              <p className="text-[13px] cursor-pointer underline">
                Sign Out of Netflix
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
