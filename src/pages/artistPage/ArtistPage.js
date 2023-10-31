import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Artist from "../../components/artist/Artist";
import './ArtistPage.css'

const baseURL = "http://localhost:8080";

function ArtistPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/artist`)
      .then((res) => {
        console.log(res.data);
        setArtists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="artist-page">
        <div className="artist-list">
          <div className="music-new-title">Ca sĩ - Artist</div>
          <div className="row">
            {artists.map((x) => (
              <div className="col-md-2" key={x.id}>
                <Artist artists={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
