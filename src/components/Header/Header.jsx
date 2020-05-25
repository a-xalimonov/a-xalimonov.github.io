import React from 'react';
import './Header.css';
import HeaderIcon from '../../images/Header-icon.png'
import {
    Link
} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Heading">
                    <img src={HeaderIcon} alt="Header-icon" className="Header-icon" />
                    <p className="Header-line">КУРС ВАЛЮТ</p>
                </div>
                <div className="Authorization">
                <div className="Login-button"><Link className="Link" to="/JS_Homework/Login">Вход</Link></div>
                <div className="Register-button"><Link className="Link"  to="/JS_Homework/Registration">Зарегистрироваться</Link></div>
                </div>
            </div>
        );
    }
}

export default Header