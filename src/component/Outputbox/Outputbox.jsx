import React, { useState } from 'react'
import "./index.css";
import "../../common.css"
import "./github-markdown.css";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
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
            <Tab style={{ minHeight: '12px' }} label="Preview" />
            <Tab style={{ minHeight: '12px' }} label="Raw" />

         </Tabs>
      </AppBar>
      <div className={githubMode ? "body-output markdown-body" : "body-output"}>
        {outputRenderSwitch(selectedTab)}
      </div>
    </div>
  )
}

export default OutputBox
