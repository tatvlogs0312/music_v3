import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Artist from "../../components/artist/Artist";
import Album from "../../components/album/Album";
import axios from "axios";
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const baseURL = "http://localhost:8080";

function HomePage() {
  const [songs, setSongs] = useState([]);
  const [tops, setTops] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

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
        console.log(res.data);
        setArtists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${baseURL}/song/top?size=6`)
      .then((res) => setTops(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${baseURL}/albums/limit?size=6`)
      .then((res) => setAlbums(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-page">
      <div className="music-new">
        <div className="music-new-title">Mới</div>
        <div className="row">
          {songs.map((x) => (
            <div className="col-md-2" key={x.id}>
              <Card song={x} other={songs} />
            </div>
          ))}
        </div>
      </div>

      <div className="music-new">
        <div className="music-new-title">Nghe nhiều nhất hiện nay</div>
        <div className="row">
          {tops.map((x) => (
            <div className="col-md-2" key={x.id}>
              <Card song={x} />
            </div>
          ))}
        </div>
      </div>

      <div className="artist">
        <div className="music-new-title">Ca sĩ thịnh hành</div>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {artists.map((a) => (
            <SwiperSlide>
              <Artist artists={a} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="albums">
        <div className="music-new-title">Albums/Playlist</div>
        <div className="row">
          {albums.map((x) => (
            <div className="col-md-2" key={x.id}>
              <Album albums={x} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
