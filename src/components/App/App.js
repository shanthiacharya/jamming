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
      tracks: [],
      playlisttracks:[]
    }
    this.searchSpotify = this.searchSpotify.bind(this);
   
  }

  searchSpotify (term) {
    console.log("Search Term:" + term)
    Spotify.search(term).then (tracks => {
      this.setState ({tracks:tracks});
      console.log ("App.js :" + this.state.tracks)
    })
  }

 

  handleAddTracks = (track) => {
    console.log("App :   handleAddTracks")
    if (!this.state.playlisttracks.find(playlistTrack => playlistTrack.id === track.id)) {
      this.setState(prevState => ({
        playlisttracks: [...prevState.playlisttracks, track]
      }));
    }
    console.log("playlisttracks length" + this.state.playlisttracks.length)
  }

  handleDeleteTracks = (tobedeleted_track) => {
    console.log("App.s handle delete tracks")
    let filtered_playlist = this.state.playlisttracks.filter(track => track.id !== tobedeleted_track.id );
    this.setState({playlisttracks:filtered_playlist})
  }


  saveplaylistToSpotify = (name) => {

    console.log ("About to save playlist :" + name)
    const trackURIs = this.state.playlisttracks.map(track => track.uri)
    Spotify.savePlayList(name,trackURIs);
  }



  render() {
    return (
      <div>
         <h1> Ja<span className="highlight">mmm</span>ing</h1>
         <div className="App">
            <SearchBar searchSpotify = {this.searchSpotify}/>
            <div className="App-playlist">
              <TrackList tracks = {this.state.tracks} 
                addtoPlayList = {this.handleAddTracks }  
                deleteFromPlaylist = {this.handleDeleteTracks } />
              <PlayList  playlistItems = {this.state.playlisttracks}
               savetoPlaylist = {this.saveplaylistToSpotify} 
               deletefromPlayList = {this.handleDeleteTracks }/>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
