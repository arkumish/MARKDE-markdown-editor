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
            githubMode: true,
        }
    }

    handleStateUpdate = (stateName, value) => {
        console.log(stateName,value)
        this.setState({
            [stateName]: value
        })

    }

    render() {
        return (
            <>
                <Header
                    githubModeUpdate={this.handleStateUpdate}
                    inputValue={this.state.inputValue}
                />

                <div className="container">
                    <Inputbox inputValueUpdate={this.handleStateUpdate} />
                    <Outputbox
                        inputValue={this.state.inputValue}
                        gfmMode={this.state.githubMode}
                    />
                </div>
            </>
        )
    }
}

export default App
