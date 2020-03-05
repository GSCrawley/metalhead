import React, { Component } from 'react';
import './band.css'
import Like from './Like'

class Band extends Component {

    render() {

      return (
        <div className="band">
          <h2>{this.props.band_name}</h2>
          <h3>Formed: {this.props.formed}</h3>
          <h3>origin: {this.props.origin}</h3>
          <h3>fans: {this.props.fans}</h3>
        <Like />
        </div>
      )
    }

}

export default Band