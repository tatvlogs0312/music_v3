import React from "react";
import './Card.css'
import { useState } from "react";

const baseURL = 'http://localhost:8080';

export default function Card(props) {
    return (
      <section class="card-music">
        <div class="img-holder">
          <img src={`${baseURL}/file/image/alums.png`} alt="ảnh" />
        </div>
        <div class="text">
          <h2>{props.songName || ''}</h2>
        </div>
      </section>
    );
}
