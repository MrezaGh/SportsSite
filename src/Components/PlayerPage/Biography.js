import React , {Component} from 'react'

export default class Biography extends Component {
    render(){
        return(
            <div>
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