import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white w-full pt-[23%] sm:pt-[12%] md:pt-0">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={moviesData.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={moviesData.popularMovies} />
        <MovieList title={"Top Rated"} movies={moviesData.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={moviesData.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

{/*       
      MovieList - Popular Movies
        MovieCard * n
      MovieList - Now Playing Movies
      MovieList - Trending Movies
      MovieList - Horror Movies
      MovieList - Comedy Movies
      MovieList - Action Movies
*/}