import React, {Component} from 'react';
import Container from './Container';
import {DebounceInput} from 'react-debounce-input';
import * as BooksAPI from '../utils/BooksAPI';

class SearchBar extends Component{

    state ={
        query:''
    }

    updateQuery(value){
        const query = encodeURI(value);
        this.setState({query : query});

        BooksAPI.search(query)
        .then((books) => console.log(books));
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