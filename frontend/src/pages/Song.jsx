import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  // console.log(id);

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentsongObj, index) => currentsongObj._id === id
  )[0];

  // console.log(artist);
  const artistObj = artistArray.filter(
    (currentArtistObj, index) => currentArtistObj.name === artist
  )[0];

  // console.log(artistObj);

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={artistObj.image} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img width={75} height={75} src={artistObj.image} />
        </Link>
        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />
        <div>
          <div className="song__name">{name}</div>
          <div>{artist}</div>
        </div>
      </div>
    </div>
  );
};

export default Song;
