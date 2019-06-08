import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

import unsplash from './api/unsplash';

export class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="App ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} name="Image Search" />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
