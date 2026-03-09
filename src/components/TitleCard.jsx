import React, { useEffect, useRef, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";

function TitleCard({ title, category, sumit }) {
  const [apiData, setApiData] = useState([]);

  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  // cards scroll feture add this point
  const cardsRef = useRef();

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
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titleCarda mt-14 mb-8">
      <h1 className="mb-3 text-lg font-semibold">
        {" "}
        {title ? title : "Popular on Netflix"}
      </h1>

      {/* Scroll Container */}
      <div
        className="card-list flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        ref={cardsRef}
      >
        {apiData.map((card, index) => (
          <Link
            to={`/player/${card.id}`}
            className="card relative flex-shrink-0"
            key={index}
          >
            <img
              src={card.poster_path ? IMG_URL + card.poster_path : ""}
              alt=""
              className="w-[240px] rounded-md cursor-pointer hover:scale-105 transition duration-300"
            />
            <p className="absolute bottom-3 right-3 text-md text-white font-semibold">
              {card.original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCard;
