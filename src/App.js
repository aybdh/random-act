import './App.css';

import axios from "axios"
import { useState } from 'react';

function App() {
  const listType = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
  const [type,setType] = useState("education")
  const onChange = (value) => {
    console.log('selected ${value}');
    setType(value);
  };


  // Make a request for a user with a given ID
  axios.get('http://www.boredapi.com/api/activity/%27')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return (
    <div className='col-6'>

      <select
        onChange={e=>onChange(e.target.value)}
>{listType.map(type =>
        <option value={type}>{type}</option>)}
      </select>
      <h1>{type}</h1>
    </div>
  );
}

export default App;
