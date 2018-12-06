import React , {Component} from 'react';
import Navbar from './Navbar'
import NewsSection from './NewsSection';


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

    render(){
        return(
            <div>
                <Navbar />
                <NewsSection latestNews={this.latestNews} favoriteNews={this.favoriteNews}/>
            </div>
        );
    }

}
export default MainPage;