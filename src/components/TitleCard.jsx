import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function TitleCard({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU5ZGVkZTA5Yzc4YjM0NTRlZmMwMWZmMDBjOGI0YiIsIm5iZiI6MTc3MTIyMjE0My40NjUsInN1YiI6IjY5OTJiNDdmOTQ5NDc4YWEzNDZmNmQyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G6qlotbQadM7mHqfN9zFBmZQb1_v0foP5047uV5L7m4",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    const slider = cardsRef.current;
    slider.addEventListener("wheel", handleWheel);

    return () => slider.removeEventListener("wheel", handleWheel);
  }, [category]);

  return (
    <div className="mt-10 md:mt-14 mb-6">
      {/* Title */}
      <h1 className="mb-3 text-base sm:text-lg md:text-xl font-semibold">
        {title ? title : "Popular on Netflix"}
      </h1>

      {/* Scroll Container */}
      <div
        ref={cardsRef}
        className="flex gap-3 md:gap-4 overflow-x-auto  [&::-webkit-scrollbar]:hidden"
      >
        {apiData.map((card) => (
          <Link
            to={`/player/${card.id}`}
            className="relative flex-shrink-0"
            key={card.id}
          >
            <img
              src={card.poster_path ? IMG_URL + card.poster_path : ""}
              alt=""
              className="
              w-[130px]
              sm:w-[160px]
              md:w-[190px]
              lg:w-[220px]
              xl:w-[240px]
              rounded-md
              cursor-pointer
              hover:scale-105
              transition duration-300
              "
            />

            <p
              className="
              absolute bottom-2 right-2
              text-[10px] sm:text-xs md:text-sm
              text-white font-semibold
              bg-black/60 px-2 py-[2px] rounded
              "
            >
              {card.original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCard;
