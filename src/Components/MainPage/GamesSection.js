import React , {Component} from 'react';

import Games from '../TeamPage/Games';
import {Grid} from 'semantic-ui-react';

export default class GamesSection extends Component{

    render() {
        const footballGames = [
            {
                host: 'Liverpool',
                guest: 'Chelsea',
                hostScore: 2,
                guestScore: 3,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Arsenal',
                guest: 'Manchester',
                hostScore: 4,
                guestScore: 1,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'RealMadrid',
                guest: 'AtleticoMadrid',
                hostScore: 2,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 3,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 3,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 1,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'unknown',
            },
        ];
        const basketballGames = [
            {
                host: 'Liverpool',
                guest: 'Chelsea',
                hostScore: 2,
                guestScore: 3,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Arsenal',
                guest: 'Manchester',
                hostScore: 4,
                guestScore: 1,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'RealMadrid',
                guest: 'AtleticoMadrid',
                hostScore: 2,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 3,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 3,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 1,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'unknown',
            },
        ];
        return (
            <div>
                <div className='ball-image parallax'>
                    <div className='parallax-caption'>Soccer Games</div>
                </div>

                <h1 className='playerPage-section-title'> All Games for Today</h1>
                <Grid columns='3'>
                    <Grid.Row>
                        <Grid.Column>
                            Ended Matches
                            <Games games={footballGames}/>
                        </Grid.Column>
                        <Grid.Column>
                            Live Matches
                            <Games games={basketballGames}/>
                        </Grid.Column>
                        <Grid.Column>
                            Coming Matches
                            <Games games={basketballGames}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <h1 className='playerPage-section-title'> Favorite Games</h1>
                <Grid columns='3'>
                    <Grid.Row>
                        <Grid.Column>
                            Ended Matches
                            <Games games={footballGames}/>
                        </Grid.Column>
                        <Grid.Column>
                            Live Matches
                            <Games games={basketballGames}/>
                        </Grid.Column>
                        <Grid.Column>
                            Coming Matches
                            <Games games={basketballGames}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <hr/>

                <div className='basketball-image parallax'>
                    <div className='parallax-caption'>Basketball Games</div>
                </div>
                <h1 className='playerPage-section-title'>  All Games for Today</h1>
                <Grid columns='3'>
                    <Grid.Row>
                        <Grid.Column>
                            Ended Matches
                            <Games games={footballGames}/>
                        </Grid.Column>
                        <Grid.Column>
                            Live Matches
                            <Games games={basketballGames}/>
                        </Grid.Column>
                        <Grid.Column>
                            Coming Matches
                            <Games games={basketballGames}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <h1 className='playerPage-section-title'>  Favorite Games</h1>
                <Grid columns='3'>
                    <Grid.Row>
                        <Grid.Column>
                            Ended Matches
                            <Games games={footballGames}/>
                        </Grid.Column>
                        <Grid.Column>
                            Live Matches
                            <Games games={basketballGames}/>
                        </Grid.Column>
                        <Grid.Column>
                            Coming Matches
                            <Games games={basketballGames}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <hr/>

            </div>
        );
    }
}