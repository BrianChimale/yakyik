//The equivalent of the following line in ES5 becomes:
//var React = require('react')
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'

class App extends Component {

    render(){
        return (
            <div>
                YakYik!
                <Home />
            </div>
        )
    }
}

//This is the only point where the react code interacts with the HTML dom
ReactDOM.render(<App />, document.getElementById('root'))


