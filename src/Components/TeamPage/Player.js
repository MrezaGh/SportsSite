import React , {Component} from 'react';

import {Card, Image} from 'semantic-ui-react';
import './Player.css';

export default class Player extends Component{
    render(){
        return(
                <div className='flip-card'>
                    <Card className='player-front'>
                        <Image src='/taylorSwift.jpg'/>
                        <Card.Header>
                            Taylor Swift
                        </Card.Header>
                    </Card>
                    <Card className='player-back'>
                        <Card.Header>
                            Taylor Swift
                        </Card.Header>
                        <Card.Meta>
                            Player <i className="icon player-icon" />
                        </Card.Meta>
                        <Card.Content >Post: Attacker</Card.Content>
                        <Card.Content >Age: 21</Card.Content>
                        <Card.Content extra>
                            <a href="#">Player Page</a>
                        </Card.Content>
                    </Card>
                </div>
        );
    }
}