import React from 'react';
import './Converter-header.css';
import HeaderIcon from '../../images/Header-icon.png'
import {
    Link
} from 'react-router-dom'

class ConverterHeader extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Heading">
                    <img src={HeaderIcon} alt="Header-icon" className="Header-icon" />
                    <p className="Header-line">КОНВЕРТЕР ВАЛЮТ</p>
                </div>
                <div className="Return"><Link to="/JS_Homework" className="Return-link">НА ГЛАВНУЮ</Link></div>
            </div>
        );
    }
}

export default ConverterHeader