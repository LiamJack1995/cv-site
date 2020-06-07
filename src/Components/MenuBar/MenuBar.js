import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuBarStyles from './MenuBar.css';
import ProfPic from '../../assets/images/Liam.JPG'
class MenuBar extends Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className='header' variant="dense">
                        <img className='ProfilePic' src={ProfPic}/>
                        <h2>Liam O'Sullivan</h2>
                    </Toolbar>
                </AppBar>
        </div>
        )
    }
}

export default MenuBar;
