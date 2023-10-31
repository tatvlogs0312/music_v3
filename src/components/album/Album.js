import React from "react";
import "./Album.css";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

export default function Album(props) {
  return (
    <Link style={{ textDecoration: "none", color: "#000" }}>
      <section class="card-album">
        <div class="img-holder">
          <img
            src={`${baseURL}/file/image/${props.albums.url_image_albums}`}
            alt="ảnh"
          />
        </div>
        <div class="text-name" title={props.albums.albums_name || 'UNKNOW'}>
          <h2>{props.albums.albums_name || "UNKNOW"}</h2>
        </div>
      </section>
    </Link>
  );
}
