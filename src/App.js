import React, {useState} from 'react';
import Header from './Header/Header';
import "./index.css";

const showdown  = require('showdown');
var converter = new showdown.Converter();

function App() {

const [inputValue, setInputValue] = useState('');

  return (
   <>
   <Header>
   </Header>
    
   <div className="container">
     <div className="input-c">
   <textarea value={inputValue} onChange={e => setInputValue(e.target.value)}></textarea>
   </div>
   <div className="output-c">
     <div dangerouslySetInnerHTML={{__html:converter.makeHtml(inputValue)}}></div>
   {/* {converter.makeHtml(inputValue)} */}
   </div>
   </div>
   </>
  );
}

export default App;
