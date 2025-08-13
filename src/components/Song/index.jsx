import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Song = () => {
  let { id } = useParams();

  const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSongs] = useState(null);

  useEffect(() => {
    fetch("https://robo-music-api.onrender.com/music/my-api")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
        const music = songs?.find((element) => element?.id === parseInt(id));
       setCurrentSongs(music);
      })
      .catch(console.log("Could not fetch"));
  }, [id, songs]);

  return (
    <>
      {currentSong === null ? (
         <div className="parent" style={{ margin: "120px" }}>
        <h1>Loading...</h1>
        </div>
      ) : (
        <div className="parent" style={{ margin: "120px" }}>
          <img src={currentSong?.songImage} alt="" />
          <h3>{currentSong?.songTitle}</h3>
          <p>{currentSong?.artistName}</p>
          <audio src={currentSong?.songUrl}></audio>
        </div>
      )}
    </>
  );
};

export default Song;
