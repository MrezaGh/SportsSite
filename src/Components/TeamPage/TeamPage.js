import React , {Component} from 'react';

import {Grid, Divider} from 'semantic-ui-react';
import Navbar from '../Navbar';
import TeamMembers from './TeamMembers';
import NewsSection from './NewsSection';
import TeamIntro from './TeamIntro';
import GamesSection from './GamesSection';

export default class TeamPage extends Component{
    render(){
        const teamInfo = {
            name: "Koskhola",
            image: 'https://images.unsplash.com/photo-1483428400520-675ef69a3bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
            dateCreated: '1998 - now',
            location: 'Asia Iran Tehran',
            description: 'this team has a boring history and blah blah; they hated each other and they still do. they are together just to win...',
        };
        const news = [
            {
                title: 'Taylor Swift Tour',
                img: 'https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                body: 'there she goes to tokyo, and will not be boring they say',
                date: new Date().toDateString(),
            },
            {
                title: 'Taylor Swift Tour',
                img: 'https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                body: 'there she goes to tokyo, and will not be boring they say',
                date: new Date().toDateString(),
            },
            {
                title: 'Taylor Swift Tour',
                img: 'https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                body: 'there she goes to tokyo, and will not be boring they say',
                date: new Date().toDateString(),
            },
            {
                title: 'Taylor Swift Tour',
                img: 'https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                body: 'there she goes to tokyo, and will not be boring they say',
                date: new Date().toDateString(),
            },
            {
                title: 'Taylor Swift Tour',
                img: 'https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                body: 'there she goes to tokyo, and will not be boring they say',
                date: new Date().toDateString(),
            },
            {
                title: 'Taylor Swift Tour',
                img: 'https://images.unsplash.com/photo-1449748040579-354c191a7934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                body: 'there she goes to tokyo, and will not be boring they say',
                date: new Date().toDateString(),
            },
        ];
        return(
            <div>
                <Navbar/>
                <TeamIntro info={teamInfo} />
                <Divider />
                <Grid columns='2'>
                    <Grid.Row >
                        <Grid.Column computer={11}>
                            <TeamMembers/>
                        </Grid.Column>
                        <Grid.Column computer={5}>
                            <GamesSection/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider/>
                <NewsSection news={news}/>
            </div>
        );
    }

}