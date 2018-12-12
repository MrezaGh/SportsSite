import React , {Component} from 'react';

import {Item, Image, Container, Button, Icon, Label} from 'semantic-ui-react';

export default class TeamIntro extends Component{
    render(){
        const info = this.props.info;
        const infor = {
            header:this.props.info.name,
            image:this.props.info.image,
            meta:this.props.info.dateCreated,
            extra:this.props.info.location,
            description:this.props.info.description,
        };
        const subscribeButton = () => (
            <Button as='div' labelPosition='right'>
                <Button color='red'>
                    <Icon name='heart' />
                    Subscribe
                </Button>
                <Label as='a' basic color='red' pointing='left'>
                    2,048
                </Label>
            </Button>
        );
        return(
            <Container >
                <Item.Group >
                    <Item>
                    <Item.Image size='big' src={info.image}/>
                    <Item.Content>
                    <Item.Header> {info.name} </Item.Header>
                    <Item.Meta> {info.dateCreated} </Item.Meta>
                    <Item.Description> {info.description} </Item.Description>
                    <Item.Extra> {info.location} </Item.Extra>
                        <Item.Extra> {subscribeButton()} </Item.Extra>
                    </Item.Content>
                    </Item>
                </Item.Group>
            </Container>
        );
    }
}