import React , {Component} from 'react';
import './Match.css'

export default class Match extends Component{
    render(){
        const {firstTeam, firstTeamScore, secondTeam, secondTeamScore} = this.props;
        const firstTeamIcon = 'icon ' + firstTeam;
        const secondTeamIcon = 'icon ' + secondTeam;
        return(
            <div className='match-info'>
                <span>
                    <i className={firstTeamIcon}/>
                    {firstTeam}
                </span>
                <span> VS </span>
                <span>
                    <i className={secondTeamIcon}/>
                    {secondTeam}
                </span>
            </div>
        );
    }

}