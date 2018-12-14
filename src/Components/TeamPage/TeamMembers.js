import React , {Component} from 'react';

import Player from './Player';
import {Grid} from 'semantic-ui-react';

export default class TeamMembers extends Component{
    render(){
        return(
            <div>
                <h1 className='playerPage-section-title'>Team Members</h1>
                <Grid  columns='5'>
                    <Grid.Row >

                        <Grid.Column><Player/></Grid.Column>
                        <Grid.Column><Player/></Grid.Column>
                        <Grid.Column><Player/></Grid.Column>
                        <Grid.Column><Player/></Grid.Column>
                        <Grid.Column><Player/></Grid.Column>
                        <Grid.Column><Player/></Grid.Column>
                        <Grid.Column><Player/></Grid.Column>
                        <Grid.Column><Player/></Grid.Column>
                        <Grid.Column><Player/></Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>

        );
    }
}