import React, { useState, useEffect } from "react";
// imports DEFAULT(alias) export from axios.js
import axios from "../axios/axios";
import "../App.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

//rfce shortcut for creating functional component
const base_url = "https://image.tmdb.org/t/p/original/";
// Row component
function Row({ title, fetchUrl, isLargeRow }) {
  /* Creating a movie state (short term memory) */
  const [movies, setMovies] = useState([]);
  /* Creating a trailer state (short term memory) */
  const [trailerUrl, setTrailerUrl] = useState("");
  //   Pulling information from tmdb API when the pages loads
  useEffect(() => {
    //   Running async call
    async function fetchData() {
      // Waiting for the promise to come back with movie results, fetchURL(outside the code block)
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      // console.log(request.data.request);
      return request;
    }
    // if [empty], run once when the row loads, and dont run again
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "99%",
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
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v")); // urlParams gives us everthing after the ?
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* Container for movie rows */}
      <div className="row__posters">
        {/* several row poster */}
        {/* Looping through movies array API */}
        {movies.map(
          (movie) =>
            // this conditon will prevent dead link to display on the screen
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                // Setting up onClick event for trailer
                // All poster same size (row__poster) except if you are larger row, then use
                // isLargeRow
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {/* Embedding youtube movie trailers to show */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
