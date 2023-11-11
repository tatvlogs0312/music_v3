import React from "react";
import "./Artist.css";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

export default function Artist(props) {
  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/artist/${props.artists.id}`}
    >
      <section className="card-artist">
        <div className="img-holder">
          <img
            src={`${baseURL}/file/image/${props.artists.avatar || ""}`}
            alt="ảnh"
          />
        </div>
        <div className="text-name" title={props.artists.name || "UNKNOW"}>
          <h2>{props.artists.name || "UNKNOW"}</h2>
        </div>
      </section>
    </Link>
  );
}
