import React , {Component} from 'react'

import {Table} from 'semantic-ui-react';
import './Games.css';
import '../MainPage/Match.css';//todo


export default class Games extends Component{
    render(){
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
                        <Table.Row className='loose'>
                            <Table.Cell>liverpool <span className="score-square"> 2 </span> vs <span className='score-square'>3</span> chelsea</Table.Cell>
                            <Table.Cell>December 11, 2018</Table.Cell>
                        </Table.Row>
                        <Table.Row className='win'>
                            <Table.Cell><i className='icon Liverpool'/> liverpool <span className="score-square"> 2 </span> vs <span className='score-square'>3</span> <i className='icon Chelsea'/> chelsea</Table.Cell>
                            <Table.Cell>December 11, 2018</Table.Cell>
                        </Table.Row>
                        <Table.Row className='draw' >
                            <Table.Cell>liverpool <span className="score-square"> 2 </span> vs <span className='score-square'>3</span> chelsea</Table.Cell>
                            <Table.Cell>December 11, 2018</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}