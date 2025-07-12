import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSearchSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieByNameTMDB = async (movieName) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await response.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // Make an API call to OpenAI's GPT model and get Movie Results

    const gptSearchQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me name of 5 movies, comma separated like examplesult given ahead. Example Result: Black Friday, Rahsya, Gangs of Wasseypur, Shaurya, Gulaal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptSearchQuery }],
      model: "google/gemma-3n-e4b-it:free",
    });
    console.log(gptResults?.choices?.[0]?.message?.content);
    if (!gptResults?.choices?.[0]?.message?.content) {
      alert("No results found. Please try a different query.");
      return;
    }
    //Andaz Apna Apna, Chalti Ka Naam Gaadi, Golmaal, Karma, Main Khiladi Tu Anari
    const movieNames = gptResults?.choices?.[0]?.message?.content.split(","); //['Andaz Apna Apna', 'Chalti Ka Naam Gaadi', 'Golmaal', 'Karma', 'Main Khiladi Tu Anari']
    console.log(movieNames);
    const promiseArray = movieNames.map((movieName) =>
      searchMovieByNameTMDB(movieName)
    ); // [Promise, Promise, Promise, Promise, Promise]
    const gptMovieResults = await Promise.all(promiseArray);
    dispatch(addGptMovies({movieNames: movieNames, movieResults: gptMovieResults}));
  };
  return (
    <div className="flex justify-center">
      <form
        className="w-10/12 sm:7/12 md:w-1/2 grid grid-cols-12 sm:gap-0 md:gap-2 bg-black bg-opacity-75"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Search for movies, actors, or genres..."
          className="p-2 m-2 sm:m-4 col-span-9 text-sm"
        />
        <button
          className="p-2 bg-red-600 text-sm sm:text-sm text-white rounded-lg m-2 sm:m-4 col-span-3"
          onClick={handleGptSearchClick}
        >
          {/* {lang.langKey.search} Won't work as can't recognize langKey */}
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
