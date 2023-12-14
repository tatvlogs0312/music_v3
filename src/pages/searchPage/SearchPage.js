import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import PlayList from "../../components/playlist/PlayList";
import Artist from "../../components/artist/Artist";
import Album from "../../components/album/Album";

const baseURL = "http://localhost:8080";

function SearchPage() {
  const { keyword } = useLocation().state;
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/song/search?keyword=${keyword}`)
      .then((res) => {
        setSongs(res.data.songs);
        setArtists(res.data.artists);
        setAlbums(res.data.albums);
      })
      .catch((err) => console.log(err));
  }, [keyword]);

  return (
    <div className="search-page">
      <div>
        {songs.length > 0 && (
          <div className="search-song">
            <div>Bài hát</div>
            <div className="row">
              {songs.map((x) => (
                <div className="col-md-6">
                  <Link to={`/song/${x.id}`}>
                    <PlayList song={x}></PlayList>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        {artists.length > 0 && (
          <div className="search-artist">
            <div>Ca sĩ</div>
            <div className="row">
              {artists.map((x) => (
                <div className="col-md-2">
                  <Artist artists={x} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        {albums.length > 0 && (
          <div className="search-albums">
            <div>Albums</div>
            <div className="row">
              {albums.map((x) => (
                <div className="col-md-2">
                  <Album albums={x} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
