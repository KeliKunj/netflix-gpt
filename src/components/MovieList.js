import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {  
  return (
    <div className="">
      <div>
        <h1 className="text-white text-sm sm:text-lg mdtext-xl font-semibold pl-2">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
      {movies?.map((movie) => (        
        <MovieCard key={movie.id} movie={movie} />        
      ))}
      </div>
    </div>
  );
};

export default MovieList;
