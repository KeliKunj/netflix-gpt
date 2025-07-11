import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {

    const trailer = useSelector((store) => store.movies?.trailerVideo);
    useTrailerVideo(movieId);
    
  return (    
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"     
        allowFullScreen
        frameBorder="0"  
      ></iframe>    
  );
};

export default VideoBackground;
