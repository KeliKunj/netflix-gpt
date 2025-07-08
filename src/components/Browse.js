import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  //Fetch data from TMDB API and update store - use CustomHook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <div className="pt-[66px]">
      <MainContainer />
      <SecondaryContainer />
      </div>
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
