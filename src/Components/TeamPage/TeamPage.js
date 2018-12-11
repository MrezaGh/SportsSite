import React , {Component} from 'react';

import Navbar from '../Navbar';
import Games from './Games';
import TeamMembers from './TeamMembers';

export default class TeamPage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <Games/>

                    <TeamMembers/>
                </div>
            </div>
        );
    }

}