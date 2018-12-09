import React, {Component} from 'react';
import Navbar from '../Navbar';
import MyTimeline from './MyTimeline'
import TeamArrangement from './TeamArrangement'


class GamePage extends Component {
    teamMember=[""]
    teamname=[" پیکان","سپاهان"]
    teamgoal=[2,0]
    teamData = [{
        idOf: 0,
        happen: "goal",
        time: 20,
        name: "علی1"
    }, {
        happen: "goal",
        idOf: 0,
        time: 40,
        name: "علی2"
    }, {
        happen: "yellow",
        idOf: 0,
        time: 30,
        name: "علی3"
    }, {
        happen: "red",
        idOf: 0,
        time: 60,
        name: "علی4"
    }, {
        happen: "goal",
        idOf: 0,
        time: 80,
        name: "علی5"
    },

        {
            happen: "goal",
            idOf: 1,
            time: 20,
            name: "محمد1"
        }, {
            happen: "yellow",
            idOf: 1,
            time: 45,
            name: "محمد"
        }, {
            happen: "yellow",
            idOf: 1,
            time: 35,
            name: "محمد3"
        }, {
            happen: "red",
            time: 60,
            idOf: 1,
            name: "محمد4"
        }, {
            happen: "goal",
            idOf: 1,
            time: 85,
            name: "محمد5"
        }]


    render() {
        return (
            <div>
                <Navbar/>
                <h1>{this.teamname[0]} &nbsp; &nbsp;{this.teamgoal[0]} &nbsp; &nbsp; &nbsp;&nbsp;{this.teamgoal[1]} &nbsp; &nbsp;{this.teamname[1]}</h1>
                <MyTimeline teamData={this.teamData}/>
                {/*<TeamArrangement />*/}
            </div>
        );
    }
}

export default GamePage;