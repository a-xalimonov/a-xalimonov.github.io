import React from 'react';
import './Login-form.css';
import {
    Link, withRouter,
} from 'react-router-dom'

class LoginFormBase extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            infoIsValid: true,
        }
    }

    handleSubmit(e) {
        this.props.firebase
            .doSignInWithEmailAndPassword(this.email.value, this.password.value)
            .then(() => {
                this.props.history.push("/JS_Homework");
            })
            .catch(error => {
                alert(error);
                this.setState({ infoIsValid: false });
            });

        e.preventDefault();
    }

    render() {
        return (
            <div className="Login-form">
                <form onSubmit={this.handleSubmit}>
                    <p className="Alert-label">
                        {this.state.infoIsValid ? "" : "Данные не найдены или введены некорректо!"}
                    </p>
                    <p className="Input-label">E-MAIL</p>
                    <input
                        type="text"
                        className="Text-input"
                        ref={(input) => this.email = input}
                    />
                    <p className="Input-label">ПАРОЛЬ</p>
                    <input
                        type="password"
                        ref={(input) => this.password = input}
                        className="Text-input"
                    />
                    <input type="submit" className="Button" value="ВОЙТИ" />
                    <p className="Result-label"></p>
                </form>
                <p className="Already-registered">Не зарегистрированы? <Link className="Link" to="/JS_Homework/Registration">Регистрация</Link></p>
            </div>
        );
    }
}

const LoginForm = withRouter(LoginFormBase);

export default LoginForm