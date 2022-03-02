import React from "react";

export const Header = function (params) {
  return (
    <header className="header">
      <img src="/images/troll-face.png" alt="" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Scrimba Tut Project</h4>
    </header>
  );
};
