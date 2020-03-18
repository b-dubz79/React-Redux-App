import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotosList from './Components/PhotosForm'

function App() {
  return (
  <div>
    <h1>Mars Photos</h1>
    <PhotosForm/>
  </div>
  );
}

export default App;

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Tw7a1PnFM9djgyCqi70x52uHUhVeEmeEBXLhMLiH