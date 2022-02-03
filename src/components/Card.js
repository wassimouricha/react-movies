import React from 'react';

const Card = ({ movie }) => {
    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/") ;  
        // enn mettant join puis le / ma fonction va comprendre que dans mon array entre les caractères il va placer un /
    };


    //  ? dans une fonction react signifie "est ce que c'est true (if)" soit === true puis : pour indiquer "sinon(else)"
    return (
  <div className="card">
      <img src={movie.poster_path ?
          "https://image.tmdb.org/t/p/w500/" + movie.poster_path : "./img/poster.jpg"} alt="affiche film" />
      <h2> {movie.title} </h2>
      {movie.release_date ? ( <h5>Sorti le : {dateFormater(movie.release_date)}</h5> ) : ""}
      <h4>{movie.vote_average}/10 <span> &#128293;</span> </h4>
  </div>
    );
};

export default Card;