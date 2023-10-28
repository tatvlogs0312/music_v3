import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <Card />
      </div>
    </div>
  );
}

export default HomePage;
