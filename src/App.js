import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header'
import Grid from './Components/Grid/Grid';
import ImagePage from './Components/ImagePage/ImagePage';
import Cart from './Components/Cart/Cart';

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const responseJson = await response.json()
      setData(responseJson)
    }
    fetchData('http://localhost:3001/api/v1/images')
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Grid data={data} />} />
        <Route path='/images/:id' element={<ImagePage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
