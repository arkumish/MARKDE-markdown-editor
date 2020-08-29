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
   
   <textarea className="container-item input-c" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Write your markdown text here"></textarea>
   
   <div className="container-item output-c">
     <div dangerouslySetInnerHTML={{__html:converter.makeHtml(inputValue)}}></div>
   {/* {converter.makeHtml(inputValue)} */}
   </div>
   </div>
   </>
  );
}

export default App;
