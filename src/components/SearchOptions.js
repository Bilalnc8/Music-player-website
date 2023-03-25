import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import YoutubePlayer from './YoutubePlayer';
import YoutubeLink from './YoutubeLink';


const SearchOptions = ({userSearch}) => {

var client_id = '4533e661a9614d76b9b69b22938763eb';
var client_secret = '8e32f304936c48738eae0c253f0355dd';

var [tokenSpotify, setTokenSpotify] = useState(null);
var [albumImage, setAlbumImage] = useState("");
var [results, setResults] = useState([]);
const music = []
var song;

var [nameOfSong, setNameOfSong] = useState("")
const [nameOfArtist, setNameOfArtist] = useState("")

var artist;


useEffect(() => {

    fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
.then(r => r.json())
.then(r => {
    setTokenSpotify(r.access_token)
})

    axios.get('https://api.spotify.com/v1/search', {
        params: {
            'q': userSearch,
            'type': 'track',
            'market': 'ES',
            'limit': '6',
            'offset': '0'
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenSpotify}
    }).then(response => {
        setResults(response.data.tracks.items.map(items => { 
            return(items)
        }))
      
    })
  }, [userSearch]);



  const MusicClick = (nameOfSong, nameOfArtist) => {
 
    setNameOfSong(nameOfSong)
    console.log(nameOfSong)
    
    setNameOfArtist(nameOfArtist)
    console.log(nameOfArtist)
   


    // console.log(nameOfSong)
    console.log("hi")
    //music.push(nameOfSong)
   // console.log(music)

  }
//<img src={results.album.images[2].url}/>
    
  return (
    <div>SearchOptionswsq2132
    

    {results.map((results) => {
        //console.log(results.album.images[2].url)
        return(
            <div>
            <button className={results.name} onClick={(WrappedComponent) => {
                   
                   // console.log(nameOfSong)
                    song = results.name
                    console.log("song " + song)
                    artist = results.artists[0].name
                    MusicClick(song, artist)
                
            }}>
          {results.name}
          <img src={results.album.images[2].url}/>
          </button>
          </div>
        )
      })}
      {console.log("ran")}
    {<YoutubeLink song={nameOfSong} artist={nameOfArtist}/>}
    </div>
  )
}

export default SearchOptions