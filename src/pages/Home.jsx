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
    <div className="Home grid gap-52">
      <NavBar />

      <div className="hero relative">
        <img
          src={hero_banner}
          alt=""
          className="banner-img w-full h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover
          [mask-image:linear-gradient(to_right,transparent,black_75%)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
        />

        <div className="hero-caption absolute w-full pl-[6%] bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-24">
          <img
            src={hero_title}
            alt=""
            className="caption-img w-[80%] sm:w-[65%] md:w-[50%] lg:w-[35%] max-w-[420px] mb-4 md:mb-7"
          />

          <p className="max-w-[90%] sm:max-w-[80%] md:max-w-[600px] text-sm md:text-base mb-4 md:mb-5">
            Descovering his ties to a secret ancient order, a young man living
            in morden Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>

          <div className="hero-btns flex flex-wrap mb-8 md:mb-12 gap-2 md:gap-3">
            <button
              className="px-4 md:px-6 py-2 md:py-3 flex text-black items-center bg-white
              text-sm md:text-base gap-2 font-semibold rounded-md
              hover:bg-[#ffffffbf] transition duration-500"
            >
              <img src={play_icon} alt="" className="w-4 md:w-6" />
              PLAY
            </button>

            <button
              className="px-4 md:px-6 py-2 md:py-3 flex text-white items-center bg-[#6d6d6eb3]
              text-sm md:text-base gap-2 font-semibold rounded-md
              hover:bg-[#6d6d6e66] transition duration-500"
            >
              <img src={info_icon} alt="" className="w-4 md:w-6" />
              MORE INFO
            </button>
          </div>
          <div className="absolute ">
            <TitleCard />
          </div>
        </div>
      </div>

      <div className="more-cards pl-[6%] mt-10 md:mt-20 lg:mt-40">
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
