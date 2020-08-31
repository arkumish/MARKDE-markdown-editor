import React,{useState,useEffect} from 'react';
import './index.css';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip'
import { Switch } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

function Header() {
const [state, setState] = useState({
        gfmOff: true
      });
const [githubToolTip, setGithubToolTip] = useState('Github Mode On');

    
const handleChange = (event) => {
      const status = event.target.checked;

        setState({gfmOff : status});
        if(state.gfmOff===true){
            setGithubToolTip('Github Mode Off');
        }else{
            setGithubToolTip('Github Mode On');
        }
        console.log(state,event.target.value,event)
      };
    return (
        <div className="nav">
            <AppBar position="static">
            <Typography style={{marginRight:0 }} variant="h5" >
             MARKDOWN EDITOR
          </Typography>
          <Tooltip title={githubToolTip} aria-label="Toggle Github Mode">
          <Switch
        style={{color:"black",fontSize: 118}}
        checked={state.gfmOff}
        color='black'
        onChange={handleChange}
        name="GFM togle"
        checkedIcon={<GitHubIcon style={{marginTop:'-5px',fontSize: 28,background:'white', color:'black', borderRadius:'500%'}}fontSize=""/>}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </Tooltip>


         
     
            </AppBar>
        </div>
    )
}

export default Header
