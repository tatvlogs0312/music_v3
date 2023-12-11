import React, { useEffect, useState } from "react";
import "./ArtistInfoSongPage.css";
import { useParams } from "react-router";
import axios from "axios";
import PlayList from "../../components/playlist/PlayList";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

function ArtistInfoSongPage() {
  let { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/artist/${id}`)
      .then((res) => setArtist(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${baseURL}/artist/${id}/songs?size=1000000`)
      .then((res) => setSongs(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="artist-info-song-page">
      {artist && (
        <div>
          <div>
            <Link to={`/artist/${artist.id}`}>Quay lại</Link>
          </div>
          <div className="artist-name">{`${artist.name} - Tất cả bài hát`}</div>
          <div>
            <div className="row">
              {songs &&
                songs.map((song) => (
                  <div className="col-md-12" key={song.id}>
                    <div style={{ fontSize: "20px" }}>
                      <Link 
                        style={{textDecoration: "none"}}
                        to={`/artist/${artist.id}/song/play`}
                        state={{ songId: song.id, songs: songs }}
                      >
                        <PlayList song={song} />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtistInfoSongPage;
