import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import SearchOptions from './SearchOptions';


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    return (
        <SearchOptions userSearch={searchValue}/>
    )
    }

   /*
    axios.get('https://api.spotify.com/v1/search', {
    params: {
        'q': 'whats poppin',
        'type': 'track',
        'market': 'ES',
        'limit': '10',
        'offset': '5'
    },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQByS47kupbINvctOh1sckBmid_iRC4E4VU3p8jKY2k0TaalbThzH8P7l-RCjaWFuQjCq1ZOP3D1Vij2izXTT_1SMPUjGeCeZI9gVZGOOipbZ7Z5S6DVbS-7aJ4UUEdSoGvekq_sSAz1nJrj4Q926tDWvAciPMRWzdWqB4DrlRUetheqqZJgTqfuPaLwXwY'
    }
}).then(response => {console.log(response.data)})
*/
    console.log(searchValue)
  return (
    <div>
    <input type="text" value={searchValue} onChange={handleInputChange}/>
    {searchValue}
    <SearchOptions userSearch={searchValue}/>
    </div>
  )
}

export default SearchBar