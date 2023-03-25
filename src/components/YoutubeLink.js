import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import YoutubePlayer from './YoutubePlayer'

const YoutubeLink = ({song, artist}) => {
   // var api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=song"+song+"post&key=AIzaSyBJhqNVgA_EU_wkRTRsMpzOhWw_5fEUuoA"

    var api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=song"+song+artist+"&safeSearch=none&topicId=%2Fm%2F04rlf&videoLicense=any&key=AIzaSyBJhqNVgA_EU_wkRTRsMpzOhWw_5fEUuoA" 
   // console.log(api)

    api = api.replaceAll(' ', '')

    ///console.log(api + " no spaces")

    console.log("api running")

    const [videoId, setVideoId] = useState("")
   

  

useEffect(() => {

    axios.get(api)
    .then(response => {
        console.log(response.data)
        setVideoId(response.data.items[0].id.videoId)

    })
    console.log("in useeffect")

  }, [song]);
    
    



  return (
    <div>YoutubeLink
    <YoutubePlayer id={videoId}/>
    </div>
  )
}

export default YoutubeLink