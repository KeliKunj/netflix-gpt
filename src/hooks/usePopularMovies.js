import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMoviesAPI = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
    const json = await data.json();    
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMoviesAPI();
  }, []);
};

export default usePopularMovies;
