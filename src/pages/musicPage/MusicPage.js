import React, { useEffect, useState } from "react";
import "./MusicPage.css";
import { useParams } from "react-router";
import PlayList from "../../components/playlist/PlayList";
import Player from "../../components/player/Player";
import axios from "axios";
import Album from "../../components/album/Album";

const baseURL = "http://localhost:8080";

export default function MusicPage() {
  let { id } = useParams();

  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${baseURL}/song/${id}`)
      .then((res) => {
        const song = {
          id: res.data.id,
          name: res.data.name,
          urlImage: res.data.urlImage,
          urlMp3: res.data.urlMp3,
          artists: res.data.artists,
        };

        setSongs([...songs, song]);
        setAlbums(res.data.albums);
      })
      .catch((err) => console.log(err));
  }, [id]);

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
    <div className="music-page">
      <div className="music-list">
        <div className="item-player">
          {songs.length > 0 && (
            <Player song={songs[0]} next={next} prev={prev} />
          )}
        </div>
        <div className="item-playlist">
          <div className="playlist-title">{"Danh sách phát"}</div>
          <div>
            {songs.length > 0 &&
              songs.map((x, index) => (
                <div key={x.id} onClick={() => setIndex(index)}>
                  <PlayList song={x} />
                </div>
              ))}
          </div>
        </div>
      </div>
      {songs.length > 0 && (
        <div style={{ width: "95%", margin: "auto" }}>
          <div style={{fontSize: "20px", fontWeight: 600}}>{songs[0].name + " xuất hiện trong"}</div>
          <div>
            <div className="row">
              {albums.map((x) => (
                <div className="col-md-2" key={x.id}>
                  <Album albums={x} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
