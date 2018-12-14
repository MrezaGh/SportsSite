import React , {Component} from 'react';


import {Table, Dropdown} from 'semantic-ui-react';
import './FootballPlayerStatistics..css';

export default class FootballPlayerStatistics extends Component{
    render(){
        // const stats = () => {
        //     return this.props.stats.map( (argument) =>(
        //         <Table.Row>
        //             <Table.Cell>{argument}</Table.Cell>
        //         </Table.Row>
        //     ))
        // };
        const stats = this.props.stats;
        const seasonOptions = [
            {
                text: '2nd, 2018 ',
                value: '2nd, 2018',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '1st, 2018',
                value: '1st, 2018',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '2nd, 2017',
                value: '2nd, 2017',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '1st, 2017',
                value: '1st, 2017',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '2nd, 2016',
                value: '2nd, 2016',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '1st, 2016',
                value: '1st, 2016',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '2nd, 2015',
                value: '2nd, 2015',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '1st, 2015',
                value: '1st, 2015',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '2nd, 2014',
                value: '2nd, 2014',
                image: {avatar: true, src:'/favicon.ico'},
            },
            {
                text: '1st, 2014',
                value: '1st, 2014',
                image: {avatar: true, src:'/favicon.ico'},
            },
        ];
        const dropDown = () => (
            <Dropdown  button className='dropdown-stats' placeholder={seasonOptions[0].text} scrolling options={seasonOptions} />
        );
        return(
            <div>
                <span className='playerPage-section-title'>Statistics</span>
                {dropDown()}
                <Table striped celled inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan={2}>{stats.name}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Goals:</Table.Cell>
                            <Table.Cell>{stats.goal} </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Assists:</Table.Cell>
                            <Table.Cell>{stats.assist} </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Yellow Cards:</Table.Cell>
                            <Table.Cell>{stats.yellowCard} </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Red Cards:</Table.Cell>
                            <Table.Cell>{stats.redCard} </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}