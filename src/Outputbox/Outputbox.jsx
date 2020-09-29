import React,{useState} from 'react'
import "./index.css";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';


import marked from 'marked';


const Outputbox = ({inputValue}) => {
const [inputTabValue, setInputTabValue] = useState(0);

    
const render_tasklist = function(str){
    // Checked task-list box match
    str = str.toString();
    if(str.match(/<li><input.*<\/li>/gi)){
      str = str.replace(/(<li>)(<input.*<\/li>)/gi, 
        `<li style="list-style-type: none;">$2`);
  }
      return str
  }
  
  // require('./emojify.js');
  
  marked.setOptions({
    renderer : new marked.Renderer(),
    gfm: true,
  })


  

  
  const outputHandleChange = (event, newInputTabValue) => {
    setInputTabValue(newInputTabValue);
  };

  


  const outputRenderSwitch = (param) => {
    switch (param) {
      case 0:
        return <div dangerouslySetInnerHTML={{ __html: render_tasklist(marked(inputValue)) }}></div>;
      case 1:
        return render_tasklist(marked(inputValue))
      default:
        return;
    }
  }
    return (
            <div className="container-item output-c">
          <AppBar position="static" style={{ padding: 0 }}>
            <Tabs
              inputTabValue={inputTabValue}
              indicatorColor="secondary"
              onChange={outputHandleChange}
              aria-label="output tabs example"
            > 
              <Tab label="Preview" />
              <Tab label="Raw" />


            </Tabs>
          </AppBar>
          <div className="body-output markdown-body">
            {outputRenderSwitch(inputTabValue)}
            {console.log(render_tasklist(marked(inputValue)))}
          
          </div>
        </div>
    )
}

export default Outputbox
