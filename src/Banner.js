import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/netflix-movie-series-download-template-design-3a7d8e00db6fffde55bb1c0e8a65eb79_screen.jpg?ts=1605595145)`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, This is a test description, `,
            150
          )}
        </h1>
      </div>

      <div className="banner__fadeButtom" />
    </header>
  );
}

export default Banner;
