import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("star wars");
    const [sortGoodBad, setSortGoodBad] = useState(null);

    // ${} permet d'écrire du javascript

useEffect(() => {
    axios.get(
        ` https://api.themoviedb.org/3/search/movie?api_key=278c4d8a90056d4bdf066f2e7609e2b7&query=${search}&language=fr-FR`
    ).then((res) => setMoviesData(res.data.results));
}, [search]);



    return (
        // la partie html dans un projet react est appelé jsx
     <div className="form-component">
         <div className="form-container">
             <form >
                 <input type="text" placeholder="Entrez le titre d'un film"  id='search-input' onChange={(e) => setSearch(e.target.value)}/>
                 <input type="submit"  value="Rechercher"/>
             </form>

             <div className="btn-sort-container">
                 <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>Top <span>&#8640;</span></div>
                 <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>FLop <span>&#8640;</span></div>
             </div>
         </div>
         <div className="result">
             {moviesData.slice(0, 42).sort((a, b) =>{if(sortGoodBad === "goodToBad"){  return b.vote_average - a.vote_average;} else if(sortGoodBad === "badToGood"){return a.vote_average - b.vote_average;}
             })
             .map((movie)=> <Card key={movie.id} movie={movie}/>)}
         </div>
     </div>
    );
};

export default Form;