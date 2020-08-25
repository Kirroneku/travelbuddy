import React, { Component } from 'react';
import '../CSS/Card.css';

const Card = ({children}) => {
     return (
        // Important! Always set the container height explicitly
        <div className="card">
            {children}
        </div>
    );
  
}
 
export default Card;