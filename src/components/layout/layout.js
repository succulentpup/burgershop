import React from 'react';
import Hoc from '../../hoc/hoc';
import classes from './layout.module.css';

const layout = (props) => (
    <Hoc>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Hoc>
);
export default layout;
