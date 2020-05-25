import React from 'react';
import './Registration-form.css';
import {
    Link, withRouter
} from 'react-router-dom'

class RegistrationFormBase extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            emailIsValid: true,
            passwordIsValid: true,
            passwordsAreEqual: true,
            photoIsUploaded: true,
            photoIsValid: true,
        }
    }

    handleSubmit(e) {
        let emailIsValidB = true;
        let passwordIsValidB = true;
        let passwordsAreEqualB = true;
        let photoIsUploadedB = true;
        let photoIsValidB = true;

        if (!/^[\w.-]+@[\w.-]+.\w{2,4}$/.test(this.email.value)) {
            emailIsValidB = false;
        }
        if (!/\w/g.test(this.password1.value)) {
            passwordIsValidB = false;
        }
        if (this.password1.value !== this.password2.value) {
            passwordsAreEqualB = false;
        }
        if (this.fileInput.files.length == 0) {
            photoIsUploadedB = false;
        }
        else {
            const fileRE = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
            if (!fileRE.test(this.fileInput.files[0].name)) {
                photoIsValidB = false;
            }
        }
        this.setState({
            emailIsValid: emailIsValidB,
            passwordIsValid: passwordIsValidB,
            passwordsAreEqual: passwordsAreEqualB,
            photoIsUploaded: photoIsUploadedB,
            photoIsValid: photoIsValidB,
        });
        if (emailIsValidB & passwordIsValidB & passwordsAreEqualB & photoIsUploadedB & photoIsValidB) {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(this.email.value, this.password1.value)
                .then(authUser => {
                    this.props.firebase
                        .storageRef(authUser.user.uid)
                        .put(this.fileInput.files[0]);
                    this.props.history.push("/JS_Homework");
                })
                .catch(error => {
                    alert(error);
                });
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="Registration-form">
                <form onSubmit={this.handleSubmit}>
                    <p className="Input-label">ВВЕДИТЕ E-MAIL</p>
                    <p className="Alert-label">
                        {this.state.emailIsValid ? "" : "Неверный формат!"}
                    </p>
                    <input
                        type="text"
                        className="Text-input"
                        ref={(input) => this.email = input}
                    />
                    <p className="Input-label">ПРИДУМАЙТЕ ПАРОЛЬ</p>
                    <p className="Alert-label">
                        {this.state.passwordIsValid ? "" : "Не менее 6 букв латинского алфавита или цифр!"}
                    </p>
                    <input
                        type="password"
                        className="Text-input"
                        ref={(input) => this.password1 = input}
                    />
                    <p className="Input-label">ПОВТОРНО ВВЕДИТЕ ПАРОЛЬ</p>
                    <p className="Alert-label">
                        {this.state.passwordsAreEqual ? "" : "Пароли не совпадают!"}
                    </p>
                    <input
                        type="password"
                        className="Text-input"
                        ref={(input) => this.password2 = input}
                    />
                    <p className="Input-label">ПРИКРЕПИТЕ ФОТОГРАФИЮ</p>
                    <p className="Alert-label">
                        {this.state.photoIsUploaded ? "" : "Фотография не прикреплена!"}
                        {this.state.photoIsValid ? "" : "Фотография должна быть формата PNG, JPEG или GIF!"}
                    </p>
                    <input
                        type="file"
                        ref={(input) => this.fileInput = input}
                    />
                    <input
                        type="submit"
                        className="Button"
                        value="ПОДТВЕРДИТЬ"
                    />
                    <p className="Result-label"></p>
                </form>
                <p className="Already-registered">
                    Уже зарегестрированы? <Link className="Link" to="/JS_Homework/Login">Войти</Link>
                </p>
            </div>
        );
    }
}

const RegistrationForm = withRouter(RegistrationFormBase);

export default RegistrationForm