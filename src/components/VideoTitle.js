import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video px-6 absolute text-white pt-[10%] sm:pt-[15%] pl-[5%] bg-gradient-to-r from-black'>
        <h1 className='text-xl sm:text-3xl md:text-5xl font-bold w-[45%]'>{title}</h1>
        <p className='sm:w-1/3 md:w-1/4 py-4 hidden md:block'>{overview.length > 200 ? overview.slice(0, 200) + '...' : overview}</p>
        <div className='flex gap-4 mt-4 sm:mt-10 md:mt-2'>
        <button className="bg-white text-black p-1 sm:px-4 sm:py-2 rounded-md hover:bg-opacity-50 hover:text-white"> ➤ Play</button>
        <button className="bg-gray-400 bg-opacity-50 text-white p-1 sm:px-4 sm:py-2 rounded-md hover:bg-white hover:text-black">More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle