import React from 'react'
import './Login.css'
import LoginHeader from '../../components/Login-header/Login-header'
import LoginForm from '../../components/Login-form/Login-form'

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <LoginHeader />
                <LoginForm />
                <a className="Github-link" href="https://github.com/a-xalimonov/a-xalimonov.github.io/tree/master/homework">Ссылка на репозиторий</a>
            </div>
        );
    }
}

export default Login