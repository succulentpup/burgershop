import React from 'react';
import Logo from "../../Logos/LogoBurger";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css';

const SideDrawer = (props) =>
    (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <NavigationItems/>
        </div>
    );


export default SideDrawer;