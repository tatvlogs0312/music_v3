import React from "react";
import "./PlayList.css";

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
    <div class="playlist-item">
      <div class="playlist-item-info">
        <div class="orther-name-img">
          <img src={`${baseURL}/file/image/${song.urlImage}`} alt="" />
          <div class="playlist-item-info-name">
            <div class="playlist-item-song">{song.name || "N/A"}</div>
            <div class="playlist-item-artist">{getArtist(song) || "N/A"}</div>
          </div>
        </div>
        <div>
          <span>5:20</span>
        </div>
      </div>
    </div>
  );
}
