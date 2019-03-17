import React, {Component} from 'react';
import Hoc from '../../hoc/hoc';
import classes from './layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true
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
                <div>Toolbar, Sidebar, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Hoc>
        );
    }
}

export default Layout;
