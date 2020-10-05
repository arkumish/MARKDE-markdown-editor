import React, { useState } from 'react'
import "./index.css";
import "../../common.css"
import "./github-markdown.css";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import markdown_convertor from "../../service/converter";

const Outputbox = ({ inputValue, gfmMode }) => {
  const [inputTabValue, setInputTabValue] = useState(0);

  const outputHandleChange = (event, newInputTabValue) => {
    setInputTabValue(newInputTabValue);
  };

  const outputRenderSwitch = (param) => {
    switch (param) {
      case 0:
        return <div dangerouslySetInnerHTML={{ __html: markdown_convertor(inputValue,gfmMode) }}></div>;
      case 1:
        return markdown_convertor(inputValue,gfmMode)
      default:
        return;
    }
  }
  return (
    <div className="container-item output-c br-top br-left">
      <AppBar position="static" style={{ padding: 0,backgroundColor:"black" }}>
        <Tabs style={{minHeight:'12px'}}
          value={inputTabValue}
          indicatorColor="secondary"
          onChange={outputHandleChange}
          aria-label="output tabs example"
        >
          <Tab style={{ minHeight: '12px' }} label="Preview" />
          <Tab style={{ minHeight: '12px' }} label="Raw" />


        </Tabs>
      </AppBar>
      <div className={gfmMode ? "body-output markdown-body" : "body-output"}>
        {outputRenderSwitch(inputTabValue)}
        {/* {console.log(render_tasklist(marked(inputValue)))} */}

      </div>
    </div>
  )
}

export default Outputbox
