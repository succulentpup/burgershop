import React from 'react';
import classes from './Toolbar.module.css';
import Logo from "../../Logos/LogoBurger";

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            ...
        </nav>
    </header>
);

export default Toolbar;