import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import './Navbar.css'


const colors = ["red", "violet", "blue", "purple", "olive", "orange"];
export default class Navbar extends Component{

    state = {};
    handleItemClick= (e, {name}) =>{
        this.setState({activeItem: name})
    };

    render(){
        const {activeItem} = this.state;
        return(
            <Menu inverted >
                <Menu.Item href='#' name='Home' active={activeItem==="Home"} color={colors[0]} onClick={this.handleItemClick}>
                    Home
                </Menu.Item>
                <Menu.Item href='#' name='Team' active={activeItem==="Team"} color={colors[1]} onClick={this.handleItemClick} >
                    Team
                </Menu.Item>
                <Menu.Item href='#' name='Player' active={activeItem==="Player"} color={colors[2]} onClick={this.handleItemClick}>
                    Player
                </Menu.Item>
                <Menu.Item href='#' name='League' active={activeItem==="League"} color={colors[3]} onClick={this.handleItemClick}>
                    League
                </Menu.Item>
                <Menu.Item href='#' name='News' active={activeItem==="News"} color={colors[4]} onClick={this.handleItemClick}>
                    News
                </Menu.Item>
                <Menu.Item href='#' name='Match' active={activeItem==="Match"} color={colors[5]} onClick={this.handleItemClick}>
                    Match
                </Menu.Item>
                <Menu inverted className='right'>
                    <div className='item' style={{color: "grey"}}>
                        Logged In As: Mreza
                    </div>
                    <Menu.Item href='#' name='log in' active={activeItem==="log in"} onClick={this.handleItemClick}>
                        log in
                    </Menu.Item>
                    <Menu.Item href='#' name='sign up' active={activeItem==="sign up"} onClick={this.handleItemClick}>
                        sign up
                    </Menu.Item>

                </Menu>
            </Menu>

        );
    }
}