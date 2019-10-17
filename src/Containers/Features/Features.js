import React from 'react';
import './Features.scss';
import { withRouter } from 'react-router-dom';
import pokemonsImgURL from '../../pokemonsImgPath/pokemonsImgPath';
import PrevNextFeatures from '../PrevNextFeatures/PrevNextFeatures';

class Features extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            abilities: [],
            height: "",
            weight: "",
            img: []

        }

        this.getPrevPokemon = this.getPrevPokemon.bind(this);
        this.getNextPokemon = this.getNextPokemon.bind(this);
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    abilities: data.abilities.map(a=>a.ability.name),
                    height: data.height,
                    weight: data.weight,
                    img: pokemonsImgURL
                });
            })
    }

    getPrevPokemon(prevPokeId){
        this.props.history.push(prevPokeId.toString());
        fetch('https://pokeapi.co/api/v2/pokemon/' + prevPokeId)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    abilities: data.abilities.map(a=>a.ability.name),
                    height: data.height,
                    weight: data.weight,
                    img: pokemonsImgURL
                })
            })
    }
    getNextPokemon(nextPokeId){
        this.props.history.push(nextPokeId.toString());
        fetch('https://pokeapi.co/api/v2/pokemon/' + nextPokeId)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    abilities: data.abilities.map(a=>a.ability.name),
                    height: data.height,
                    weight: data.weight,
                    img: pokemonsImgURL
                })
            })
    }
    render() {
        return (
            <>
            <PrevNextFeatures 
            pokemons={this.props.pokemons}
            pokemon={this.state}
            getPrevPokemon={this.getPrevPokemon}
            getNextPokemon={this.getNextPokemon}
            />
            <div className="container single-pokemon mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {
                            this.state.img.map(u=> u.name === this.state.name && 
                            <img src={u.url} className="card-img" alt="pokemon" key={u.name}/>
                        )}
                    </div>
                    <div className="col-12 col-md-6 pokemon-properties">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                ID
                                <span className="badge badge-pill badge-custom">{this.state.id}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                NAME
                                <span className="badge badge-pill badge-custom letter-spaccing">{this.state.name.toUpperCase()}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                HEIGHT
                                <span className="badge badge-pill badge-custom">{this.state.height}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                WEIGHT
                                <span className="badge badge-pill badge-custom">{this.state.weight}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                ABILITIES
                                {
                                    this.state.abilities.map(a=>{
                                        return(
                                             <>
                                             <span className="badge badge-pill badge-custom letter-spaccing" >{a}</span>
                                             </>   
                                        );
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 mt-5">
                       
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default withRouter(Features);
