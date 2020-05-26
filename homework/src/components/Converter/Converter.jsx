import React from 'react';
import './Converter.css';

class Converter extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoaded: false,
            json: {},
        }
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=RUB")
            .then(response => response.json())
            .then(result => this.setState({
                isLoaded: true,
                json: result.rates,
            }));
    }

    getRubPrice(name) {
        switch (name) {
            case "USD":
                return this.state.json.USD;
            case "EUR":
                return this.state.json.EUR;
            case "GBP":
                return this.state.json.GBP;
            case "CNY":
                return this.state.json.CNY;
            case "JPY":
                return this.state.json.JPY;
            default:
                return null;
        }
    }

    convertMoney(value, name) {
        if (name !== "RUB") {
            this.Rub.value = (value / this.getRubPrice(name)).toFixed(2);
        }
        if (name !== "USD") {
            this.Usd.value = (this.Rub.value * this.state.json.USD).toFixed(2);
        }
        if (name !== "EUR") {
            this.Eur.value = (this.Rub.value * this.state.json.EUR).toFixed(2);
        }
        if (name !== "GBP") {
            this.Gbp.value = (this.Rub.value * this.state.json.GBP).toFixed(2);
        }
        if (name !== "CNY") {
            this.Cny.value = (this.Rub.value * this.state.json.CNY).toFixed(2);
        }
        if (name !== "JPY") {
            this.Jpy.value = (this.Rub.value * this.state.json.JPY).toFixed(2);
        }

    }

    render() {
        return (
            <div className="Converter">
                <table className="Converter-table">
                    <tbody>
                        <tr>
                            <td className="TD">
                                <p>РОССИЙСКИЙ РУБЛЬ</p>
                                <div className="Input-line">
                                    <p>RUB =</p>
                                    <input
                                        type="number"
                                        name="RUB"
                                        className="Input-box"
                                        ref={(input) => this.Rub = input}
                                        onInput={event => this.convertMoney(event.target.value, event.target.name)}
                                    />
                                </div>
                            </td>
                            <td className="TD">
                                <p>ДОЛЛАР США</p>
                                <div className="Input-line">
                                    <p>USD =</p>
                                    <input
                                        type="number"
                                        name="USD"
                                        className="Input-box"
                                        ref={(input) => this.Usd = input}
                                        onInput={event => this.convertMoney(event.target.value, event.target.name)}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr className="Middle-line">
                            <td className="TD">
                                <p>ЕВРО</p>
                                <div className="Input-line">
                                    <p>EUR =</p>
                                    <input
                                        type="number"
                                        name="EUR"
                                        className="Input-box"
                                        ref={(input) => this.Eur = input}
                                        onInput={event => this.convertMoney(event.target.value, event.target.name)}
                                    />
                                </div>
                            </td>
                            <td className="TD">
                                <p>ФУНТ СТЕРЛИНГОВ</p>
                                <div className="Input-line">
                                    <p>GBP =</p>
                                    <input
                                        type="number"
                                        name="GBP"
                                        className="Input-box"
                                        ref={(input) => this.Gbp = input}
                                        onInput={event => this.convertMoney(event.target.value, event.target.name)}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="TD">
                                <p>КИТАЙСКИЙ ЮАНЬ</p>
                                <div className="Input-line">
                                    <p>CNY =</p>
                                    <input
                                        type="number"
                                        name="CNY"
                                        className="Input-box"
                                        ref={(input) => this.Cny = input}
                                        onInput={event => this.convertMoney(event.target.value, event.target.name)}
                                    />
                                </div>
                            </td>
                            <td className="TD">
                                <p>ЯПОНСКАЯ ИЕНА</p>
                                <div className="Input-line">
                                    <p>JPY =</p>
                                    <input
                                        type="number"
                                        name="JPY"
                                        className="Input-box"
                                        ref={(input) => this.Jpy = input}
                                        onInput={event => this.convertMoney(event.target.value, event.target.name)}
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Converter