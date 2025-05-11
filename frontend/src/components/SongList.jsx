import React from "react";
import SongItem from "./SongItem";
import Song from "../pages/Song";
import { useState } from "react"; // variavel de estado - obriga react a re-renderizar tela

const SongList = ({ songsArray }) => {
  // console.log(songsArray);

  const [items, setItems] = useState(5);
  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, i) => i < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
