import React, {useState} from 'react';
import {Input} from "../index";
import './styles/style.css'

const Autocomplete = ({list}) => {

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onItemClick = (item) => {
    setValue(item)
  }

  const [value, setValue] = useState('');


  let suggestionsList = () => {
    return filteredSuggestions.map((item, index) => {
      return (
        <div key={index} className={"list-item"} onClick={()=>onItemClick(item)}>
          {item}
        </div>
      )
    })
  }
  console.log('list', list)

  let filteredSuggestions = list.reduce((acc, { name }) => {
    if (name.toLowerCase().startsWith(value.toLowerCase()) && !acc.includes(name) && value.length>0) {
      acc.push(name)
    }
    console.log('list.name', list.name)
    console.log('value', value)

    return acc;
  }, []);

  console.log('suggestionsList()', suggestionsList())

  return (
    <div className={"container"}>
      <Input value={value} onChange={onChange}/>
      <div className={"list-wrapper"}>
        {suggestionsList()}
      </div>
    </div>

  );
};

export default Autocomplete;