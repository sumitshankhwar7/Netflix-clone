import React, { useState } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { Link, useNavigate } from "react-router";

function NavBar() {
  const [text, setText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search", { state: { query: text } });
    setText("");
  };

  return (
    <div className="w-full fixed top-0 flex justify-between items-center text-[#e5e5e5] py-3 px-[6%] z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <Link to="/">
          <img src={logo} className="w-20 lg:w-24 flex-shrink-0" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-2 xl:gap-5 items-center">
          <Link to="/">
            <li className="cursor-pointer whitespace-nowrap text-xs xl:text-lg">
              Home
            </li>
          </Link>

          <li className="cursor-pointer whitespace-nowrap text-xs xl:text-lg">
            TV Shows
          </li>
          <li className="cursor-pointer whitespace-nowrap text-xs xl:text-lg">
            Movies
          </li>
          <li className="cursor-pointer whitespace-nowrap text-xs xl:text-lg">
            New & Popular
          </li>
          <li className="cursor-pointer whitespace-nowrap text-xs xl:text-lg">
            My List
          </li>
          <li className="cursor-pointer whitespace-nowrap text-xs xl:text-lg">
            Browse by Languages
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 xl:gap-4">
        {/* Desktop Search */}
        <div className="flex items-center bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Movie"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-7 w-24 xl:w-48  p-2 placeholder:text-xs xl:placeholder:text-base  outline-none text-black"
          />

          <img
            src={search_icon}
            onClick={handleSearch}
            className="cursor-pointer w-6 bg-black p-1 filter invert"
          />
        </div>

        <p className="hidden lg:block">Children</p>

        <img src={bell_icon} className="cursor-pointer w-5 hidden md:block" />

        {/* Profile */}
        <div className="navbar-profile group flex items-center gap-2 cursor-pointer relative">
          <img src={profile_img} className="rounded-md w-8" />
          <img src={caret_icon} className="hidden md:block" />

          <div className="dropdown hidden absolute group-hover:flex top-full right-0 bg-[#191919] w-40 p-4 rounded-sm flex-col">
            <p className="text-[13px] cursor-pointer underline">
              Sign Out of Netflix
            </p>
          </div>
        </div>

        {/* Hamburger */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-5 py-6 lg:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
          <p>Browse by Languages</p>
        </div>
      )}
    </div>
  );
}

export default NavBar;
