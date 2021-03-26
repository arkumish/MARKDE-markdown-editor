import React, { useState, useEffect } from 'react'
import "./index.css";
import { AppBar, Tabs, Tab, Grid, Tooltip, Fab } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab"
import AddIcon from '@material-ui/icons/Add';
import Close from "@material-ui/icons/Close";
import sample from '../../sample';


const InputBox = ({ inputValueUpdate}) => {

  const [tabList, setTabList] = useState([
    { input: sample,
      label: "Sample"
    }
  ]);
  const [tabValue, setTabValue] = useState(0);
  const [tabCounter, setTabCounter] = useState(0);

  useEffect(() => {
    inputValueUpdate("inputValue", tabList[0].input);
  }, [])

  const handleTabChange = (event, value) => {
    setTabValue(value);
    inputValueUpdate("inputValue", tabList[value].input);
  };

  const addTab = () => {
    let id = tabList.length + 1;
    setTabList([...tabList, { input: '', label: `Tab ${tabCounter + 1}` }]);
    setTabValue(id - 1);
    inputValueUpdate("inputValue", '');
    setTabCounter(tabCounter + 1);

  };

  const deleteTab = (indexToDelete) => (e) => {
    e.stopPropagation();
    const tabCount = tabList.length;
    if (tabCount === 1) {
      return;
    }

    let tempTabList = [...tabList];
    tempTabList.splice(indexToDelete, 1);
    setTabList(tempTabList);

    let newCurrentTab;
    if (indexToDelete <= tabValue) //to delete current tab
    {
      newCurrentTab = indexToDelete
      inputValueUpdate("inputValue", tabList[newCurrentTab].input);
      setTabValue(newCurrentTab);
    }

  };

  const updateInputValue = (event) => {
    let newArr = [...tabList];
    newArr[tabValue].input = event.target.value;
    console.log("tab value", tabValue);
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
                {tabList.map((tab, index) => (
                  <Tab
                    key={index.toString()}
                    value={index}
                    label={tab.label}
                    icon={<Close id={index} onClick={deleteTab(index)} />}
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
        {tabList.map((tab, index) => (
          <TabPanel
            key={index.toString()}
            value={index}
          >
            <textarea value={tab.input} type="text" onInput={updateInputValue} placeholder="Write your markdown text here" />
          </TabPanel>
        ))}

      </TabContext>

    </div>
  )
}

export default InputBox



