import React from 'react';
import '../CSS/Header.css';
// import { Link } from 'react-router-dom';

const isMobile = document.body.clientWidth < 500? true: false;

const Header = ({ setLocation }) => {

    // let { current } = this.props;

    const socialStyle = {
        "float": "right",
        "marginTop": "0.5em",
        // "marginRight": "min(200px, 10%)"
    }
    
    if( isMobile ) {
    }

    return (     

        <div>
            <div className="header" style={{height: "3em", letterSpacing:"0.1em"}}>
            
            <form onSubmit={setLocation}>
                <input type="text" id="locationInput" placeholder="Search"></input> 
                <input id="searchSubmit" type="submit" value="&#xf002;"/>

            </form>
            </div>
            {/* {this.props.children}   */}
        </div> 

    )
    
   
}

export default Header;