import React from 'react';
import logo from '../assets/images/goog.png';
function Logo(props) {
    return (
        <div>
            <img width={props.width} style={{ margin: "15px"}} src={logo} alt="google img" />
        </div>
    );
}
export default Logo;