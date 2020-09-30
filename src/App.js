import React, { Component } from 'react'
import "./index.css";
import Header from './component/Header/Header';
import Outputbox from './component/Outputbox/Outputbox';
import Inputbox from './component/Inputbox/Inputbox';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
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
            gfmMode: status
        })
    }

    


render() {
    return (
        <>{console.log("gfm", this.state.gfmMode)}
            <Header gfmUpdate={this.UpdateGfmMode.bind(this)}></Header>
            <div className="container">
            <Inputbox className="container-item" inputUpdate={this.UpdateInputValue.bind(this)}></Inputbox>
            <Outputbox inputValue={this.state.inputValue} gfmMode={this.state.gfmMode} />
            </div>
        </>
    )
}
}

export default App
