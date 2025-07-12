import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import NowWatching from "./NowWatching";
import { useDispatch } from "react-redux";
import { addTrailerVideo, watchingMovie } from "../utils/moviesSlice";
import { toggleGPTSearchView } from "../utils/gptSearchSlice";

const MovieCard = ({ movie }) => {
  const [wantToWatch, setWantToWatch] = useState(null);
  const dispatch = useDispatch();
  const [movieId, setMovieId] = useState(null);
  if (!movie.poster_path) return null;

  const handleClickOnCard = () => {
    // dispatch(toggleGPTSearchView(false)); // toggle gpt search: false then in Browse Page we'll chk if isWAtching is true=> NowWatching else MainPage of browse
    dispatch(addTrailerVideo(null));
    dispatch(watchingMovie(movie.id));
    console.log("clicked card", movie.id);
  };
  return (
    <>
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + movie.poster_path}
        className="p-2 w-32 sm:w-36 md:w-40"
        onClick={handleClickOnCard}
      />
    </>
  );
};

export default MovieCard;
