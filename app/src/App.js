import React, { useState, useEffect } from 'react';
import { getReq } from './api/getReq';
import './App.css';
import Module from './Module.jsx';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getReq()
    .then((response) => {
      console.log(response.data)
      setData(response.data.campaigns)

    }).catch((error) => {
      console.log(error)
    })


  }, [])



  return (
    <div className="App">
      {data.map((item, index) => {
        return(
          <Module info = {item} key = {item.id}/>
        )
      })}
    </div>
  );
}

export default App;
