import React from 'react';
import './RandomPoke.scss';
import { withRouter } from 'react-router-dom';


class RandomPoke extends React.Component {
    constructor(props){
        super(props);

        this.randomSort = this.randomSort.bind(this);
    }
    randomSort(){
        this.props.history.push("/random-pokemons");
    }
    render(){
        return(
            <div className="container random-pokemons p-0">
               <button type="button" className="btn btn-primary btn-random w-100" 
                onClick={this.randomSort}>
                Random Sort Pokemons</button>
            </div>
        );
    }
}

export default withRouter(RandomPoke);
