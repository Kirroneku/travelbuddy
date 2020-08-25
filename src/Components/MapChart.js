import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const SimpleMap = ({location}) => {
    const API_KEY = "";
     return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }}>
            <iframe
            style={{
                width:"100%",
                height:"100%",
                frameborder:"0",
                border:"0"
            }}
            src={"https://www.google.com/maps/embed/v1/place?key=" + API_KEY+ "&q=" + location}
            allowfullscreen>
            </iframe>
        </div>
    );
  
}
 
export default SimpleMap;