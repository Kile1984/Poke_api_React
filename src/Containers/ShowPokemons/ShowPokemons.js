import React from 'react';
import './ShowPokemons.scss';
import { withRouter } from 'react-router-dom';

class ShowPokemons extends React.Component {
    constructor(props) {
        super(props);

        this.showFeatures = this.showFeatures.bind(this);
    }
    showFeatures(e){
        this.props.history.push("feauters/" + e.target.id);
    }
    
    render() {
        return (
            <>
                {
                    this.props.pokemons.map(p => {
                        return (
                            <div className="col-md-3 mt-5" key={p.name}>
                                <div className="card mb-3">
                                    <div className="row">
                                        <div className="col-12">
                                            {
                                                this.props.pokemonsImgPath.map(path=>{
                                                    return path.name === p.name && 
                                                    <img src={path.url} className="card-img" alt={p.name} key={p.name}/>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card-body d-flex justify-content-between">
                                                <div>
                                                    <p className="card-text">{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</p>
                                                </div>
                                                <div className="align-self-end">
                                                    <button type="button" className="btn btn-more btn-sm" 
                                                    id={p.name}
                                                    onClick={this.showFeatures}>More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default withRouter(ShowPokemons);
