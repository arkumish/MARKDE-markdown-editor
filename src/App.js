import React, { useState } from 'react';
import Header from './Header/Header';
import "./index.css";
import "./github-markdown.css";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';


import sample from './sample';
import marked from 'marked';

marked.setOptions({
  renderer : new marked.Renderer(),
  baseUrl: null,
  breaks: true,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  walkTokens: null,
  xhtml: false

})


function App() {

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(0);
  const [inputTabValue, setInputTabValue] = useState(0);

  


  const outputHandleChange = (event, newValue) => {
    setValue(newValue);
  };

  const inputHandleChange = (event, newInputTabValue) => {
    setInputTabValue(newInputTabValue);
    switch (newInputTabValue) {
      case 0:
        setInputValue('');
        break;
      case 1:
        setInputValue(sample);
        break;
      default:
      return 0;
    }
  };


  const outputRenderSwitch = (param) => {
    switch (param) {
      case 0:
        return <div dangerouslySetInnerHTML={{ __html: marked(inputValue) }}></div>;
      case 1:
        return marked(inputValue)
      default:
        return;
    }
  }

  return (
    <>
      <Header>
     
      </Header>
      
      <div className="container">



        <div className="container-item input-c">
          <AppBar position="static" style={{ padding: 0 }}>
            <Tabs
              value={inputTabValue}
              indicatorColor="secondary"
              onChange={inputHandleChange}
              aria-label="input tabs example"
            >
              <Tab label="Start New" />
              <Tab label="Load Sample" />
            </Tabs>
          </AppBar>

          <textarea value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Write your markdown text here">
          </textarea>
        </div>

        <div className="container-item output-c">
          <AppBar position="static" style={{ padding: 0 }}>
            <Tabs
              value={value}
              indicatorColor="secondary"
              onChange={outputHandleChange}
              aria-label="output tabs example"
            >
              <Tab label="Preview" />
              <Tab label="Raw" />


            </Tabs>
          </AppBar>
          <div className="body-output markdown-body">
            {outputRenderSwitch(value)}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
