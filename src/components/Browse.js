import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import NowWatching from "./NowWatching";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const movieDetails = useSelector((store) => store.movies);
  //Fetch data from TMDB API and update store - use CustomHook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        movieDetails.isWatchingMovie ? 
        <NowWatching movieId={movieDetails.movieID} />:
        <GPTSearch />
      ) : movieDetails.isWatchingMovie ? (
        <NowWatching movieId={movieDetails.movieID} />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*       
      MainContainer
        -VideoBackground
        -VideoTitle
      SecondaryContainer
        -MoviesList * n
          -Cards * n
  */}
    </div>
  );
};

export default Browse;
