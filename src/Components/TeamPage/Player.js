import React , {Component} from 'react';

import {Card, Image} from 'semantic-ui-react';
import './Player.css';

export default class Player extends Component{
    render(){
        const member = this.props.member;

        const frontCard= () => (
            <Card className='player-front'>
                <Image src={member.image}/>
                <Card.Header>
                    {member.name}
                </Card.Header>
            </Card>
        );
        const backCard = () => {
            if (member.role === 'Player')
                return(
                    <Card className='player-back'>
                        <Card.Header>
                            {member.name}
                        </Card.Header>
                        <Card.Meta>
                            Player <i className="icon player-icon" />
                        </Card.Meta>
                        <Card.Content >Post: {member.post}</Card.Content>
                        <Card.Content >Age: {member.age} </Card.Content>
                        <Card.Content extra>
                            <a href="#">Player Page</a>
                        </Card.Content>
                    </Card>
                )
            else
                return(
                    <Card className='player-back'>
                        <Card.Header>
                            {member.name}
                        </Card.Header>
                        <Card.Meta>
                            {member.role} <i className={"icon " + member.role } />
                        </Card.Meta>
                        {/*<Card.Content >Post: {member.post}</Card.Content>*/}
                        {/*<Card.Content >Age: {member.age} </Card.Content>*/}
                        {/*<Card.Content extra>*/}
                            {/*<a href="#">Player Page</a>*/}
                        {/*</Card.Content>*/}
                    </Card>
                )
        }
        return(
                <div className='flip-card'>
                    {frontCard()}
                    {backCard()}
                </div>
        );
    }
}