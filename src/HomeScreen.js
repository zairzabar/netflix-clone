import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
    </div>
  );
}

export default HomeScreen;
