import React , {Component} from 'react';

import {Grid, Divider} from 'semantic-ui-react';
import './BasketballPlayerPage.css';

import Navbar from '../../Navbar';
import PlayerInfo from '../PlayerInfo';
import Biography from '../Biography';
import BasketballPlayerStatistics from './BasketballPlayerStatistics';
import NewsSection from '../../TeamPage/NewsSection';

export default class BasketballPlayerPage extends Component{
    render(){
        const playerInfo = {
            image: "https://cdn.vox-cdn.com/thumbor/PYFJz6ZbbHy0I8y3dcz8msDWm_8=/440x552:1811x3072/1200x800/filters:focal(1045x718:1371x1044)/cdn.vox-cdn.com/uploads/chorus_image/image/55248187/245168.0.jpg",
            name: "Michael Jordan",
            age: 55,
            height: "1.98m",
            weight: "85kg",
            team: "Chicago Bulls",
            nationality: "American",
            post: "Shooting Guard",
        };
        const playerStats = {
            name: 'Michael Jordan',
            twoPoints: 43,
            threePoints: 15,
            reyband: 6,
            playeTime: 2,
            faults: 7,
        };
        const biography = {
            p1: "Cristiano Ronaldo (European Portuguese:  born 5 February 1985) " +
                "is a Portuguese professional footballer who plays as a forward for Italian club Juventus and the Portugal national team. " +
                "Often considered the best player in the world and regarded by many as one of the greatest players of all time, " +
                "Ronaldo has a record-tying five Ballon d'Or awards,the most for a European player, and is the first player to win four European Golden Shoes. " +
                "He has won 26 trophies in his career, including five league titles, five UEFA Champions League titles and one UEFA European Championship. " +
                "A prolific goalscorer, Ronaldo holds the records for most official goals scored in Europe's top-five leagues (405), " +
                "the UEFA Champions League (121), the UEFA European Championship (9), as well as those for most assists in the UEFA Champions League (34) " +
                "and the UEFA European Championship (6). He has scored over 680 senior career goals for club and country.",
            p2: "Born and raised on the Portuguese island of Madeira, Ronaldo was diagnosed with a racing heart at age 15. " +
                "He underwent an operation to treat his condition, and began his senior club career playing for Sporting CP, before signing with Manchester United " +
                "at age 18 in 2003. After winning his first trophy, the FA Cup, during his first season in England, " +
                "he helped United win three successive Premier League titles, a UEFA Champions League title, and a FIFA Club World Cup. " +
                "By age 22, he had received Ballon d'Or and FIFA World Player of the Year nominations and at age 23, he won his first Ballon d'Or " +
                "and FIFA World Player of the Year awards. In 2009, Ronaldo was the subject of the most expensive association football transfer when he moved " +
                "from Manchester United to Real Madrid in a transfer worth €94 million (£80 million).",

        };
        const news = [
            {
                title: 'Michael Jordan richest athlete ever!',
                img: 'https://fadeawayworld.net/wp-content/uploads/2018/05/maxresdefault-2.jpg?x92973',
                body: 'his net worth is about 2billion dollars and he becomes the richest athlete ever',
                date: new Date().toDateString(),
            },
            {
                title: 'Michael Jordan richest athlete ever!',
                img: 'https://fadeawayworld.net/wp-content/uploads/2018/05/maxresdefault-2.jpg?x92973',
                body: 'his net worth is about 2billion dollars and he becomes the richest athlete ever',
                date: new Date().toDateString(),
            },{
                title: 'Michael Jordan richest athlete ever!',
                img: 'https://fadeawayworld.net/wp-content/uploads/2018/05/maxresdefault-2.jpg?x92973',
                body: 'his net worth is about 2billion dollars and he becomes the richest athlete ever',
                date: new Date().toDateString(),
            },{
                title: 'Michael Jordan richest athlete ever!',
                img: 'https://fadeawayworld.net/wp-content/uploads/2018/05/maxresdefault-2.jpg?x92973',
                body: 'his net worth is about 2billion dollars and he becomes the richest athlete ever',
                date: new Date().toDateString(),
            },


        ];
        return(
            <div>
                <Navbar/>
                <PlayerInfo info={playerInfo}/>

                <Divider/>
                <div className='basketball-image parallax'>
                    <div className='parallax-caption'>Biography & Stats</div>
                </div>
                <Divider/>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column computer={12}>

                            <Biography info={biography}/>

                        </Grid.Column>
                        <Grid.Column computer={4}>

                            <BasketballPlayerStatistics stats={playerStats}/>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider/>
                <div className='basketball-image parallax'>
                    <div className='parallax-caption'>News</div>
                </div>
                <Divider/>

                <NewsSection news={news}/>

            </div>
        );
    }
}