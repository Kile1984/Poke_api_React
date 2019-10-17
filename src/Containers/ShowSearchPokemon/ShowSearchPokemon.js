import React from 'react';
import { withRouter } from 'react-router-dom';
import pokemonsImgPath from '../../pokemonsImgPath/pokemonsImgPath';

class ShowSearchPokemon extends React.Component {
    constructor(props) {
        super(props);

        this.showFeatures = this.showFeatures.bind(this);
    }
    showFeatures(e) {
        this.props.history.push("/feauters/" + e.target.id)
    }
    render() {
        return (
            <>
                {
                    this.props.pokemons.map(p => {
                        return p.name.toUpperCase() === this.props.match.params.name.toUpperCase() &&
                            <div className="container" key={p.name}>
                                <div className="row">
                                    <div className="col-md-3 my-5">
                                        <div className="card mb-3">
                                            <div className="row">
                                                <div className="col-12">
                                                    {
                                                        pokemonsImgPath.map(img => {
                                                            return img.name === p.name &&
                                                                <img src={img.url} className="card-img" alt="Slika" key={1} />
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
                                                                onClick={this.showFeatures}
                                                            >More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                    })
                }

            </>
        )
    }
}

export default withRouter(ShowSearchPokemon);