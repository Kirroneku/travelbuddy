import React, { useState } from 'react';
import '../CSS/Header.css';
// import { Link } from 'react-router-dom';

const isMobile = document.body.clientWidth < 500? true: false;

const Header = ({ setLocation }) => {

    const socialStyle = {
        "float": "right",
        "marginTop": "0.5em",
        // "marginRight": "min(200px, 10%)"
    }
    
    if( isMobile ) {
    }

    let [hasValue, setValue ] = useState(true);

    const locationChange = (location) => {
        setValue(location.target.value == "");
        console.log(hasValue == true);
    }

    return (     

        <div>
            <div className="header">
            
            <form onSubmit={setLocation}>
                <input type="text" id="locationInput" placeholder="Search" onChange={locationChange}></input> 
                <input id="searchSubmit" type="submit" value="&#xf002;" disabled={hasValue}/>
            </form>
            </div>
            {/* {this.props.children}   */}
        </div> 

    )
    
   
}

export default Header;