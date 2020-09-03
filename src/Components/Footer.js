import React from 'react';

const Footer = ({setPage}) =>{

    return(
        <div className="footer" style={{color: "rgba(67, 70, 223, 0.555)"}}>
            <a style={{margin: "0.2em"}} onClick={() => setPage(0)}>Home</a>| 
            <a style={{margin: "0.2em"}} onClick={() => setPage(1)}>Lol</a> 
        </div>
    )
}

export default Footer;