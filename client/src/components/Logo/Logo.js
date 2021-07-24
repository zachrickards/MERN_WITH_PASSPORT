import React from 'react';
import logo from "../../images/heart-logo-white.png";
import "./logo.css";

function LogoH1({logo}) {
    return (
        <h1 id="logo-font"
            style={{
            fontFamily: 'Damion',
            textShadow: `2px 4px 8px rgba(0,0,0,1)`,
            color: 'white'
        }}>
        .connect({
            <span>
                <img id="logo-heart"
                    src={logo} 
                    style={{
                        position: 'relative'}} 
                />
            </span>})
        </h1>
    )
}

export default LogoH1;
