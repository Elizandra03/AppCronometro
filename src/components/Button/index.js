import React, { Component } from 'react';

class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-buttons">
                <button onClick={this.props.action}>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;