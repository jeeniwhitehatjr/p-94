
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD2OyF9m8XTQ9ul2Zo_g2FxehFeksCxcHI",
      authDomain: "let-s-chat-d2073.firebaseapp.com",
      projectId: "let-s-chat-d2073",
      storageBucket: "let-s-chat-d2073.appspot.com",
      messagingSenderId: "502162951107",
      appId: "1:502162951107:web:ace4fde5d6eb0bc27c4b76"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

