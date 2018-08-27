import React, { Component } from 'react';
import AppHeader from './AppHeader';
import SearchBar from './SearchBar';
import ListBooks from './ListBooks';
import Pagination from './Pagination';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader title='Book Search'/>
        <SearchBar/>
        <ListBooks/>
        <Pagination/>
      </div>
    );
  }
}

export default App;
