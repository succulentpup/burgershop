import React from 'react';
import Logo from "../../Logos/LogoBurger";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css';
import Hoc from "../../../hoc/hoc";
import Backdrop from "../../UI/Backdrop/Backdrop";


const SideDrawer = () =>
    (
        <Hoc>
            <Backdrop show/>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <NavigationItems/>
            </div>
        </Hoc>
    );


export default SideDrawer;
