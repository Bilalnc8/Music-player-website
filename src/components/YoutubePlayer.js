import React from 'react'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

const YoutubePlayer = ({id}) => {
  console.log(id+"dkekk")
  var idk = "https://www.youtube.com/watch?v="+id
  console.log(idk)
  return (
    <div>YoutubePlayerdcscs
    {<ReactPlayer 
    url={idk}
    playing={true}
    width='500px'
    height='503px'
    controls={true}
  />}
    </div>
  )
}

export default YoutubePlayer