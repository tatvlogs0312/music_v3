import React from "react";
import './Card.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const baseURL = 'http://localhost:8080';

export default function Card(props) {
    return (
      <Link style={{textDecoration: 'none', color: '#000'}}>
        <section class="card-music">
          <div class="img-holder">
            <img src={`${baseURL}/file/image/${props.img}`} alt="ảnh" />
          </div>
          <div class="text">
            <h2>{props.songName || "UNKNOW"}</h2>
          </div>
        </section>
      </Link>
    );
}
