import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    // <div className='bg-purple-400'>
        <img alt='Movie Card' src={IMG_CDN_URL + posterPath} className='p-2 w-48'/>
    // </div>
  )
}

export default MovieCard