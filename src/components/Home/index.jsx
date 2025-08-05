import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const Home = () => {

  const [songs, setSongs] = useState([])

  useEffect(()=> {
    fetch('https://robo-music-api.onrender.com/music/my-api')
    .then(response => response.json())
    .then(data => {
      setSongs(data)
      console.log(data)
    })
    .catch(console.log('Could not fetch'));
  }, [songs]);

  return (
    <div className='parent'>
        {songs.map((song, index )=> (
          <Link key={index} to={`/song/details/${song.id}`}>
            <img src={song.songImage} alt="" />;
            <h3>{song.songTitle}</h3>;
            <p>{song.artistName}</p>;
            <audio src={song.songUrl}></audio>
          </Link>
        ))}
    </div>
  );
}

export default Home