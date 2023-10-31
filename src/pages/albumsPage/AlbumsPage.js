import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Album from "../../components/album/Album";
import './AlbumsPage.css'

const baseURL = "http://localhost:8080";

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/albums`)
      .then((res) => {
        console.log(res.data);
        setAlbums(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="albums-page">
        <div className="albums-list">
          <div className="albums-new-title">Albums</div>
          <div className="row">
            {albums.map((x) => (
              <div className="col-md-2" key={x.id}>
                <Album albums={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumsPage;
