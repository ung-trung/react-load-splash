import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import NavBar from './components/NavBar';

import unsplash from './api/unsplash';

export class App extends Component {
  state = { images: [] };

  async componentDidMount() {
    const res = await unsplash.get('/search/photos', {
      params: { query: 'splash' }
    });
    this.setState({ images: res.data.results });
  }

  onSearchSubmit = async term => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="App ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} name="Image Search" />
          <ImageList images={this.state.images} />
        </div>
      </>
    );
  }
}

export default App;
