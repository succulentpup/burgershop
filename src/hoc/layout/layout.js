import React, {Component} from 'react';
import Hoc from '../HocAux/hoc';
import classes from './layout.module.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    };
    closeSideDrawerHandler = () => this.setState({showSideDrawer: false});
    sideDrawerToggle = () =>
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });

    render() {
        return (
            <Hoc>
                <Toolbar sideDrawerToggle={this.sideDrawerToggle}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Hoc>
        );
    }
}

export default Layout;
