import React, { useEffect, useRef, useState } from "react";
import "./Player.css";
import axios from "axios";
import InputSlider from "react-input-slider";

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
    setTimeout(() => {
      axios
        .put(`${baseURL}/song/update-listen/${song.id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }, 30000);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!play) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const getTime = (time) => {
    let minutes = Math.floor(Number(time) / 60);
    let seconds = (Number(time) % 60).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (play) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  };

  useEffect(() => {
    setPlay(true);
    updateListen();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("me") !== null) {
      const user = JSON.parse(localStorage.getItem("me"));
      axios
        .put(`${baseURL}/user/update-history`, {
          idSong: song.id,
          idUser: user.id,
        })
        .then((res) => {})
        .catch((err) => console.log(err));
    }
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
          <InputSlider
            axis="x"
            xmax={duration}
            x={currentTime}
            onChange={handleTimeSliderChange}
            styles={{
              track: {
                backgroundColor: "#e3e3e3",
                height: "5px",
                width: "100%",
              },
              active: {
                backgroundColor: "#333",
                height: "5px",
                width: "100%",
              },
              thumb: {
                // marginTop: "-2px",
                width: "16px",
                height: "16px",
                backgroundColor: "#333",
                borderRadius: 50,
              },
            }}
          />
          <div className="song-progress">
            <audio
              ref={audioRef}
              src={`${baseURL}/file/mp3/${song.urlMp3}`}
              height={"100%"}
              width={"100%"}
              loop={false}
              onEnded={next}
              onLoadedData={handleLoadedData}
              onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
            />
          </div>
        </div>
        <div className="time">
          <span>{getTime(currentTime)}</span>
          <span>{getTime(duration)}</span>
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
            handlePausePlayClick();
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
