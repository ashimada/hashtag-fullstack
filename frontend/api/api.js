import axios from "axios";
import.meta.env;

// console.log(import.meta.env);

const { VITE_NODE_ENV } = import.meta.env;
const URL =
  VITE_NODE_ENV === "development" ? "http://localhost:3001/api" : "/api";
// const URL = "http://localhost:3001";

const responseArtists = await axios.get(URL + "/artists");
const responseSongs = await axios.get(URL + "/songs");
//console.log(responseArtists.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
