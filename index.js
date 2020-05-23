// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBbHY2cS6db909S2spMYuNiyX5nHJxj8p4",
    authDomain: "contact-form-30f9a.firebaseapp.com",
    databaseURL: "https://contact-form-30f9a.firebaseio.com",
    projectId: "contact-form-30f9a",
    storageBucket: "contact-form-30f9a.appspot.com",
    messagingSenderId: "500348095792",
    appId: "1:500348095792:web:7de3d8e887028041650cf5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    //   Reference messages
  let messagesRef = firebase.database().ref('messages');
    // listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e) {
    e.preventDefault();
    // get the values
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');
    
    // save message
    saveInfo(name,company,email,phone,message);
    
    // show alert
    document.querySelector('.alert').style.display = 'block'
    
    // hide alert after 3seconds
    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none'
    },3000)
    document.getElementById('contactForm').reset();
}

// function to get input values
const getInputVal = (id) => {
    return document.getElementById(id).value;
}

// save details to firebase
const saveInfo = (name,company,email,phone,message) => {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
  })
}