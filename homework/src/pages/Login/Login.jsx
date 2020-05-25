import React from 'react'
import './Login.css'
import LoginHeader from '../../components/Login-header/Login-header'
import LoginForm from '../../components/Login-form/Login-form'
import { FirebaseContext } from '../../components/Firebase'

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <LoginHeader />
                <FirebaseContext.Consumer>
                    {firebase => <LoginForm firebase={firebase} />}
                </FirebaseContext.Consumer>
                <a className="Github-link" href="https://github.com/a-xalimonov/a-xalimonov.github.io/tree/master/Homework">Ссылка на репозиторий</a>
            </div>
        );
    }
}

export default Login