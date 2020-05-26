import React from 'react'
import './Registration.css'
import RegistrationHeader from '../../components/Registration-header/Registration-header'
import RegistrationForm from '../../components/Registration-form/Registration-form'

class Registration extends React.Component {
    render() {
        return (
            <div className="Registration">
                <RegistrationHeader />
                <RegistrationForm />
                <a className="Github-link" href="https://github.com/a-xalimonov/a-xalimonov.github.io/tree/master/homework">Ссылка на репозиторий</a>
            </div>
        );
    }
}

export default Registration