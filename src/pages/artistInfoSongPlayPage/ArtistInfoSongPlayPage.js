import React, { useState, useEffect } from "react";
import "./ArtistInfoSongPlayPage.css";
import { useLocation, useParams } from "react-router";
import Player from "../../components/player/Player";
import axios from "axios";
import PlayList from "../../components/playlist/PlayList";

const baseURL = "http://localhost:8080";

function ArtistInfoSongPlayPage() {
  const location = useLocation();

  const [song, setSong] = useState(null);
  const [songs, setSongs] = useState(location.state.songs);
  const [index, setIndex] = useState(
    songs.findIndex((x) => x.id === location.state.songId)
  );

  useEffect(() => {
    axios
      .get(`${baseURL}/song/${songs[index].id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => console.log(err));
  }, [index]);

  const next = () => {
    if (index < songs.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="artist-info-songplay-page">
      <div className="music-list">
        <div className="item-player">
          {song && <Player song={song} next={next} prev={prev} />}
        </div>
        <div className="item-playlist">
          <div className="playlist-title">Danh sách phát</div>
          <div>
            {songs &&
              songs.map((x, index) => (
                <div
                  key={x.id}
                  onClick={() => {
                    setIndex(index);
                    setSong(x);
                  }}
                >
                  <PlayList song={x} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistInfoSongPlayPage;
