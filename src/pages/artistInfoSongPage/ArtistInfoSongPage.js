import React, { useEffect, useState } from "react";
import "./ArtistInfoSongPage.css";
import { useParams } from "react-router";

const baseURL = "http://localhost:8080";

function ArtistInfoSongPage() {
  let { id } = useParams();

  useEffect(() => {}, []);

  return (
    <div className="artist-info-song-page">
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ArtistInfoSongPage;
