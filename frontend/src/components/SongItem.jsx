import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({
  image,
  name,
  duration,
  artist,
  audio,
  _id,
  index,
  key,
}) => {
  // console.log(index);
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`imagem da musica ${name}`}
          />
        </div>
        <div className="item__name">{name}</div>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
