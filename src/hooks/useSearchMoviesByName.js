import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import openai from "../utils/openai";
import { addGptMovies } from "../utils/gptSearchSlice";
import { useEffect } from "react";

const useSearchMoviesByName = (searchText) => {
  console.log(searchText);
  const dispatch = useDispatch();
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
    console.log(searchText);

    // Make an API call to OpenAI's GPT model and get Movie Results

    const gptSearchQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText +
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
    dispatch(
      addGptMovies({ movieNames: movieNames, movieResults: gptMovieResults })
    );
  };

  useEffect(() => {
    searchText && handleGptSearchClick();
  }, []);
};

export default useSearchMoviesByName;
