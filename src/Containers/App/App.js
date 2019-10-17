import React from 'react';
import Header from '../../Components/Header/Header';
import Search from '../../Containers/Search/Search';
import AllPokemons from '../../Containers/AllPokemons/AllPokemons';
import NotFound from '../../Components/NotFound/NotFound';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import Features from '../Features/Features';
import pokemonsImgURL from '../../pokemonsImgPath/pokemonsImgPath';
import ShowSearchPokemon from '../ShowSearchPokemon/ShowSearchPokemon';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      pokemons: [],
      pokemonsImgPath: pokemonsImgURL
    }

  }
  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemons: data.results
      })
    })
  }

  render(){
    return (
      <div className="container-fluid main-bgr p-0">
          <Header/>
          <Switch>
            <Route exact 
                path="/" render={()=>
                <>
                  <Search 
                    pokemons={this.state.pokemons}
                    getSearcPokemon={this.getSearcPokemon}
                  />

                  <AllPokemons
                    pokemons={this.state.pokemons}
                    pokemonsImgPath={this.state.pokemonsImgPath}
                  />
                </>
            }>
            </Route>

            <Route exact path="/feauters/:id" render={() => 
                   <Features
                    pokemons={this.state.pokemons}
                    getPrevPokemon={this.getPrevPokemon}
                   />
            }>

            </Route>
            <Route exact path="/search-pokemon/:name" render={()=>
            <>
                <ShowSearchPokemon
                      pokemons={this.state.pokemons}
                />
            </>
            }>

            </Route>
            <Route component={NotFound} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
