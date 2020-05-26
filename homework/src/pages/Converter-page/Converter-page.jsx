import React from 'react'
import './Converter-page.css'
import ConverterHeader from '../../components/Converter-header/Converter-header'
import Converter from '../../components/Converter/Converter'

class ConverterPage extends React.Component {
    render() {
        return (
            <div className="Converter-page">
                <ConverterHeader />
                <Converter />
                <a className="Github-link" href="https://github.com/a-xalimonov/a-xalimonov.github.io/tree/master/homework">Ссылка на репозиторий</a>
            </div>
        );
    }
}

export default ConverterPage