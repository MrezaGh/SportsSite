import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import Body from './Body'
import './NewsPage.css';
import Navbar from "../../Navbar";
import Comment from './Comment'

export default class NewsPage extends Component {

    render() {
        return (<div className="mytextalignright mydirection">

                <Navbar/>
                <Body />
                <Comment />
            </div>

        );


    }

}