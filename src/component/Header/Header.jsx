import React, { useState } from 'react';
import './index.css';
import { AppBar, Switch, Tooltip, Toolbar, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import TopIcon from '../../assets/icon.svg'
import GetApp from '@material-ui/icons/GetApp';
import Info from '@material-ui/icons/Info';

import downloadFileService from '../../service/downloadFile';


const Header = ({ githubModeUpdate, isGithubModeSelected, inputValue }) => {

    const [githubToolTip, setGithubToolTip] = useState('Github Mode On');
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleChange = (event) => {
        githubModeUpdate("githubMode", event.target.checked);
        (isGithubModeSelected === true) ? setGithubToolTip('Github Mode Off') : setGithubToolTip('Github Mode On');
    };

    return (
        <>
            <div className="nav">
                <AppBar position="static" style={{ backgroundColor: "#2a2f32" }}>
                    <Toolbar>
                        <img src={TopIcon} className="header-icon" alt="markdown editor"></img>
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
                                <IconButton onClick={handleDialogOpen} aria-label="Information" style={{ color: "white" }} >
                                    <Info />
                                </IconButton>
                            </Tooltip>

                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle >
                    <span role="img" aria-label="title">Hey there 👋</span></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <span role="img" aria-label="description">Firstly thank you for reaching out here 😄. Markde is created to provide ease in writing the markdowns, especially for Github. </span>

                       <h3>Features</h3>
                        <ul>
                            <li>Support Standard Markdown / CommonMark and GFM(GitHub Flavored Markdown);</li>
                            <li>Easy toggle switch between commonMark and GFM.</li>
                            <li>Multi Tab for handling multiple markdowns.</li>
                            <li>Direct download.</li>
                            <li>Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables.</li>
                            <li>Markdown Extras : Support ToC (Table of Contents), Emoji, Task lists, @Links.</li>
                        </ul>

                        <GitHubIcon /> Wanna contribute. <a href="https://github.com/arkumish/MARKDE-markdown-editor" target="_blank" rel="noopener noreferrer">Click here</a>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Header
