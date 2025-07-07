import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //Fetch data from TMDB API and update store - use CustomHook
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <div className="pt-24">
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
