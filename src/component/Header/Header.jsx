import React, { useState } from 'react';
import './index.css';

import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip'
import { Switch } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import GitHubIcon from '@material-ui/icons/GitHub';
import TopIcon from '../../assets/icon.svg'
import GetApp from '@material-ui/icons/GetApp';
import Info from '@material-ui/icons/Info';

import downloadFileService from '../../service/downloadFile';


const Header = ({ githubModeUpdate, isGithubModeSelected, inputValue })=> {

    const [githubToolTip, setGithubToolTip] = useState('Github Mode On');

    const handleChange = (event) => {

        githubModeUpdate("githubMode", event.target.checked);
        (isGithubModeSelected === true) ? setGithubToolTip('Github Mode Off') : setGithubToolTip('Github Mode On');
    };

    return (
        <div className="nav">
            <AppBar position="static" style={{ backgroundColor: "#2a2f32" }}>
                <Toolbar>
                    <img src={TopIcon} alt="markdown editor"></img>
                        <div className="menu-option">
                            <Tooltip title={githubToolTip} aria-label="Toggle Github Mode">
                                <Switch
                                    style={{ color: "white" }}
                                    checked={isGithubModeSelected}
                                    color='black'
                                    onChange={handleChange}
                                    name="GFM toggle switch"
                                    checkedIcon={<GitHubIcon style={{ marginTop: '-5px', fontSize: 28, background: 'black', color: 'white', borderRadius: '500%' }} fontSize="" />}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </Tooltip>
                            <Tooltip title="Download Markdown File" aria-label="Download Markdow File">
                                <IconButton onClick={() => { downloadFileService(inputValue); }} aria-label="Download" style={{ color: "white" }} >
                                    <GetApp />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Information" aria-label="Information">
                                <IconButton onClick={() => { downloadFileService(inputValue); }} aria-label="Download" style={{ color: "white" }} >
                                    <Info />
                                </IconButton>
                            </Tooltip>

                        </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
