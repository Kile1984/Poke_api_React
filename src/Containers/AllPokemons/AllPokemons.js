import React from 'react';
import './AllPokemons.scss';
import ShowPokemons from '../ShowPokemons/ShowPokemons'; 


class AllPokemons extends React.Component {
    render(){
        return(
            <div className="container select-pokemons mt-5">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h5>Select Pokemon</h5>
                    </div>
                </div>
                <div className="row">
                    <ShowPokemons 
                    pokemons={this.props.pokemons} 
                    pokemonsImgPath={this.props.pokemonsImgPath}/>
                </div>
            </div>
        );
    }
}

export default AllPokemons;