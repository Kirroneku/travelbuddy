import React, { useState } from 'react';
import '../CSS/App.css';
import GoogleApiWrapper from "./MapChart";

function App() {

  const [location, setLocation] = useState("Macchu Picchu");
  const [searching, setSearch] = useState(location);

  const newLocation = (event) => {
    event.preventDefault();
    setSearch(location);
  }

  return (
    <div className="App">
      <div display="flex">
        <form onSubmit={newLocation}>
          <label>
            Location:
            <input type="text" id="locationInput" onChange={(event) => setLocation(event.target.value)}></input> 
          </label>
          <input type="submit" value="Search"/>

        </form>
        <div>
          <GoogleApiWrapper location={searching}/>
        </div>
      </div>

    </div>
  );
}

export default App;
