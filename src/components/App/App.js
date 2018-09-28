import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../util/Spotify'
import TrackList from '../TrackList/TrackList'
import PlayList from '../PlayList/PlayList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artists: []
    }
    this.searchSpotify = this.searchSpotify.bind(this);
  }

  searchSpotify (term) {
    console.log("Search Term:" + term)
    Spotify.search(term).then (artists => {
      this.setState ({artists:artists});
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchSpotify = {this.searchSpotify}/>
        <div className="App-playlist">
        <TrackList/>
        <PlayList />
         </div>
      </div>
    );
  }
}

export default App;
