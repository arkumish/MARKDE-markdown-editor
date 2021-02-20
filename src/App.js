import React, { Component } from 'react'
import "./index.css";
import "./common.css"
import Header from './component/Header/Header';
import Outputbox from './component/OutputBox/OutputBox';
import InputBox from './component/InputBox/InputBox';
export class App extends Component {
    state = {
        inputValue: '',
        githubMode: true,
    }


    handleStateUpdate = (stateName, value) => {
        this.setState({
            [stateName]: value
        })

    }

    render() {
        return (
            <>
                <Header
                    githubModeUpdate={this.handleStateUpdate}
                    isGithubModeSelected={this.state.githubMode}
                    inputValue={this.state.inputValue}
                />

                <div className="container">
                    <InputBox inputValueUpdate={this.handleStateUpdate} inputValue={this.state.inputValue} />
                    <Outputbox
                        inputValue={this.state.inputValue}
                        githubMode={this.state.githubMode}
                    />
                </div>
            </>
        )
    }
}

export default App
