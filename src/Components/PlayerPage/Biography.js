import React , {Component} from 'react'

import './Biography.css';

export default class Biography extends Component {
    render(){
        return(
            <div className='biography'>
                <h1 className='playerPage-section-title'>Biography</h1>
                <p>
                    {this.props.info.p1}
                </p>
                <p>
                    {this.props.info.p2}
                </p>
            </div>
        );
    }
}