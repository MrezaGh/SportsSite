import React , {Component} from 'react';

import {Grid} from 'semantic-ui-react';
import Games from "./Games";

export default class GamesSection extends Component {
    render(){
        return(
            <Grid columns='1'>
                <Grid.Row>
                    <Grid.Column>
                        Games History
                        <Games/>
                    </Grid.Column>
                    <Grid.Column>
                        Future Game
                        <Games/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}