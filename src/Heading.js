import React, { Component } from 'react'
import data from './metal.json'

var length = data.length;

class Heading extends Component {
    render() {
        return (
            <div>
            <div className="Heading">
                <header>
                    <h1>FEW 1.2 Final Assessment</h1>
                    <h1>Gideon Crawley</h1>
                </header>
    
            </div>
    
            <div className="num_of_bands">
               <h1>Num. of bands = {length}</h1>
            </div>
            </div>
        )
    }
}

export default Heading