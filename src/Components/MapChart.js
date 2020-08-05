import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const SimpleMap = ({location}) => {
     return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe
            style={{
                width:"100%",
                height:"100%",
                frameborder:"0",
                border:"0"
            }}
            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAcpGLtUQg1RVxIqZ42C6SSpMoeCBwLiBY&q=" + location}
            allowfullscreen>
            </iframe>
        </div>
    );
  
}git commit -m "some adjustments to work in google maps, might add in a on website autocorrect, probably not"
 
export default SimpleMap;