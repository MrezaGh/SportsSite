import React , {Component} from 'react';


import {Table, Dropdown} from 'semantic-ui-react';
import './BasketballPlayerStatistics.css';

export default class BasketballPlayerStatistics extends Component{
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
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '1st, 2018',
                value: '1st, 2018',
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '2nd, 2017',
                value: '2nd, 2017',
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '1st, 2017',
                value: '1st, 2017',
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '2nd, 2016',
                value: '2nd, 2016',
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '1st, 2016',
                value: '1st, 2016',
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '2nd, 2015',
                value: '2nd, 2015',
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '1st, 2015',
                value: '1st, 2015',
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '2nd, 2014',
                value: '2nd, 2014',
                image: {avatar: true, src:'/basketball.ico'},
            },
            {
                text: '1st, 2014',
                value: '1st, 2014',
                image: {avatar: true, src:'/basketball.ico'},
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
                            <Table.Cell>Two Points</Table.Cell>
                            <Table.Cell>{stats.twoPoints} </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Three Points:</Table.Cell>
                            <Table.Cell>{stats.threePoints} </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Reybands:</Table.Cell>
                            <Table.Cell>{stats.reyband} </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Play time:</Table.Cell>
                            <Table.Cell>{stats.playeTime} </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Faults:</Table.Cell>
                        <Table.Cell>{stats.faults} </Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}