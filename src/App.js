import React, { useState } from "react";
import "./styles.css";
var EmojisDictionary = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis"
};

var emojiweknow = Object.keys(EmojisDictionary);

export default function App() {
  var [emoji, setemoji] = useState();
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = EmojisDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't we this in our database";
    }
    setemoji(meaning);
  }
  function clickHandler(emoji) {
    var meaning = EmojisDictionary[emoji];
    setemoji(meaning);
  }
  return (
    <div className="App">
      <h1>Emojis meaning.</h1>
      <input
        id="input"
        onChange={inputHandler}
        placeholder="enter the emoji here"
      ></input>
      <h2>{emoji}</h2>
      <h3>emoji's we know:</h3>
      <div>
        {emojiweknow.map(function (emoji) {
          return (
            <span
              key={emoji}
              style={{
                padding: "0.5rem",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
              onClick={() => clickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
