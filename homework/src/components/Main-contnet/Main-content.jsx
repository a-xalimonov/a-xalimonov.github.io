import React from 'react';
import CurrentDate from '../Current-date/Current-date';
import Table from '../Table/Table';
import './Main-content.css';

class MainContent extends React.Component {
    render() {
        return (
            <div className="Main-content">
                <CurrentDate />
                <hr />
                <Table />
            </div>
        );
    }
}

export default MainContent