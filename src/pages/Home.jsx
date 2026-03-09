import React from "react";
import NavBar from "../components/NavBar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCard from "../components/TitleCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="hero relative">
        <img
          src={hero_banner}
          alt=""
          className="banner-img w-full  [mask-image:linear-gradient(to_right,transparent,black_75%)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
        />
        <div className="hero-caption  absolute w-full pl-[6%] bottom-0 top-60">
          <img
            src={hero_title}
            alt=""
            className="caption-img w-[90%] max-w-[420px] mb-7"
          />
          <p className="max-w-[700px] text-base mb-5">
            Descovering his ties to a secret ancient order, a young man living
            in morden Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns flex mb-12 gap-1">
            <button
              className="px-6 py-3 flex text-black items-center bg-white text-base gap-2 font-semibold rounded-md
            hover:bg-[#ffffffbf] transition duration-500"
            >
              <img src={play_icon} alt="" className=" w-6" />
              PLAY
            </button>
            <button
              className="px-6 py-1 flex text-white items-center bg-[#6d6d6eb3] text-base gap-2 font-semibold  rounded-md
            hover:bg-[#6d6d6e66] transition duration-500"
            >
              <img src={info_icon} alt="" className="  w-10" />
              MORE INFO
            </button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards pl-[6%] mt-52">
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCard title={" Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
