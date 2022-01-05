import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

const App = () => {

  const[data, setData] = useState('')

  useEffect( () => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const responseJson = await response.json()
      setData(responseJson)
    }
    fetchData('http://localhost:3001/api/v1/images')
  }, [])

  return (
    <div className="App">
      <h1>Under A Tack</h1>
      

    </div>
  );
}

export default App;
