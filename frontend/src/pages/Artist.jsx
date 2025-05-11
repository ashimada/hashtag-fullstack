import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useParams } from "react-router-dom";
import SongList from "../components/SongList";

import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  // console.log(useLocation());
  // console.log(useParams());

  const { id } = useParams();
  // console.log(id);
  const artistObj = artistArray.filter(
    (currentArtistObj, index) => currentArtistObj._id === id
  )[0];
  // console.log(artistObj);

  const songsArrayFromList = songsArray.filter(
    (currentSongsObj, index) => currentSongsObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromList.length - 1)
  );
  // console.log(randomIndex);

  const randomIdFromArtist = songsArrayFromList[randomIndex]._id;
  // console.log(randomIdFromArtist);

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObj.banner})`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromList} />
      </div>
      <Link to="/song/{randomIdFromArtist}">
        <FontAwesomeIcon
          className="single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
