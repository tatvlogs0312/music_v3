import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import axios from "axios";
import "./HomePage.css"; 

const baseURL = "http://localhost:8080";

function HomePage() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/song/limit?size=12`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${baseURL}/artist/limit`)
      .then((res) => {
        console.log(res);
         setArtists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <div className="music-new">
          <div className="music-new-title">Mới</div>
          <div className="row">
            {songs.map((x) => (
              <div className="col-md-2" key={x.id}>
                <Card song={x} />
              </div>
            ))}
          </div>
        </div>

        <div className="artist">
          <div className="music-new-title">Ca sĩ hot hiện nay</div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
