import React, { useState } from 'react'
import "./index.css";
import "./github-markdown.css";

import {Tabs,Tab,AppBar} from '@material-ui/core';
import markdownConverterService from "../../service/converter";

const OutputBox = ({ inputValue, githubMode }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const outputHandleChange = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
  };

  const outputRenderSwitch = (param) => {
    switch (param) {
      case 0:
        return <div dangerouslySetInnerHTML={{ __html: markdownConverterService(inputValue,githubMode) }}></div>;
      case 1:
        return markdownConverterService(inputValue,githubMode)
      default:
        return;
    }
  }

  return (
    <div className="container-item output-c br-top br-left">
      <AppBar position="static" style={{ padding: 0,backgroundColor:"black" }}>
          <Tabs style={{minHeight:'12px'}}
            value={selectedTab}
            indicatorColor="secondary"
            onChange={outputHandleChange}
            aria-label="Output option tab "
          >
            <Tab  label="Preview" />
            <Tab label="Raw" />

         </Tabs>
      </AppBar>
      <div className={githubMode ? "body-output markdown-body" : "body-output"}>
        {outputRenderSwitch(selectedTab)}
      </div>
    </div>
  )
}

export default OutputBox
