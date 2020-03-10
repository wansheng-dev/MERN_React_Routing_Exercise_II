import React, { useState } from 'react';


function Search (){

  const [ item, setItems ] = useState([]);

  const handleChange = e => {
    axios.get()
    console.log(e.target.value)
  };


  return (
    <div>
      <p> ID </p>
      <form>
        <input />
        <button type="submit"> Search </button>
      </form>

    </div>
  )

}

export default Search;
