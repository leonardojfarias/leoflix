import React from 'react';
//import './ButtonLink.css'

function ButtonLink(props) {
    // props{ className:,href:;}
    console.log(props);
    return (
        <a href={props.className} className={props.className}>
            {props.children}
        </a>
    );
}


export default ButtonLink;