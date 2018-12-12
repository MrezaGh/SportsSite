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
                    <td className="right aligned">{this.props.gameData.partab3movafagh[0]}</td>
                    <td className="center aligned">پرتاب ۳ امتیازی موفق</td>
                    <td >{this.props.gameData.partab3movafagh[1]}</td>
                </tr>
                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.partab2movafagh[0]}</td>
                    <td className="center aligned">پرتاب دو امتیازی موفق</td>
                    <td >{this.props.gameData.partab2movafagh[1]}</td>
                </tr>
                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.rewind[0]}</td>
                    <td className="center aligned">ریواند</td>
                    <td >{this.props.gameData.rewind[1]}</td>
                </tr>
                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.penaltikhata[0]}</td>
                    <td className="center aligned">خطای پتالتی</td>
                    <td >{this.props.gameData.penaltikhata[1]}</td>
                </tr>

                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.khata[0]}</td>
                    <td className="center aligned">خطا</td>
                    <td >{this.props.gameData.khata[1]}</td>
                </tr>

                <tr className="top aligned">
                    <td className="right aligned">{this.props.gameData.out[0]}</td>
                    <td className="center aligned">اوت</td>
                    <td >{this.props.gameData.out[1]}</td>
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