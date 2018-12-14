import React , {Component} from 'react';

import {Grid, Segment, Icon} from 'semantic-ui-react';
import './GamesSection.css';

import Games from "./Games";

export default class GamesSection extends Component {
    render(){
        const filter = () => (
            <Segment.Group horizontal className='filter'>
                <Segment><Icon name="check" color='green'/> win</Segment>
                <Segment><Icon name="hashtag" color='blue'/>point</Segment>
                <Segment><Icon name="history" color='brown'/>date</Segment>
            </Segment.Group>
        );
        return(
            <Grid columns='1'>
                <Grid.Row>
                    <Grid.Column>
                        <h1 className='playerPage-section-title'>Games History</h1>
                        Filter By:
                        {filter()}
                        <Games games={this.props.previousGames}/>
                    </Grid.Column>
                    <Grid.Column>
                        <h1 className='playerPage-section-title'>Future Games</h1>
                        Filter By:
                        {filter()}
                        <Games games={this.props.futureGames}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}