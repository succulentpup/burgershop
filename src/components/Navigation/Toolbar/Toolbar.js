import React from 'react';
import classes from './Toolbar.module.css';
import Logo from "../../Logos/LogoBurger";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle";

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <SideDrawerToggle clicked={props.sideDrawerToggle}>MENU</SideDrawerToggle>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;
