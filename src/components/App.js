import React, { Component } from 'react';
import Container from './Container';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader title='Book Search'/>

        <Container>
          <div className="row">
            <div className="col s12">
              <div className="card-panel search-bar">
              <div class="input-field">
                <i class="material-icons prefix">search</i>
                <input type="text" id="query" />
                <label for="query">Search</label>
              </div>
              </div>
            </div>
          </div>
          
        </Container>
      </div>
    );
  }
}

export default App;
