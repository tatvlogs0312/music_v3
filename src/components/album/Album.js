import React from "react";
import "./Album.css";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

export default function Album(props) {
  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/albums/${props.albums.id}`}
    >
      <section className="card-album">
        <div className="img-holder">
          <img
            src={`${baseURL}/file/image/${
              props.albums.url_image_albums || props.albums.urlImageAlbums
            }`}
            alt="ảnh"
          />
        </div>
        <div
          className="text-name"
          title={
            props.albums.albums_name || props.albums.albumsName || "UNKNOW"
          }
        >
          <h2>
            {props.albums.albums_name || props.albums.albumsName || "UNKNOW"}
          </h2>
        </div>
      </section>
    </Link>
  );
}
