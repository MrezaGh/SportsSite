import React , {Component} from 'react';

import Player from './Player';
import {Grid} from 'semantic-ui-react';

export default class TeamMembers extends Component{
    render(){
        return(
            <div>
                faculty
                <Grid  columns='6'>
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