import React, { useState } from 'react';
import '../CSS/App.css';
import GoogleApiWrapper from "./MapChart";

function App() {
  return (
    <div className="App">
      <GoogleApiWrapper location={"Machu picchu, peru"}/>
    </div>
  );
}

export default App;
