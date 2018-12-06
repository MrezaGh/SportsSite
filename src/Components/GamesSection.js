import React , {Component} from 'react';
import Match from './Match';
import './GamesSection.css';

class GamesSection extends Component{

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
        return(
            <div>
                <div className='ended-matches'>
                    Ended Matches
                    {endedMatches}
                </div>
                <div className='live-matches'>
                    Live Matches
                    {liveMatches}
                </div>
            </div>
        );
    }
}
export default GamesSection;