import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useParams, useNavigate } from "react-router";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU5ZGVkZTA5Yzc4YjM0NTRlZmMwMWZmMDBjOGI0YiIsIm5iZiI6MTc3MTIyMjE0My40NjUsInN1YiI6IjY5OTJiNDdmOTQ5NDc4YWEzNDZmNmQyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G6qlotbQadM7mHqfN9zFBmZQb1_v0foP5047uV5L7m4",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then((res) => res.json())
      .then((res) => {
        const trailer =
          res.results.find(
            (video) =>
              video.type === "Trailer" &&
              video.site === "YouTube" &&
              video.name.toLowerCase().includes("official"),
          ) ||
          res.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          ) ||
          res.results[0];

        setApiData(trailer);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player h-screen flex flex-col items-center">
      <img
        src={back_arrow_icon}
        onClick={() => {
          navigate(-2);
        }}
        alt=""
        className="absolute top-5 left-5 w-14 cursor-pointer"
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
      <div className="player-info flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)} </p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
