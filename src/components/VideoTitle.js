import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video px-6 absolute text-white pt-[15%] pl-[5%] bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='w-1/4 py-4'>{overview}</p>
        <div className='flex gap-4'>
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-opacity-50 hover:text-white"> ➤ Play</button>
        <button className="bg-gray-400 bg-opacity-50 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle