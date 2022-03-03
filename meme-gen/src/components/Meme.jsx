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
    const text = e.value;

    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: text,
      bottomText: "",
    }));

    console.log(`meme`, meme);
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button className="form--button" onClick={getRandomMeme}>
          Get a new meme image
        </button>
        <img src={meme.randomImage} alt={meme.imgTxt} className="form--image" />
      </div>
    </main>
  );
};
