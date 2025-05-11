import React from "react";
import ItemList from "./ItemList";

import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

function Main({ type }) {
  // console.log("Main!");

  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      {type == "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Main;
