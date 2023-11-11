import React, { useEffect, useState } from "react";
import "./Player.css";
import ReactPlayer from "react-player";

const baseURL = "http://localhost:8080";

export default function Player({ song }) {

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

  useEffect(() => {
    
  }, []);

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
            />
          </div>
        </div>
        <div className="time">
          <span>0:00</span>
          <span>0:00</span>
        </div>
      </div>
      <div className="controls">
        <button className="player-btn prev-btn" type="button">
          <i className="fa-solid fa-backward"></i>
        </button>
        <button className="player-btn play-pause" type="button">
          <i
            className={play ? "fa-solid fa-pause" : "fa-solid fa-play"}
            onClick={() => setPlay(!play)}
          ></i>
        </button>
        <button className="player-btn next-btn" type="button">
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
}
