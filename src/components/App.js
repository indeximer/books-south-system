import React, { Component } from 'react';
import AppHeader from './AppHeader';
import SearchBar from './SearchBar';
import ListBooks from './ListBooks';
import Pagination from './Pagination';
import * as BooksAPI from '../utils/BooksAPI';

class App extends Component {
  state = {
    books:[]
  }

  searchBooks = (query) => {
    if(query){
      BooksAPI.search(query)
      .then((books) => {
        if(books){
          this.setState({books})
        }else{
          this.setState({books:[]});
        }
      });
    }else{
      this.setState({books:[]});
    }
    
  }

  render() {
    return (
      <div className="App">
        <AppHeader title='Book Search'/>
        <SearchBar onSearchBooks={this.searchBooks}/>
        <ListBooks books={this.state.books}/>
        <Pagination/>
      </div>
    );
  }
}

export default App;
