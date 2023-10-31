import React from "react";
import "./Artist.css";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

export default function Artist(props) {
  return (
    <Link style={{ textDecoration: "none", color: "#000" }}>
      <section class="card-artist">
        <div class="img-holder">
          <img
            src={`${baseURL}/file/image/${props.artists.avatar || ''}`}
            alt="ảnh"
          />
        </div>
        <div class="text-name" title={props.artists.name || 'UNKNOW'}>
          <h2>{props.artists.name || "UNKNOW"}</h2>
        </div>
      </section>
    </Link>
  );
}
