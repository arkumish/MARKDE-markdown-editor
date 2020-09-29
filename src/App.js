import React, { Component } from 'react'
import Header from './Header/Header';
import "./index.css";
import Inputbox from './Inputbox/Inputbox';
import Outputbox from './Outputbox/Outputbox';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            // convertedValue: "",
            // value:"",
            gfmMode: true,
        }
    }

    UpdateInputValue(param) {
        this.setState({
            inputValue: param
        })
     
    }

    UpdateGfmMode(status) {
        this.setState({
            gfm: status
        })
    }

    


render() {
    return (
        <div>
            <Header></Header>
            <div className="container">
            <Inputbox inputUpdate={this.UpdateInputValue.bind(this)}></Inputbox>
            <Outputbox inputValue={this.state.inputValue} />
            </div>
        </div>
    )
}
}

export default App
