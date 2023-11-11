import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Player from "../../components/player/Player";

const baseURL = "http://localhost:8080";

export default function AlbumsInfoPage() {
  let { id } = useParams();

  const [albums, setAlbums] = useState({});
  const [song, setSong] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${baseURL}/albums/${id}`)
      .then((res) => {
        setAlbums(res.data);
        setSong(albums.song[index])
      })
      .catch((err) => console.log(err));
    
  }, [id]);

  console.log(albums);

  useEffect(() => {

  }, [])

  return (
    <div className="albums-info-page">
      <div className="music-list">
        <div>{albums.songs && <Player song={albums?.songs[index]} />}</div>
        <div></div>
      </div>
    </div>
  );
}
