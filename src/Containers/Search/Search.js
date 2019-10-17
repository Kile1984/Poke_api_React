import React from 'react';
import "./Search.scss";
import input_search_img from '../../img/input-search-bg.png';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: ""
        }
        this.searchPoke = this.searchPoke.bind(this);
        this.searchPokeSubmit = this.searchPokeSubmit.bind(this);
    }
    searchPoke(e){
        this.setState({
            name: e.target.value
        })
    }
    searchPokeSubmit(e){
        e.preventDefault();
        this.props.history.push("/search-pokemon/" + this.state.name);
    }
    render() {
        
        return (
            <div className="container-fluid search">
                <div className="container search">
                    <div className="row">
                        <div className="col-12 col-md-6 searc-left-col">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput" className="mb-0"><h2>Name or Number</h2></label>
                                    <input type="text" className="form-control" id="searchInput" 
                                    onChange={this.searchPoke}/>
                                    <div className="input-text mt-2">Use the Advanced Search to explore Pokemon Ability, Name, ID!</div>
                                </div>
                                <button className="btn btn-primary btn-custom-search position-absolute mb-2"
                                onClick={this.searchPokeSubmit}>
                                    <img src={input_search_img} alt="input-search-bg"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Search);