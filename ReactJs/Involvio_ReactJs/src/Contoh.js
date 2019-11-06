import React, {Component} from 'react';

class Contoh extends Component{
        state = {message: "Contoh State"}
    render() {
        return <h1>{this.state.message}</h1>
    }
}

export default Contoh;