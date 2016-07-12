import React, { Component } from 'react';
import SimpleText from './SimpleText';

export default class TitleCard extends Component {
    
    
    render() {
        //console.log('titlecard props',this.props);
        return (
            <div className={'title-card'}>
                <div className={'title'}>
                    <SimpleText text={this.props.title} />
                </div>
                <div className={'summary'}>
                    <SimpleText text={this.props.summary} />
                </div>
            </div>
        );
    }

}

