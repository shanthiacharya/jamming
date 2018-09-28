import React,{Component} from 'react';
import './PlayList.css'


class PlayList extends Component {
    render() {
         return (
            <div className="Playlist">
                <input value='New Playlist' />
                <div className="TrackList">
                    <div className="Track">
                        <div className="Track-information">
                        <h3>Stronger</h3>
                        <p>Britney Spears | Oops!... I Did It Again</p>
                        </div>
                        <a className="Track-action">-</a>
                    </div>
                </div>
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>   
        )
    }
};

export default PlayList;