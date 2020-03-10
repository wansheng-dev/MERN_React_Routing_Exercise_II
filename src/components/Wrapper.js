import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import People from './People';

const Wrapper = props => {

  const [ options, setOptions ] = useState([]);
  const [ url, setURL ] = useState("");
  const [ id, setId ] = useState(0);
  const [ detail, setDetail ] = useState();
  const [ err, setErr ] = useState(false);
  
  useEffect (() => {
    axios.get('https://swapi.co/api/')
      .then(response => {
        setOptions(response.data)
      });
  },[]);
  
  const handleChange = e => {
    setURL(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!id) return;
    setId(0);
    setErr(false);
    console.log(url);
    console.log(id);
    console.log(url+id);

    
    axios.get(url + id + "/")
      .then(response => {
        setDetail(response.data)
        console.log(response.data)
        console.log(detail)
      })
      .catch( errer => {
        setErr(true);
        setDetail();
        console.log(err)
      })
  };


  return (
    <>
      <div>
        <p>Search for:</p>
        <select onChange={handleChange} value={url}>
          <option value="" disabled>Select an Option</option>
          { Object.keys(options).map(( option ) => (
            <option key={option} name={option} value={options[option]}> { option } </option>
          ))}
        </select>
      </div>
      <div>
        <p> ID </p>
        <form onSubmit={handleSubmit}>
          <input 
            type = "number"
            value = {id}
            onChange = {e => setId(+e.target.value)}
            placeholder = "Enter ID Here"
          />
          <button type="submit"> Search </button>
        </form>
      </div>
      <div>
        { detail !== undefined && 
          Object.keys(detail).slice(0,4).map((key) => (
            <p key={key}> {key}: {detail[key]}</p>
        ))}
      </div>
      <div>
        { err === true ? <><h3>It was a trap!</h3> <img src="https://steemitimages.com/DQmUJ3KK912y7PJnUDPLTRhBoeodAWQ5nqxumD6HyhV9kSH/-1.jpg" alt="" height="300"/> </> : <p></p> }
      </div>
      <Router>
        <People path="/:id"></People>
      </Router>
    </>
  )
}

export default Wrapper;