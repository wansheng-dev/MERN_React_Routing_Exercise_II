import React, { useState, useEffect } from 'react';
import axios from 'axios';

function People (props) {
  const [ people, setPeople ] = useState(); 

  let peopleapi = 'https://swapi.co/api/people/' + props.id;

  useEffect (() => {
    axios.get(peopleapi)
      .then(response => {
        setPeople(response.data)
        console.log(response.data)
        console.log(people)
      });
    },[]);

  return (
    <>
      <div>
        { people !== undefined && 
          Object.keys(people).slice(0,4).map((key) => (
            <p id="peopleTag" key={key}> {key}: {people[key]}</p>
        ))}
      </div>
    </>
  )
}

export default People;