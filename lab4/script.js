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

let database = firebase.firestore()
//let storage = firebase.storage();

function sendData()
{
    let form = document.forms[0];
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const desc = form.desc.value;
    database.collection("forms").add({
        name: name,
        phone: phone,
        email: email,
        desc: desc,
    })
    .then(function(docRef) {
        alert("Document written with ID: ", docRef.id);
    }, function(error) {
        alert("Error adding document: ", error);
    });
}