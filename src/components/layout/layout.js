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

    render() {
        return (
            <Hoc>
                <Toolbar/>
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
