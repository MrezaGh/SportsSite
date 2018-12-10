import React, {Component} from 'react';
import Navbar from '../Navbar';
import MyTimeline from './MyTimeline';
import TeamArrangementright from './TeamArrangementright';
import TeamArrangementleft from './TeamArrangementleft';

import './Teamarrangement.css'
import GameData from "./GameData";


class GamePage extends Component {
    gameData = {
        goal: [2, 0],
        khata: [13, 4],
        korner: [5, 8],
        pasGoal: [25, 30],
        darsadMalekiat: [40, 60],
    };
    teamMemberData = [{
        name: "علی۱",
        timein: 0,
        timeout: 90,
        goaltime: 0,
        redtime: 0,
        yellowtime: [],
    }, {
        name: "علی۲",
        timein: 10,
        timeout: 80,
        goaltime: 0,
        redtime: 0,
        yellowtime: [12, 10],
    }, {
        name: "علی۳",
        timein: 0,
        timeout: 90,
        goaltime: 10,
        redtime: 0,
        yellowtime: [12, 10],
    }, {
        name: "علی۴",
        timein: 0,
        timeout: 90,
        goaltime: 0,
        redtime: 10,
        yellowtime: [12, 10],
    }];
    teamname = [" پیکان", "سپاهان"];
    teamgoal = [2, 0];
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
        }];


    render() {
        return (
            <div>
                <Navbar/>
                <h1>{this.teamname[0]} &nbsp; &nbsp;{this.teamgoal[0]} &nbsp; &nbsp; &nbsp;&nbsp;{this.teamgoal[1]} &nbsp; &nbsp;{this.teamname[1]}</h1>
                <MyTimeline teamData={this.teamData}/>
                <table className=" ui striped table">
                    <GameData gameData={this.gameData}/>
                </table>
                <table className="myWidth  myRight ui striped table">
                    <thead>
                    <tr>
                        <th>اصلی</th>
                        <th></th>
                    </tr>
                    </thead>
                    <TeamArrangementright teamMemberData={this.teamMemberData}/>

                    <thead>
                    <tr>
                        <th>ذخیره</th>
                        <th></th>
                    </tr>
                    </thead>
                    <TeamArrangementright teamMemberData={this.teamMemberData}/>
                </table>
                <table className="myWidth myLeft ui striped table">
                    <thead>
                    <tr>
                        <th>اصلی</th>
                        <th></th>
                    </tr>
                    </thead>
                    <TeamArrangementleft teamMemberData={this.teamMemberData}/>

                    <thead>
                    <tr>
                        <th>اصلی</th>
                        <th></th>
                    </tr>
                    </thead>
                    <TeamArrangementleft teamMemberData={this.teamMemberData}/>
                </table>


            </div>
        );
    }
}

export default GamePage;