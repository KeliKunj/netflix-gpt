import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="">
      <div>
        <h1 className="text-xl font-semibold pl-2">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
      {movies?.map((movie) => (
        <MovieCard posterPath={movie.poster_path} />
      ))}
      </div>
    </div>
  );
};

export default MovieList;
