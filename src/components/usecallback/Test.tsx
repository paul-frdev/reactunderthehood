import { Component, ReactNode } from 'react';

export class Test extends Component {
    onClick = () => {
        console.log('onclick');
    }
    
    render() {
        return (
            <button onClick={this.onClick}>test</button>
        )
    }
}