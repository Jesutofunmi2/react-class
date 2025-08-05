import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Song = () => {
    let { id } = useParams();

    const [songs, setSongs] = useState([]);

  useEffect(()=> {
    fetch('https://robo-music-api.onrender.com/music/my-api')
    .then(response => response.json())
    .then(data => {
      setSongs(data)
      //const result = songs?.find((item) => item?.id);
      console.log(data);
    })
    .catch(console.log('Could not fetch'));
  }, []);


  return (
    <div className='parent' style={{ margin: "120px"}}>
        {id}
       {/* <img src={songs.songImage} alt="" />;
            <h3>{songs.songTitle}</h3>;
            <p>{songs.artistName}</p>;
        <audio src={songs.songUrl}></audio> */}
    </div>
  )
}

export default Song