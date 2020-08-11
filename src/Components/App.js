import React, { useState } from 'react';
import '../CSS/App.css';

import Header from "./Header";
import PageData from "../Data/PageData.js";

import TestPage from "./Pages/TestPage";

function App() {

  const [location, setLocation] = useState("Macchu Picchu");
  const [searching, setSearch] = useState(location);
  const [currentPage, setPage] = useState(0);

  const newLocation = (event, location) => {
    console.log("New Location", event)
    event.preventDefault();
    setSearch(document.getElementById("locationInput").value);
  }

  let displayPage;

  switch( currentPage ) {
    case 0:
      displayPage = <TestPage location={searching}></TestPage>
      break;
    case 1:
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <Header setLocation={(event) => newLocation(event)}/>
      <div display="flex" className="content">
        <div>
          {displayPage}
        </div>
      </div>

    </div>
  );
}

export default App;
