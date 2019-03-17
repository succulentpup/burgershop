import React from 'react';
import Logo from "../../Logos/LogoBurger";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css';
import Hoc from "../../../hoc/HocAux/hoc";
import Backdrop from "../../UI/Backdrop/Backdrop";


const SideDrawer = (props) =>
{
    const attachedClasses = props.open ?
        [classes.SideDrawer,classes.Open] :
        [classes.SideDrawer, classes.Close];
    return (
        <Hoc>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <NavigationItems/>
            </div>
        </Hoc>
    );
};


export default SideDrawer;
