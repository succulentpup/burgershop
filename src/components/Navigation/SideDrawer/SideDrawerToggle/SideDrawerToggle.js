import React from 'react';

const SideDrawerToggle = props => (
    <div onClick={props.clicked}> {props.children} </div>
);

export default SideDrawerToggle;
