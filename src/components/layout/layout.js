import React from 'react';
import Hoc from '../../hoc/hoc';
import classes from './layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
    <Hoc>
        <Toolbar/>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Hoc>
);
export default layout;
