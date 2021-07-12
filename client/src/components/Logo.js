import React from 'react';
import logo from "../images/heart-logo-white.png"

function LogoH1({logo}) {
    return (
        <h1 style={{
            fontFamily: 'Damion', 
            fontSize: '90px', 
            textShadow: `2px 4px 8px rgba(0,0,0,0.8)`,
            color: 'white'
        }}>
        .connect({
            <span>
                <img src={logo} 
                    style={{
                        width: '75px', 
                        position: 'relative',
                        top:'-21px',
                        left: '8px'}} 
                />
            </span>})
        </h1>
    )
}

export default LogoH1;
