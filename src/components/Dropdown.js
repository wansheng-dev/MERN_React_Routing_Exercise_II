import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';

function Dropdown () {

  const [ options, setOptions ] = useState([]);

  useEffect (() => {
    axios.get('https://swapi.co/api/')
      .then(response => {
        setOptions(response.data)
        console.log(typeof(options));
        console.log(Object.keys(options));
      });
  },[]);


  const handleChange = e => {
    console.log(e.target.value)
  };

  return (
    <>
    <div>
      <p>Search for:</p>
      <select onChange={handleChange}>
        { Object.keys(options).map(( option ) => (
          <option key={option} name={option} value={options[option]}> { option } </option>
        ))}
      </select>
      {/* <form onSelect={handleSelect}>
        <select>
          <option name="People">People</option>
          <option name="Films">Films</option>
          <option name="Starships">Starships</option>
          <option name="Vehicles">Vehicles</option>
          <option name="Species">Species</option>
          <option name="Planets">Planets</option>
        </select>
      </form> */}
    </div>
    <div>
    </div>
  </>
  )
}

export default Dropdown;
