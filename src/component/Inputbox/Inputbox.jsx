import React,{useState} from 'react'
import "./index.css";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import sample from '../../sample';

const Inputbox = ({inputUpdate}) => {

  const [inputValue, setInputValue] = useState('');
  const [inputTabValue, setInputTabValue] = useState(0);

 const updateInputValue = (event) =>{
    console.log("i m here");
    setInputValue(event.target.value);
    inputUpdate(inputValue);
 }

  const inputHandleChange = (event, newInputTabValue) => {
    setInputTabValue(newInputTabValue);
    switch (newInputTabValue) {
      case 0:
        inputUpdate('')
        setInputValue('');
        break;
      case 1:
        inputUpdate(sample);
        setInputValue(sample);
        break;
      default:
      return 0;
    }
  };


    return (
             <div className="container-item input-c">
             <AppBar position="static" style={{ padding: 0}}>
            <Tabs style={{minHeight:'12px'}}
             size="small"
              value={inputTabValue}
              indicatorColor="secondary"
              onChange={inputHandleChange}
              aria-label="input tabs example"
            >
              <Tab  style={{minHeight:'12px'}} label="Start New" />
              <Tab  style={{minHeight:'12px'}} label="Load Sample" />
            </Tabs>
          </AppBar>

          <textarea value={inputValue} type="text" onChange={updateInputValue} placeholder="Write your markdown text here">
          </textarea>
             </div>
    
    )
}

export default Inputbox



