import { artistArray } from "../../hashtag/src/assets/database/artists.js";
import { songsArray } from "../../hashtag/src/assets/database/songs.js";

import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;
  return newArtistObj;
});
//console.log(newArtistArray);

const newSongArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;
  return newSongObj;
});

//console.log(newSongArray);

const responseS = await db.collection("songs").insertMany(newSongArray);
const responseA = await db.collection("artists").insertMany(newArtistArray);

console.log(responseS);
console.log(responseA);
