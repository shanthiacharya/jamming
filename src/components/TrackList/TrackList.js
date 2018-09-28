import React,{Component} from 'react'
import Track from '../Track/Track'
import './TrackList.css'


class TrackList extends Component {

     render() {
        return (
           
              <div className="SearchResults">
                <h2>Results</h2>
                <div className="TrackList">
                      <Track/>
                </div>
               </div> 
            
        ) 
        
     }

}

export default TrackList;