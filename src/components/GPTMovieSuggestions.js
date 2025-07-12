import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt);
  if (!movieNames) {
    return <div>No movie suggestions available.</div>
  }  

  return (
    <div className='bg-black bg-opacity-75 p-4 rounded-lg m-4'>    
      {movieNames.map((movieName,index)=> <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}
    </div>
  )
}

export default GPTMovieSuggestions