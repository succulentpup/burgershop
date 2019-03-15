import React from 'react';
import classes from './Logo.module.css';
import logoImg from '../Assets/Burgerlogo.png';

const Logo = props => (
    <div className={classes.Logo}>
        <img src={logoImg} alt="myBurger" />
    </div>
);

export default Logo;