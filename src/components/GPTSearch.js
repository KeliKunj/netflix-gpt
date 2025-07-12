import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">

        <img src={BG_URL} alt="gpt-background" className="h-screen object-cover md:w-screen" />
    </div>
      
      <div className="pt-[25%] md:pt-[8%] sm:pt-[10%]">
      <GPTSearchBar />
      <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
