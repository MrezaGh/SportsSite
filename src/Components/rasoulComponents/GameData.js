import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import './Teamarrangement.css';

export default class GameData extends Component {
    render() {
            return (

                <tbody>
                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.goal[0]}</td>
                    <td className="center aligned">گل</td>
                    <td >{this.props.gameData.goal[1]}</td>
                </tr>

                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.khata[0]}</td>
                    <td className="center aligned">خطا</td>
                    <td >{this.props.gameData.khata[1]}</td>
                </tr>

                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.korner[0]}</td>
                    <td className="center aligned">کرنر</td>
                    <td >{this.props.gameData.korner[1]}</td>
                </tr>

                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.darsadMalekiat[0]}</td>
                    <td className="center aligned">درصد مالکیت</td>
                    <td >{this.props.gameData.darsadMalekiat[1]}</td>
                </tr>

                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.pasGoal[0]}</td>
                    <td className="center aligned borderless">پاس گل</td>
                    <td >{this.props.gameData.pasGoal[1]}</td>
                </tr>
                </tbody>

        );
    }
}