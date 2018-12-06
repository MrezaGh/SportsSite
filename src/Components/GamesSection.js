import React , {Component} from 'react';
import SoccerGamesSection from './SoccerGamesSection';
import BasketballGamesSection from './BasketballGamesSection';

export default class GamesSection extends Component{

    render() {
        return (
            <div>
                Soccer Games
                <SoccerGamesSection endedMatches={this.props.matches.endedMatches}
                                    liveMatches={this.props.matches.liveMatches}
                                    comingMatches={this.props.matches.comingMatches}
                                    favoriteMatches={this.props.favoriteMatches}
                />
                Basketball Games
                <BasketballGamesSection endedMatches={this.props.matches.endedMatches}
                                        liveMatches={this.props.matches.liveMatches}
                                        comingMatches={this.props.matches.comingMatches}
                                        favoriteMatches={this.props.favoriteMatches}
                />
            </div>
        );
    }
}