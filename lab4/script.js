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

const database = firebase.database()
const databaseRef = database.ref("forms");
//let storage = firebase.storage();

function sendData()
{
    const form = document.forms[0];
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const desc = form.desc.value;
    writeUserData(name, phone, email, desc, "");
}

function writeUserData(name, phone, email, desc, imageUrl) {
    const databaseNewId = databaseRef.push();
    alert(databaseNewId);
    databaseNewId.set({
      name: name,
      phone: phone,
      email: email,
      desc: desc,
      photo: imageUrl,
    });
}