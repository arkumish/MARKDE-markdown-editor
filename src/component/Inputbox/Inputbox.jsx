import React, { useState, useEffect } from 'react'
import "./index.css";
import { AppBar, Tabs, Tab, Grid, Tooltip, Fab } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab"
import AddIcon from '@material-ui/icons/Add';
import Close from "@material-ui/icons/Close";
import sample from '../../sample';


const InputBox = ({ inputValueUpdate, inputValue }) => {

  const [tabList, setTabList] = useState([
    {
      id: 0,
      input: sample,
      label: "Sample"
    }
  ]);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    inputValueUpdate("inputValue", tabList[0].input);
  }, [])

  const handleTabChange = (event, value) => {
    setTabValue(value);
    inputValueUpdate("inputValue", tabList[value].input);
  };

  const addTab = () => {
    let id = tabList[tabList.length - 1].id + 1;
    setTabList([...tabList, { id: id, input: '', label: `Tab ${id + 1}` }]);
    setTabValue(id);
    inputValueUpdate("inputValue", '');
  };

  const deleteTab = e => {
    e.stopPropagation();
    if (tabList.length === 1) {
      return;
    }
    let tabId = parseInt(e.target.id);
    let tabIDIndex = 0;

    let tabs = tabList.filter((value, index) => {
      if (value.id === tabId) {
        tabIDIndex = index;
      }
      return value.id !== tabId;
    });

    let curValue = parseInt(tabValue);
    if (curValue === tabId) {
      if (tabIDIndex === 0) {
        curValue = tabList[tabIDIndex + 1].id;
      } else {
        curValue = tabList[tabIDIndex - 1].id;
      }
    }
    setTabValue(curValue);
    setTabList(tabs);
    inputValueUpdate("inputValue", tabList[curValue].input);
  };

  const updateInputValue = (event) => {
    let newArr = [...tabList];
    newArr[tabValue].input = event.target.value;
    setTabList(newArr);
    inputValueUpdate("inputValue", event.target.value);

  }
  return (
    <div className="container-item input-c br-top br-right">
      <TabContext value={tabValue}>
        <AppBar position="static" style={{ padding: 0, backgroundColor: "black" }}>
          <Grid container alignItems="center" >
            <Grid item xs={11}>
              <Tabs
                size="small"
                value={tabValue}
                onChange={handleTabChange}
                aria-label="input tabs"
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="on"

              >
                {tabList.map(tab => (
                  <Tab
                    key={tab.id.toString()}
                    value={tab.id}
                    label={tab.label}
                    icon={<Close id={tab.id} onClick={deleteTab} />}
                    className="mytab"
                    style={{ minHeight: '12px' }}
                  />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1}>
              <Tooltip title="Add New Tab" aria-label="add">
                <Fab color="secondary" >
                  <AddIcon onClick={addTab} />
                </Fab>
              </Tooltip>
            </Grid>
          </Grid>
        </AppBar>
        {tabList.map(tab => (
          <TabPanel
            key={tab.id.toString()}
            value={tab.id}
          >
            <textarea value={tab.input} type="text" onInput={updateInputValue} placeholder="Write your markdown text here" />
          </TabPanel>
        ))}

      </TabContext>

    </div>

  )
}

export default InputBox



