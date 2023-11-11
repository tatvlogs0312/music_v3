import React from "react";
import "./MusicPage.css";
import { useLocation, useParams } from "react-router";

export default function MusicPage(props) {
  const location = useLocation();

  const other = location.state?.other || [];

  let { id } = useParams();

  console.log(other);
  return (
    <div className="music-page">
      <div>abc</div>
    </div>
  );
}
