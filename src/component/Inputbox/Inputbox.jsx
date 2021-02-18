import React, { useState } from 'react'
import "./index.css";
import "../../common.css"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import sample from '../../sample';

const InputBox = ({ inputValueUpdate, inputValue }) => {
  // const [inputTabValue, setInputTabValue] = useState({
  //   tab1 : '',
  //   tab2 : sample
  // })
  const [startNewInputvalue, setStartNewInputvalue] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  const updateInputValue = (event) => {
    let value = event.target.value
    setStartNewInputvalue(value);
    inputValueUpdate("inputValue", value);

  }

  const inputHandleChange = (event, newSelectedTab) => {
    setSelectedTab(newSelectedTab);
    console.log(newSelectedTab);
    switch (newSelectedTab) {
      case 0:
        inputValueUpdate("inputValue", startNewInputvalue)
        break;
      case 1:
        inputValueUpdate("inputValue", sample);
        break;
      default:
        return 0;
    }
  };


  return (
    <div className="container-item input-c br-top br-right">
        <AppBar position="static" style={{ padding: 0, backgroundColor: "black" }}>
            <Tabs style={{ minHeight: '12px' }}
              size="small"
              value={selectedTab}
              indicatorColor="secondary"
              onChange={inputHandleChange}
              aria-label="input tabs"
            >
              <Tab style={{ minHeight: '12px' }} label="Start New" />
              <Tab style={{ minHeight: '12px' }} label="Load Sample" />
            </Tabs>
        </AppBar>


        <textarea value={inputValue} type="text" onInput={updateInputValue} placeholder="Write your markdown text here"/>
    </div>

  )
}

export default InputBox



