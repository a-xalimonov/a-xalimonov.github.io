var firebaseConfig = {
    apiKey: "AIzaSyDTv9NEtnYpGkf3epESv3sxduZFsuGbDkk",
    authDomain: "lab4-khalimonov.firebaseapp.com",
    databaseURL: "https://lab4-khalimonov.firebaseio.com",
    projectId: "lab4-khalimonov",
    storageBucket: "lab4-khalimonov.appspot.com",
    messagingSenderId: "364528401298",
    appId: "1:364528401298:web:3fd27c75e40ebaeb891f4b"
};

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref("forms");
const storageRef = firebase.storage().ref();

const form = document.forms[0];
form.addEventListener("submit",sendData);

function sendData(event) {

    event.preventDefault();
    const name = form.name.value;
    const phone = form.phone.value.replace(/\s/g, "");
    const email = form.email.value;
    const desc = form.desc.value;
    const photo = form.photo.files[0];

    const nameIsValid = verifyName(name);
    const phoneIsValid = verifyPhone(phone);
    const emailIsValid = verifyEmail(email);

    if (nameIsValid && phoneIsValid && emailIsValid) {
        writeUserData(name, phone, email, desc, photo);
    }
}

function verifyName(name) {
    const alertName = document.getElementsByClassName("alert-name")[0];
    if (/^[а-яё]+\s+[a-яё]+$/i.test(name)) {
        alertName.innerHTML = "";
        return true;
    }
    else {
        alertName.innerHTML = "Имя и фамилия должны содержать только кириллицу!";
        return false;
    }
}

function verifyPhone(phone) {
    const alertPhone = document.getElementsByClassName("alert-phone")[0];
    if (/^\+?[78][\d]{10}$/.test(phone)) {
        alertPhone.innerHTML = "";
        return true;
    }
    else {
        alertPhone.innerHTML = "Номер телефона должен сосостоять только из 11 цифр!";
        return false;
    }
}

function verifyEmail(email) {
    const alertEmail = document.getElementsByClassName("alert-email")[0];
    if (/^[\w.-]+@[\w.-]+.\w{2,4}$/.test(email)) {
        alertEmail.innerHTML = "";
        return true;
    }
    else {
        alertEmail.innerHTML = "Адрес электронной почты введён некорректно!";
        return false;
    }
}

function writeUserData(name, phone, email, desc, photo) {
    const databaseNewRef = databaseRef.push();
    databaseNewRef.set({
        name: name,
        phone: phone,
        email: email,
        desc: desc,
    }, function(error) {
        const label = document.getElementsByClassName("result-label")[0];
        if (error) {
            label.style = "color: red";
            label.innerHTML = "Ошибка: " + error + "!";
        }
        else {
            label.style = "color: green";
            label.innerHTML = "Данные успешно отправлены!";
        }
    });
    if (photo != undefined)
    {
        const storageNewRef = storageRef.child(databaseNewRef.key + "/" + photo.name);
        storageNewRef.put(photo);
    }
}