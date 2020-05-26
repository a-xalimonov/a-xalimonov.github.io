import React from 'react'
import './Main-page.css'
import Header from '../../components/Header/Header'
import MainContent from '../../components/Main-contnet/Main-content'

class MainPage extends React.Component {
    render() {
        return (
            <div className="Main-page">
                <Header/>
                <MainContent />
                <a className="Github-link" href="https://github.com/a-xalimonov/a-xalimonov.github.io/tree/master/homework">Ссылка на репозиторий</a>
            </div>
        );
    }
}

export default MainPage