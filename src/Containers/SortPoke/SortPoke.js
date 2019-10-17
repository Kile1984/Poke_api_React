import React from 'react';
import './SortPoke.scss';


class SortPoke extends React.Component {
    render(){
        return(
            <div className="container p-0 select-pokemons">
               <select className="form-control">
                <option>Sort result by...</option>
                <option>A-Z</option>
                <option>Z-A</option>
                <option>Lowest Number (First)</option>
                <option>Highest Number (First)</option>
              </select>
            </div>
        );
    }
}

export default SortPoke;