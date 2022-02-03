import React from 'react';

const Card = ({ movie }) => {
    return (
  <div className="card">
      <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
      <h2> {movie.title} </h2>
  </div>
    );
};

export default Card;