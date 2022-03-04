import React, { useState } from "react";
import { memesData } from "../memesData";

export const Meme = function (params) {
  const memesDataLength = memesData.data.memes.length;

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    imgTxt: "",
  });

  const getRandomMeme = function () {
    const randNum = Math.floor(Math.random() * (memesDataLength + 1)) + 0;
    const { url: urlImg } = memesData.data.memes[randNum];
    const { name: nameImg } = memesData.data.memes[randNum];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: urlImg,
      imgTxt: nameImg,
    }));
  };

  const handleInput = function (e) {
    const { name, value } = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  console.log(`meme`, meme);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleInput}
        />

        <button className="form--button" onClick={getRandomMeme}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt={meme.imgTxt} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};
