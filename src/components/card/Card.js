import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

export default function Card(props) {
  const getArtist = (props) => {
    let artist = "";

    props.song.artists?.forEach((e, i) => {
      if (i > 0) {
        artist += ", ";
      }
      artist += e.name;
    });

    return artist;
  };

  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/song/${props.song.id}`}
    >
      <section className="card-music">
        <div className="img-holder">
          <img src={`${baseURL}/file/image/${props.song.urlImage}`} alt="ảnh" />
        </div>
        <div className="text-name">
          <h2>{props.song.songName || "UNKNOW"}</h2>
        </div>

        {props.song.artists && (
          <div className="text-artist">
            <div>{getArtist(props) || "N/A"}</div>
          </div>
        )}
      </section>
    </Link>
  );
}
