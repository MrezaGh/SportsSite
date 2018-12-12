import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import './Teamarrangement.css';

export default class TeamArrangementright extends Component {
    render() {
        return this.props.teamMemberData.map((data, index) => {


            return (

                <tbody>
                <tr className="top aligned right aligned">
                    <td>{data.name}</td>
                    <td className="top aligned left aligned">
                        {data.yellowtime.length!==0?<div><a className="ui yellow empty circular label"></a>{data.yellowtime[0]}</div>:null}
                        {data.redtime!==0?<div><a className="ui red empty circular label"></a>{data.redtime}</div>:null}
                        {data.timein!==0?<div><i className="arrow circle up icon"></i>{data.timein}</div>:null}
                        {data.timeout!==90?<div><i className="arrow circle down icon"></i>{data.timeout}</div>:null}
                        <br/>
                    </td>
                </tr>

                </tbody>
            );

        })
    }
}