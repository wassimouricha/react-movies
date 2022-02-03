import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);

useEffect(() => {
    axios.get(
        ` https://api.themoviedb.org/3/search/movie?api_key=278c4d8a90056d4bdf066f2e7609e2b7&query=star&language=fr-FR`
    ).then((res) => setMoviesData(res.data.results));
}, []);



    return (
        // la partie html dans un projet react est appelé jsx
     <div className="form-component">
         <div className="form-container">
             <form >
                 <input type="text" placeholder="Entrez le titre d'un film"  id='search-input'/>
                 <input type="submit"  value="Rechercher"/>
             </form>

             <div className="btn-sort-container">
                 <div className="btn-sort" id="goodToBad">Top <span>&#8640;</span></div>
                 <div className="btn-sort" id="badToGood">FLop <span>&#8640;</span></div>
             </div>
         </div>
         <div className="result">
             {moviesData.map((movie)=> <h2>{movie.title}</h2>)}
         </div>
     </div>
    );
};

export default Form;