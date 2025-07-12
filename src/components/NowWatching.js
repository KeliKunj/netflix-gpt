import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import useTrailerVideo from '../hooks/useTrailerVideo';
import { BG_URL } from '../utils/constants';

const NowWatching = ({movieId}) => {
    const movieDetails = useSelector(store=> store.movies);    
    console.log(movieDetails);
    
    if(!movieDetails.isWatchingMovie) return;
  return (
    <div className='pt-[15%] sm:pt-0'>
        <h1 className='font-bold text-3xl text-red-600 shadow-slate-700 shadow-2xl text-center hidden sm:block sm:pb-[1%] sm:pt-[8%] md:py-[2%] '>You are watching</h1>       
        <VideoBackground movieId={movieId}/>                  
    </div>    
  )
}

export default NowWatching