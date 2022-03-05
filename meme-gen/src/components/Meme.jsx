import React, { useState } from "react";
import { useEffect } from "react";

export const Meme = function (params) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
    imgTxt: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getRandomMeme = function () {
    const randNum = Math.floor(Math.random() * (allMemes.length + 1)) + 0;
    console.log(`randNum`, randNum);
    const { url: urlImg } = allMemes[randNum];
    const { name: nameImg } = allMemes[randNum];
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
