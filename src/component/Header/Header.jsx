import React, { useState} from 'react';
import './index.css';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip'
import { Switch } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import TopIcon from '../../assets/icon.svg'

import GetApp from '@material-ui/icons/GetApp';
import download_file from '../../service/downloadFile';

function Header({githubModeUpdate,inputValue}) {
    const [state, setState] = useState({
        gfmOff: true
    });
    const [githubToolTip, setGithubToolTip] = useState('Github Mode On');


    const handleChange = (event) => {
        const status = event.target.checked;

        setState({ gfmOff: status });
        githubModeUpdate("githubMode",!state.gfmOff);
        if (state.gfmOff === true) {
            setGithubToolTip('Github Mode Off');
        } else {
            setGithubToolTip('Github Mode On');
        }
        console.log(state, event.target.value, event)
    };
   
    return (
        <div className="nav">
            <AppBar position="static" style={{backgroundColor:"#2a2f32"}}>
                <Toolbar>
                    <img src={TopIcon} alt="markdown editor"></img>

                    <div className="menu-option">
                
                    <Tooltip title="Download Markdown File" aria-label="Toggle Github Mode">
                        <IconButton onClick={() => { download_file(inputValue); }} aria-label="Download" style={{ color: "white" }} >
                            <GetApp />
                        </IconButton>
                    </Tooltip>    
                        <Tooltip title={githubToolTip} aria-label="Toggle Github Mode">
                            <Switch
                                style={{ color: "white" }}
                                checked={state.gfmOff}
                                color='black'
                                onChange={handleChange}
                                name="GFM toggle switch"
                                checkedIcon={<GitHubIcon style={{ marginTop: '-5px', fontSize: 28, background: 'black', color: 'white', borderRadius: '500%' }} fontSize="" />}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </Tooltip>

                    </div>
                </Toolbar>


            </AppBar>
        </div>
    )
}

export default Header
