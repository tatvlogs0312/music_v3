import React, { useEffect, useState } from "react";
import "./ArtistInfoPage.css";
import { useParams } from "react-router";
import axios from "axios";
import PlayList from "../../components/playlist/PlayList";
import Album from "../../components/album/Album";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

export default function ArtistInfoPage() {
  let { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/artist/${id}`)
      .then((res) => setArtist(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${baseURL}/artist/${id}/songs?size=6`)
      .then((res) => setSongs(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${baseURL}/artist/${id}/albums?size=1`)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="artist-info-page">
      {artist && (
        <div>
          <div className="artist-info">
            <div className="artist-avatar">
              <img
                src={`${baseURL}/file/image/${artist.urlAvatar}`}
                alt="avatar"
              />
            </div>
            <div className="artist-name">{artist.name}</div>
          </div>
          <div className="artist-song-albums">
            <div className="artist-songs">
              <div className="artist-songs-title">
                <div style={{ fontSize: "20px" }}>Bài hát nổi bật</div>
                <div>
                  <Link to={`/artist/${artist.id}/song`}>Xem tất cả</Link>
                </div>
              </div>
              {songs && (
                <div className="row">
                  {songs.map((song) => (
                    <div className="col-md-6" key={song.id}>
                      <div style={{ fontSize: "20px" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/artist/${artist.id}/song/play`}
                          state={{ songId: song.id, songs: songs }}
                        >
                          <PlayList song={song} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="artist-albums">
              <div style={{ fontSize: "20px" }}>Playlist/Albums</div>
              {albums && (
                <div className="row">
                  {albums.map((item) => (
                    <div className="col-md-2" key={item.id}>
                      <Album albums={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
