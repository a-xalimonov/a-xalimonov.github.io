import React from 'react';
import './Header.css';
import HeaderIcon from '../../images/Header-icon.png'
import { Link } from 'react-router-dom'
import { withFirebase } from '../../components/Firebase/index'

class HeaderBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null })
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        //alert(this.props.authUser);
        return (
            <div className="Header">
                <div className="Heading">
                    <img src={HeaderIcon} alt="Header-icon" className="Header-icon" />
                    <p className="Header-line">КУРС ВАЛЮТ</p>
                </div>
                <div className="Authorization">
                    {this.state.authUser ? <AuthButtons /> : <NonAuthButtons />}
                </div>
            </div>
        );
    }
}

const AuthButtons = withFirebase(({ firebase }) => (
    <>
        <div className="Upper-button">
            <Link className="Link" to="/JS_Homework/Converter">Конвентер</Link>
        </div>
        <div className="Lower-button" onClick={firebase.doSignOut}>
            Выйти из аккаунта
        </div>
    </>
));

const NonAuthButtons = () => (
    <>
        <div className="Upper-button">
            <Link className="Link" to="/JS_Homework/Login">Вход</Link>
        </div>
        <div className="Lower-button">
            <Link className="Link" to="/JS_Homework/Registration">Зарегистрироваться</Link>
        </div>
    </>
);

const Header = withFirebase(HeaderBase);

export default Header