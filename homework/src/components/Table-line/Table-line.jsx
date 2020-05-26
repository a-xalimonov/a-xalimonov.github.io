import React from 'react';
import './Table-line.css';
import IconUSD from '../../images/country-icons/USD.png'
import IconEUR from '../../images/country-icons/EUR.png'
import IconGBP from '../../images/country-icons/GBP.png'
import IconCNY from '../../images/country-icons/CNY.png'
import IconJPY from '../../images/country-icons/JPY.png'

class TableLine extends React.Component {

    getIcon() {
        const id = this.props.currencyId
        switch (id) {
            case "USD":
                return IconUSD
            case "EUR":
                return IconEUR
            case "GBP":
                return IconGBP
            case "CNY":
                return IconCNY
            case "JPY":
                return IconJPY
            default:
        }
    }

    render() {
        const currencyName = this.props.currencyName
        const currencyId = this.props.currencyId
        const rubCost = this.props.rubCost
        return (
            <tr>
                <td className="Table-column"><img src={this.getIcon()} alt="icon" /></td>
                <td className="Table-column">{currencyName}</td>
                <td className="Table-column">1 {currencyId} = {(1 / rubCost).toFixed(2)} RUB</td>
                <td className="Table-column">1 RUB = {rubCost.toFixed(3)} {currencyId}</td>
            </tr>
        );
    }
}

export default TableLine