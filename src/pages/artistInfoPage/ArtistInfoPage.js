import React, { useEffect } from "react";
import "./ArtistInfoPage.css";
import { useParams } from "react-router";

const baseURL = "http://localhost:8080";

export default function ArtistInfoPage() {
  let { id } = useParams();
  

  useEffect(() => {

  }, [])

  return <div className="artist-info-page">ArtistInfoPage</div>;
}
