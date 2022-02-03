import React from 'react';

const Form = () => {





    return (
        // la partie html dans un projet react est appelé jsx
     <div className="form-component">
         <div className="form-container">
             <form >
                 <input type="text" placeholder="Entrez le titre d'un film"  id='search-input'/>
                 <input type="submit"  value="Rechercher"/>
             </form>
         </div>
     </div>
    );
};

export default Form;