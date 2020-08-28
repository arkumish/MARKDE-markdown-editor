import React from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

function Header() {
    return (
        <div className="nav">
            <AppBar position="static">
            <Typography style={{marginRight:0 }} variant="h5" >
             MARKDOWN EDITOR
          </Typography>
            </AppBar>
        </div>
    )
}

export default Header
