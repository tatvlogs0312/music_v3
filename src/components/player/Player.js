import React, { useEffect, useRef, useState } from "react";
import "./Player.css";
import ReactPlayer from "react-player";
import axios from "axios";

const baseURL = "http://localhost:8080";

export default function Player({ song, next, prev }) {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(true);

  const getArtist = (song) => {
    let artist = "";

    song.artists?.forEach((e, i) => {
      if (i > 0) {
        artist += ", ";
      }
      artist += e.name;
    });

    return artist;
  };

  const updateListen = () => {
    axios
      .put(`${baseURL}/song/update-listen/${song.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   updateListen();
  // }, [song.id]);

  useEffect(() => {
    setPlay(true);
  }, [song.id]);

  return (
    <div className="player">
      <div className="player-body">
        <div className="current-song">
          <div className={play ? "cover rotate" : "cover"}>
            <img src={`${baseURL}/file/image/${song.urlImage}`} alt="" />
          </div>
        </div>
      </div>
      <div className="song-info">
        <div className="song-details">
          <span className="song-name">{song.name}</span>
          <span className="song-artist">{getArtist(song) || "N/A"}</span>
        </div>
      </div>
      <div className="song-duration">
        <div className="song-time">
          <div className="song-progress">
            <ReactPlayer
              url={`${baseURL}/file/mp3/${song.urlMp3}`}
              playing={play}
              height={"100%"}
              width={"100%"}
              loop={false}
              onEnded={next}
              onStart={updateListen}
            />
          </div>
        </div>
        <div className="time">
          <span>0:00</span>
          <span>0:00</span>
        </div>
      </div>
      <div className="controls">
        <button className="player-btn prev-btn" type="button" onClick={prev}>
          <i className="fa-solid fa-backward"></i>
        </button>
        <button
          className="player-btn play-pause"
          type="button"
          onClick={() => {
            setPlay(!play);
          }}
        >
          <i className={play ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
        </button>
        <button className="player-btn next-btn" type="button" onClick={next}>
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
}
