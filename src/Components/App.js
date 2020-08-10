import React, { useState } from 'react';
import '../CSS/App.css';

import Header from "./Header";
import GoogleApiWrapper from "./MapChart";

function App() {

  const [location, setLocation] = useState("Macchu Picchu");
  const [searching, setSearch] = useState(location);

  const newLocation = (event, location) => {
    console.log("New Location", event)
    event.preventDefault();
    setSearch(document.getElementById("locationInput").value);
  }

  return (
    <div className="App">
      <Header setLocation={(event) => newLocation(event)}/>
      <div display="flex" className="content">
        <div>
          <GoogleApiWrapper location={searching}/>
        </div>
      </div>

    </div>
  );
}

export default App;
