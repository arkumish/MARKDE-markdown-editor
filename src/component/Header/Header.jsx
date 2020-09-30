import React, { useState} from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip'
import { Switch } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import SaveIcon from '@material-ui/icons/Save';
import PublishIcon from '@material-ui/icons/Publish';

function Header({gfmUpdate}) {
    const [state, setState] = useState({
        gfmOff: true
    });
    const [githubToolTip, setGithubToolTip] = useState('Github Mode On');


    const handleChange = (event) => {
        const status = event.target.checked;

        setState({ gfmOff: status });
        gfmUpdate(!state.gfmOff);
        if (state.gfmOff === true) {
            setGithubToolTip('Github Mode Off');
        } else {
            setGithubToolTip('Github Mode On');
        }
        console.log(state, event.target.value, event)
    };
    return (
        <div className="nav">
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{ marginRight: 0 }} variant="h5" >
                        MARKDOWN EDITOR
          </Typography>

                    <div className="menu-option">
                
                    <IconButton aria-label="Upload" style={{ color: "black" }}>
                            <PublishIcon />
                        </IconButton>
                        <IconButton aria-label="Download" style={{ color: "black" }}>
                            <SaveIcon />
                        </IconButton>
                        <Tooltip title={githubToolTip} aria-label="Toggle Github Mode">
                            <Switch
                                style={{ color: "black" }}
                                checked={state.gfmOff}
                                color='black'
                                onChange={handleChange}
                                name="GFM toggle switch"
                                checkedIcon={<GitHubIcon style={{ marginTop: '-5px', fontSize: 28, background: 'white', color: 'black', borderRadius: '500%' }} fontSize="" />}
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
