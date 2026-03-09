import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import cards_data from "../assets/cards/Cards_data";
import { Link, useLocation } from "react-router";
import { useNavigate } from "react-router";

function SearchMovie() {
  const location = useLocation();
  const query = location.state?.query;
  const [apiData, setApiData] = useState([]);
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU5ZGVkZTA5Yzc4YjM0NTRlZmMwMWZmMDBjOGI0YiIsIm5iZiI6MTc3MTIyMjE0My40NjUsInN1YiI6IjY5OTJiNDdmOTQ5NDc4YWEzNDZmNmQyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G6qlotbQadM7mHqfN9zFBmZQb1_v0foP5047uV5L7m4",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-black text-white">
        {/* Search Results */}

        <div className="px-[6%] mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {apiData.map((card, index) => (
              <Link
                to={`/player/${card.id}`}
                key={card.id}
                className="cursor-pointer mt-20"
              >
                <img
                  src={card.poster_path ? IMG_URL + card.poster_path : null}
                  alt={card.title}
                  className="rounded-md w-full hover:scale-105 transition duration-300"
                />
                <h1 className="mt-2 text-sm font-semibold">{card.title}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchMovie;
