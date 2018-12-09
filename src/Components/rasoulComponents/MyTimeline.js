import Timeline from 'react-timeline-semantic-ui';
import React , {Component} from 'react';

export default class MyTimeline extends Component{


    render() {
        return (
            <div>

                {this.showTimeLine()}
            </div>
        );
    }

    showTimeLine() {
        return this.props.teamData.map((data, index) =>{
          return(
              <Timeline
                  direction={data.idOf === 0 ? "left" : "right"}
                  icon="user"
                  title={data.name}
                  time={data.time}
                  description={data.happen}
                  color={data.happen==="goal"?"green":data.happen==="red"?"red":"yellow"}
                  tags={[]}
                  lineHeight={this.props.teamData.length-3}

              />
          );
        })
    }
}