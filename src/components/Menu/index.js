import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (<nav className="Menu"> 
        <a href="/"><img className="Logo" src={Logo} alt="Leoflix - Logo"></img>
        </a>
        <Button href="/" className="ButtonLink">Novo Video</Button>
    </nav>
    );
}


export default Menu;