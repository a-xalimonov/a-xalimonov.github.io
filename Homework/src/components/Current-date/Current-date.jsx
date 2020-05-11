import React from 'react';
import './Current-date.css';

class CurrentDate extends React.Component {

    constructor() {
        super()
        this.state = {date: new Date()}
    }
    
    render() {
        return (
            <div className="Current-date">
                {this.state.date.toLocaleString("ru", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </div>
        );
    }
}

export default CurrentDate