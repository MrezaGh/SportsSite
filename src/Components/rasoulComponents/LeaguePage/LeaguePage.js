import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import Navbar from "../../Navbar";
import TheLeaguePage from'./TheLeaguePage';

export default class LeaguePage extends Component {

    teamsdata=[{
        name:"پرسپولیس ۹",
        games:5,
        points:4,
        win:2,
        equal:4,
        lose:7,
        achivedgoal:10,
        goalhad:20,
        defrenceofgoals:20
    },{
        name:"پرسپولیس ۲",
        games:5,

        points:5,
        win:2,
        equal:4,
        lose:7,
        achivedgoal:10,
        goalhad:20,
        defrenceofgoals:20
    },{
        name:"پرسپولیس ۳",
        games:5,

        points:"3",
        win:2,
        equal:4,
        lose:7,
        achivedgoal:10,
        goalhad:20,
        defrenceofgoals:20
    },{
        name:"پرسپولیس ۴",
        games:5,

        points:18,
        win:2,
        equal:4,
        lose:7,
        achivedgoal:10,
        goalhad:20,
        defrenceofgoals:20
    },{
        name:"پرسپولیس ۵",
        games:5,

        points:14,
        win:2,
        equal:4,
        lose:7,
        achivedgoal:10,
        goalhad:20,
        defrenceofgoals:20
    },{
        name:"پرسپولیس ۶",
        games:5,
        points:2,
        win:2,
        equal:4,
        lose:7,
        achivedgoal:10,
        goalhad:20,
        defrenceofgoals:20
    }
    ];


    render() {
        return (<div>

                <Navbar/>
                <TheLeaguePage teamData={this.teamsdata}/>
                <div><h1>{document.getElementById("hello")}</h1></div>
            </div>

        );


    }

}