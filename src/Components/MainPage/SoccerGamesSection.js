import React , {Component} from 'react';
import Match from './Match';
import './SoccerGamesSection.css';

class SoccerGamesSection extends Component{

    render(){
        const endedMatches = this.props.endedMatches.map((match, index) => (
            <Match key={index}
                   {...match}
            />
        ));
        const liveMatches = this.props.liveMatches.map((match, index) => (
            <Match key={index}
                   {...match}
            />
        ));
        const comingMatches = this.props.comingMatches.map((match, index) => (
            <Match key={index}
                   {...match}
            />
        ));
        const {todayMatches, tomorrowMatches, yesterdayMatches} = this.props.favoriteMatches;
        const favoriteTodayMatches =  todayMatches.map((match, index) => (
            <Match key={index}
                   {...match}
            />
        ));
        const favoriteYesterdayMatches = yesterdayMatches.map((match, index) => (
            <Match key={index}
                   {...match}
            />
        ));
        const favoriteTomorrowMatches = tomorrowMatches.map((match, index) => (
            <Match key={index}
                   {...match}
            />
        ));
        return(
            <div>
                <div className='all-matches'>
                    All matches
                    <div className='ended-matches'>
                        Ended Matches
                        {endedMatches}
                    </div>
                    <div className='live-matches'>
                        Live Matches
                        {liveMatches}
                    </div>
                    <div className='coming-matches'>
                        Coming Matches
                        {comingMatches}
                    </div>
                </div>
                <div className='favorite-matches'>
                    Favorite matches
                    <div className='yesterday-matches'>
                        Yesterday Matches
                        {favoriteYesterdayMatches}
                    </div>
                    <div className='today-matches'>
                        Today Matches
                        {favoriteTodayMatches}
                    </div>
                    <div className='tomorrow-matches'>
                        Tomorrow matches
                        {favoriteTomorrowMatches}
                    </div>
                </div>
            </div>
        );
    }
}
export default SoccerGamesSection;