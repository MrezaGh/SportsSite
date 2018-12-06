import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import propTypes from 'prop-types';
import './News.css'
export default class recipe extends Component{
    static defaultProps ={
        title: 'totally empty',
        date: new Date().toDateString(),
        img: "https://images.unsplash.com/photo-1520004434532-668416a08753?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=371b60ea7853c87baf5217d34b2eab9f&auto=format&fit=crop&w=500&q=60",
        body: 'this news is fake, yeah it\'s empty'
    };
    static propTypes ={
        title: propTypes.string.isRequired,
        img: propTypes.string.isRequired,
        body: propTypes.string.isRequired
    };


    go(title, e){
        // e.preventDefault();
        // for redirecting on click
        window.history.pushState('obj', title, '/news/' + title);
        window.location.href = window.location;
        return false;
    }


    render(){
        const {title, date, body, img} = this.props;
        return(
            <div onClick={this.go.bind(null, title)}>
            <Card >
                <Image src={img}
                       alt={title} />
                <Card.Content >
                    <Card.Header>
                        {title}
                    </Card.Header>
                    <Card.Meta>
                        {date}
                    </Card.Meta>
                    <Card.Description>
                        {body}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    written by <Icon name="user"/>mamad
                </Card.Content>
            </Card>
            </div>
        );
    }
}