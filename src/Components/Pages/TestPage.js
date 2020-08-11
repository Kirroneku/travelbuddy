import React from 'react';
import GoogleApiWrapper from "../MapChart";

function TestPage ({location}) {
    return (
        <GoogleApiWrapper location={location}/>
    );
}

export default TestPage;