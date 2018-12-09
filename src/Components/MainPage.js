import React, {Component} from 'react';
import Navbar from './Navbar'
import NewsSection from './NewsSection';
import GamesSection from './GamesSection';

class MainPage extends Component {
    latestNews = [{
        img: 'https://template63454.motopreview.com/mt-demo/63400/63454/mt-content/uploads/2017/05/mt-0966-home-img04.jpg',
        date: 'November 28, 2018',
        title: 'The Stadium Overheat!',
        body: 'so we are getting close to whatever bullshit tournament it is, IDC.anyway you can click and read the sexy news'
    },
        {
            img: 'https://template63454.motopreview.com/mt-demo/63400/63454/mt-content/uploads/2017/05/mt-0966-home-img04.jpg',
            date: 'November 28, 2018',
            title: 'The Stadium Overheat!',
            body: 'so we are getting close to whatever bullshit tournament it is, IDC.anyway you can click and read the sexy news'
        },
        {
            img: 'https://template63454.motopreview.com/mt-demo/63400/63454/mt-content/uploads/2017/05/mt-0966-home-img04.jpg',
            date: 'November 28, 2018',
            title: 'The Stadium Overheat!',
            body: 'so we are getting close to whatever bullshit tournament it is, IDC.anyway you can click and read the sexy news'
        },
        {
            img: 'https://template63454.motopreview.com/mt-demo/63400/63454/mt-content/uploads/2017/05/mt-0966-home-img04.jpg',
            date: 'November 28, 2018',
            title: 'The Stadium Overheat!',
            body: 'so we are getting close to whatever bullshit tournament it is, IDC.anyway you can click and read the sexy news'
        },
    ];
    favoriteNews = [
        {
            img: 'https://images.unsplash.com/photo-1543527139-85169e499e3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ca653108bc5f0a018d745f4e2547eeb&auto=format&fit=crop&w=500&q=60',
            date: 'November 30, 2018',
            title: 'The Stadium is Gone!!',
            body: "yeah that's strange someone stole the stadium and all that is left is a desert with nothing"
        },
        {
            img: 'https://images.unsplash.com/photo-1543527139-85169e499e3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ca653108bc5f0a018d745f4e2547eeb&auto=format&fit=crop&w=500&q=60',
            date: 'November 30, 2018',
            title: 'The Stadium is Gone!!',
            body: "yeah that's strange someone stole the stadium and all that is left is a desert with nothing"
        },
        {
            img: 'https://images.unsplash.com/photo-1543527139-85169e499e3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ca653108bc5f0a018d745f4e2547eeb&auto=format&fit=crop&w=500&q=60',
            date: 'November 30, 2018',
            title: 'The Stadium is Gone!!',
            body: "yeah that's strange someone stole the stadium and all that is left is a desert with nothing"
        },
        {
            img: 'https://images.unsplash.com/photo-1543527139-85169e499e3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ca653108bc5f0a018d745f4e2547eeb&auto=format&fit=crop&w=500&q=60',
            date: 'November 30, 2018',
            title: 'The Stadium is Gone!!',
            body: "yeah that's strange someone stole the stadium and all that is left is a desert with nothing"
        },
    ];
    matches = {
        endedMatches: [
            {
                firstTeam: "Arsenal",
                firstTeamScore: 2,
                secondTeam: "Chelsea",
                secondTeamScore: 1,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "Manchester",
                firstTeamScore: 4,
                secondTeam: "Liverpool",
                secondTeamScore: 2,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "Arsenal",
                firstTeamScore: 0,
                secondTeam: "Liverpool",
                secondTeamScore: 0,
                date: 'December 6, 2018',
            }
        ],
        liveMatches: [
            {
                firstTeam: "Arsenal",
                firstTeamScore: 2,
                secondTeam: "Chelsea",
                secondTeamScore: 1,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "Manchester",
                firstTeamScore: 4,
                secondTeam: "Liverpool",
                secondTeamScore: 2,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "RealMadrid",
                firstTeamScore: 0,
                secondTeam: "Arsenal",
                secondTeamScore: 0,
                date: 'December 6, 2018',
            }
        ],
        comingMatches: [
            {
                firstTeam: "AtleticoMadrid",
                firstTeamScore: 2,
                secondTeam: "Milan",
                secondTeamScore: 1,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "Roma",
                firstTeamScore: 4,
                secondTeam: "Atalanta",
                secondTeamScore: 2,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "RealMadrid",
                firstTeamScore: 0,
                secondTeam: "Milan",
                secondTeamScore: 0,
                date: 'December 6, 2018',
            }
        ],
    };

    favoriteMatches = {
        yesterdayMatches: [
            {
                firstTeam: "AtleticoMadrid",
                firstTeamScore: 2,
                secondTeam: "Milan",
                secondTeamScore: 1,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "Roma",
                firstTeamScore: 4,
                secondTeam: "Atalanta",
                secondTeamScore: 2,
                date: 'December 6, 2018',
            },
        ],
        todayMatches: [
            {
                firstTeam: "Manchester",
                firstTeamScore: 4,
                secondTeam: "Liverpool",
                secondTeamScore: 2,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "RealMadrid",
                firstTeamScore: 0,
                secondTeam: "Arsenal",
                secondTeamScore: 0,
                date: 'December 6, 2018',
            }
        ],
        tomorrowMatches: [
            {
                firstTeam: "Arsenal",
                firstTeamScore: 2,
                secondTeam: "Chelsea",
                secondTeamScore: 1,
                date: 'December 6, 2018',
            },
            {
                firstTeam: "Manchester",
                firstTeamScore: 4,
                secondTeam: "Liverpool",
                secondTeamScore: 2,
                date: 'December 6, 2018',
            },
        ],
    };


    render() {
        return (
            <div>
                <Navbar/>
                <GamesSection matches={this.matches} favoriteMatches={this.favoriteMatches}/>
                <NewsSection latestNews={this.latestNews} favoriteNews={this.favoriteNews}/>
            </div>
        );
    }

}

export default MainPage;