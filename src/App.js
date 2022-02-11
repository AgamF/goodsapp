import React, { Component } from 'react';
import Signin from './Signin';
import Home from './Home';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isNamed: false,
            name: ''
        }
    }

    signIn = () => {
        const input = document.querySelector('input')
        this.setState({ isNamed: true,
        name: input.value });
    }

    render() {
        const { isNamed, name } = this.state;
        if (!isNamed) return <Signin signIn={this.signIn}/>
        else return <Home name={name}/>;
    }
}

export default App;