import React, { Component } from 'react';
import propTypes from 'prop-types';
import './NewsSection.css';
import News from './News';


class NewsSection extends Component{
    static propTypes={
        latestNews: propTypes.arrayOf(propTypes.object).isRequired,
        favoriteNews: propTypes.arrayOf(propTypes.object)
    };
  render(){
      const latestNews = this.props.latestNews.map((news, index) => (
          <News key={index}
                {...news}
          />
      ));
      const favoriteNews = this.props.favoriteNews.map((news, index) => (
          <News key={index}
                title={news.title}
                img={news.img}
                date={news.date}
                body={news.body}
          />
      ));
      return(
        <div className='news-box'>
            {/*inja bayad sattelite beshe*/}
            <h1 className='playerPage-section-title'>
                Latest News
            </h1>
            <div className='news-grid-system'>
                {latestNews}
            </div>
            {/*if he is logged in visible else hidden*/}
            <h1 className='playerPage-section-title'>
                Favorite News
            </h1>
            <div className='news-grid-system'>
                {favoriteNews}
            </div>

        </div>
      );
  }
}



export default NewsSection