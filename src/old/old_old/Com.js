import React, { Component } from 'react';
import './App.css';


class Com extends Component {
    handleClick() {
        
    }
    render() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    
    }
}
  
export default Com;
