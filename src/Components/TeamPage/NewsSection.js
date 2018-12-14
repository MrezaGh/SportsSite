import React , {Component} from 'react';

import {Grid} from 'semantic-ui-react';
import News from '../MainPage/News';

export default class NewsSection extends Component {
    // constructor(props){
    //     super(props);
    //     // console.log(this.props.news);
    // }
    render(){
        const news = this.props.news.map((news, index) => (
            <Grid.Column key={index} computer={4} tablet={8} mobile={16}>
                <News
                    {...news}
                />
            </Grid.Column>

        ));

        return(
            <Grid container>
                <h1 className='playerPage-section-title'>Related News</h1>
                <Grid.Row >
                {news}
                </Grid.Row>
            </Grid>
        );
    }

}