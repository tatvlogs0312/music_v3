import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Player from "../../components/player/Player";
import "./AlbumsInfoPage.css";
import PlayList from "../../components/playlist/PlayList";

const baseURL = "http://localhost:8080";

export default function AlbumsInfoPage() {
  let { id } = useParams();

  const [albums, setAlbums] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${baseURL}/albums/${id}`)
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {}, []);

  const next = () => {
    if (index < albums.songs.length - 1) {
      setIndex(index + 1);
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="albums-info-page">
      <div className="music-list">
        <div className="item-player">
          {albums.songs && (
            <Player song={albums?.songs[index]} next={next} prev={prev} />
          )}
        </div>
        <div className="item-playlist">
          <div className="playlist-title">{albums.albumsName || "N/A"}</div>
          <div>
            {albums.songs &&
              albums.songs.map((x, index) => (
                <div key={x.id} onClick={() => setIndex(index)}>
                  <PlayList song={x} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
