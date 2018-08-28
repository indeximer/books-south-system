import React, {Component} from 'react';
import Container from './Container';
import {DebounceInput} from 'react-debounce-input';
import PropTypes from 'prop-types';

class SearchBar extends Component{
    
    static propTypes = {
        onSearchBooks: PropTypes.func.isRequired
    }

    state ={
        query:''
    }

    updateQuery(value){
        const query = encodeURI(value);
        this.setState({query : query});

        this.props.onSearchBooks(query);
    }

    render(){
        return(
            <Container>
                <div className="row">
                    <div className="col s12">
                        <div className="card-panel search-bar">
                            <div className="input-field">
                                <i className="material-icons prefix">search</i>
                                <DebounceInput
                                    debounceTimeout={500}
                                    type="text"
                                    value={this.state.query}
                                    onChange={(event) => this.updateQuery(event.target.value)}
                                />
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