import React from 'react';
// import './RandomPokemons.scss';
import { withRouter } from 'react-router-dom';


class RandomPokemons extends React.Component {

    render(){
        console.log(this.props.pokemons.length)
        return(
            <div className="container random-pokemons p-0">
              Random
            </div>
        );
    }
}

export default withRouter(RandomPokemons);
