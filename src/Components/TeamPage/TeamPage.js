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
        const previousGames = [
            {
                host: 'Liverpool',
                guest: 'Chelsea',
                hostScore: 2,
                guestScore: 3,
                date: new Date().toDateString(),
                status: 'loose',
            },
            {
                host: 'Arsenal',
                guest: 'Manchester',
                hostScore: 4,
                guestScore: 1,
                date: new Date().toDateString(),
                status: 'win',
            },
            {
                host: 'RealMadrid',
                guest: 'AtleticoMadrid',
                hostScore: 2,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'draw',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 3,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'win',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 3,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'win',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: 1,
                guestScore: 2,
                date: new Date().toDateString(),
                status: 'loose',
            },
        ];
        const futureGames = [
            {
                host: 'Liverpool',
                guest: 'Chelsea',
                hostScore: '-',
                guestScore: '-',
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Arsenal',
                guest: 'Manchester',
                hostScore: '-',
                guestScore: '-',
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'RealMadrid',
                guest: 'AtleticoMadrid',
                hostScore: '-',
                guestScore: '-',
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: '-',
                guestScore: '-',
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: '-',
                guestScore: '-',
                date: new Date().toDateString(),
                status: 'unknown',
            },
            {
                host: 'Milan',
                guest: 'Roma',
                hostScore: '-',
                guestScore: '-',
                date: new Date().toDateString(),
                status: 'unknown',
            },

        ];
        const teamMembers = [
            {
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },
            {
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },
            {
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },
            {
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },
            {
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },
            {
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },
            {
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },{
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },{
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },{
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },
            {
                name: "Taylor Swift",
                image: '/taylorSwift.jpg',
                role: 'Player',
                post: 'Attacker',
                age: '25',
            },
            {
                name: 'Johnny',
                image: "https://image.freepik.com/free-vector/doctor-background-design_1270-62.jpg",
                role: 'Doctor',
            },
            {
                name: 'Hasan Khafan',
                image: "https://cdn4.vectorstock.com/i/1000x1000/20/68/cartoon-bodybuilder-vector-5592068.jpg",
                role: 'BodyBuilder',
            },
            {
                name: 'oos mamad',
                image: "https://previews.123rf.com/images/scotttalent/scotttalent1311/scotttalent131100338/24070260-coach.jpg",
                role: 'Coach',
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

                            <TeamMembers members={teamMembers}/>

                        </Grid.Column>
                        <Grid.Column computer={5}>

                            <GamesSection previousGames={previousGames} futureGames={futureGames}/>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider/>

                <NewsSection news={news}/>
            </div>
        );
    }

}