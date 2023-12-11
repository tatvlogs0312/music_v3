import React from "react";
import "./PlayList.css";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

export default function PlayList({ song }) {
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

  return (
    <div className="playlist-item">
      <div className="playlist-item-info">
        <div className="orther-name-img">
          <img src={`${baseURL}/file/image/${song.urlImage}`} alt="" />
          <div className="playlist-item-info-name">
            <div className="playlist-item-song">{song.name || "N/A"}</div>
            <div className="playlist-item-artist">
              {getArtist(song) || "N/A"}
            </div>
          </div>
        </div>
        <div>
          <span>5:20</span>
        </div>
      </div>
    </div>
  );
}
