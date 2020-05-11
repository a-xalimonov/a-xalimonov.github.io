import React from 'react';
import './Header.css';
import HeaderIcon from '../../images/Header-icon.png'

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Heading">
                    <img src={HeaderIcon} alt="Header-icon" className="Header-icon" />
                    <p className="Header-line">КУРС ВАЛЮТ</p>
                </div>
                <div className="Authorization">
                    <div className="Login-button">Вход  </div>
                    <div className="Register-button">Зарегестрироваться</div>
                </div>
            </div>
        );
    }
}

export default Header