import React, {Component} from 'react';
import Container from './Container';
//import PropTypes from 'prop-types';

class SearchBar extends Component{

    render(){
        return(
            <Container>
                <div className="row">
                    <div className="col s12">
                        <div className="card-panel search-bar">
                            <div className="input-field">
                                <i className="material-icons prefix">search</i>
                                <input type="text" id="query" />
                                <label htmlFor="query">Search</label>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default SearchBar;