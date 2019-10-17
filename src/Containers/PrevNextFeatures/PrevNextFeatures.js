import React from 'react';
import prev from '../../img/previous-arrow.png';
import next from '../../img/next-arrow.png';
import './PrevNextFeatures.scss';
import { withRouter } from 'react-router-dom';

class PrevNextFeatures extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: "",
            name: "",
            abilities: [],
            height: "",
            weight: "",
            img: []
        }

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.goHome = this.goHome.bind(this);
    
    }

    prev(){
        let pokeId = 0;

        if ( this.props.pokemon.id === 1 ){
            pokeId = this.props.pokemons.length;

        }else if( this.props.pokemon.id > 1 && this.props.pokemon.id <= this.props.pokemons.length ){
            pokeId = this.props.pokemon.id - 1;
        }
        fetch('https://pokeapi.co/api/v2/pokemon/' + parseInt(pokeId))
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    abilities: data.abilities.map(a => a.ability.name),
                    height: data.height,
                    weight: data.weight
                });
            })
        this.props.getPrevPokemon(pokeId);
    }
    next(){
        let pokeId = 0;

        if ( this.props.pokemon.id === this.props.pokemons.length ){
            pokeId = 1;

        }else if( this.props.pokemon.id >= 1 && this.props.pokemon.id <= this.props.pokemons.length ){
            pokeId = this.props.pokemon.id + 1;
        }
        fetch('https://pokeapi.co/api/v2/pokemon/' + parseInt(pokeId))
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    abilities: data.abilities.map(a => a.ability.name),
                    height: data.height,
                    weight: data.weight,
                });
            })
        this.props.getNextPokemon(pokeId);
    }

    goHome(){
        this.props.history.push("/");
    }

    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5">
                        <div className="p-4 prev" 
                            onClick={this.prev}>
                            <img src={prev} alt="prev"/>
                        </div>
                    </div>
                    <div className="col-2 text-center d-flex justify-content-center align-items-center rounded-0 go-home"
                    onClick={this.goHome}>
                        <h1>HOME</h1>
                    </div>
                    <div className="col-5 text-right">
                        <div className="p-4 next" 
                            onClick={this.next}>
                            <img src={next} alt="next"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PrevNextFeatures);