import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import requests from "../axios/requests";
import "../App.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "240",

    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    //   When user clicks on the movie picture
    // console.table(movie?.title)
    if (trailerUrl) {
      //   If trailer
      setTrailerUrl("");
    } else {
      // Search for movie trailer full url
      movieTrailer(
        movie?.title ||
          movie?.name ||
          movie?.original_name ||
          movie?.genre_ids ||
          " "
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v")); // urlParams gives us everthing after the ? in the Url
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          {/* div.banner__buttons>button.banner_buttons*2  ==> shortcut  */}
          <button className="banner__button" onClick={() => handleClick(movie)}>
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {movie?.overview}
          {truncate(movie?.overview, 100)}
        </h1>
      </div>
      <div className="banner--fateBottom"></div>
    </header>
  );
}

export default Banner;
