import React,{Component} from 'react'
import './Track.css'


class Track extends Component {

     render() {
         return (
              
              <div className="Track">
                <div className="Track-information">
                  <h3>Tiny Dancer</h3>
                  <p>Elsdjdhohn | Madman Across The Water</p>
                </div>
                <a className="Track-action">+</a>
              </div>
         )
     }

}

export default Track;