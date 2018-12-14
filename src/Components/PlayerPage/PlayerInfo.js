import React , {Component} from 'react';

import {Container, Item, Table, Button, Icon, Label} from 'semantic-ui-react';
import './PlayerInfo.css';

export default class PlayerInfo extends Component{
    render(){
        const info = this.props.info;
        const followButton = () => (
            <Button className='follow-button' as='div' labelPosition='right'>
                <Button color='red'>
                    <Icon name='heart' />
                    Like
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
                            <Table celled inverted>
                                <Table.Header >
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2'>{info.name} {followButton()} </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                    <Table.Cell>Age:</Table.Cell>
                                    <Table.Cell>{info.age}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Height:</Table.Cell>
                                        <Table.Cell>{info.height}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Weight:</Table.Cell>
                                        <Table.Cell>{info.weight}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Team:</Table.Cell>
                                        <Table.Cell><a href=''><i className={'icon' + " " + info.team}/>{info.team}</a></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Nationality:</Table.Cell>
                                        <Table.Cell>{info.nationality}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Post:</Table.Cell>
                                        <Table.Cell>{info.post}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            {/*<Item.Header> {info.name} </Item.Header>*/}
                            {/*<Item.Meta> {info.age} </Item.Meta>*/}
                            {/*<Item.Extra> {info.height} </Item.Extra>*/}
                            {/*<Item.Extra> {info.weight} </Item.Extra>*/}
                            {/*<Item.Extra> {info.team} </Item.Extra>*/}
                            {/*<Item.Extra> {info.nationality} </Item.Extra>*/}
                            {/*<Item.Extra> {info.post} </Item.Extra>*/}
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Container>
        );
    }
}