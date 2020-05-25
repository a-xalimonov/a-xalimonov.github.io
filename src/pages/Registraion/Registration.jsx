import React from 'react'
import './Registration.css'
import RegistrationHeader from '../../components/Registration-header/Registration-header'
import RegistrationForm from '../../components/Registration-form/Registration-form'
import { FirebaseContext } from '../../components/Firebase'

class Registration extends React.Component {
    render() {
        return (
            <div className="Registration">
                <RegistrationHeader />
                <FirebaseContext.Consumer>
                    {firebase => <RegistrationForm firebase={firebase} />}
                </FirebaseContext.Consumer>
                <a className="Github-link" href="https://github.com/a-xalimonov/a-xalimonov.github.io/tree/master/Homework">Ссылка на репозиторий</a>
            </div>
        );
    }
}

export default Registration