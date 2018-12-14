import React , {Component} from 'react'

import {Table} from 'semantic-ui-react';
import './Games.css';
import '../MainPage/Match.css';//todo


export default class Games extends Component{
    render(){

        const showGames = this.props.games.map( (game, index) => (
                   <Table.Row key={index} className={game.status}>
                       <Table.Cell>
                           <i className={'icon' + " " + game.host}/>{game.host}
                       <span className='score-square'> {game.hostScore} </span> vs <span className='score-square'> {game.guestScore} </span>
                           <i className={'icon' + " " + game.guest}/>{game.guest} </Table.Cell>
                       <Table.Cell> {game.date} </Table.Cell>
                   </Table.Row>
        ));
        return(
            <div >

                <Table celled inverted selectable >
                    <Table.Header >
                        <Table.Row >
                            <Table.HeaderCell>results</Table.HeaderCell>
                            <Table.HeaderCell>date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body >
                        {showGames}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}