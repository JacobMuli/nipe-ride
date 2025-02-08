// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcEMmgtZZXM9I41KSY_cM_pYM4AyN4q7U",
    authDomain: "eli-cars.firebaseapp.com",
    databaseURL: "https://eli-cars-default-rtdb.firebaseio.com",
    projectId: "eli-cars",
    storageBucket: "eli-cars.appspot.com",
    messagingSenderId: "526698257370",
    appId: "1:526698257370:web:eacd63a54aa2b1b609fee3",
    measurementId: "G-7ZBEWJ1P20"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = firebase.database();
  
  // Form submission handler
  document.getElementById('contact-details').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    saveMessage(name, email, subject, message);
  });
  
  // Save message to Firebase
  function saveMessage(name, email, subject, message) {
    const messagesRef = database.ref('messages');
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      subject: subject,
      message: message
    }).then(() => {
      alert('Message sent successfully');
    }).catch(error => {
      console.error('Error sending message: ', error);
    });
  }
  