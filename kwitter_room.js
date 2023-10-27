
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAQAwHdz0jq1JGxstiyCFXNnqjgJ7v5BQ4",
      authDomain: "lets-chat-ea94d.firebaseapp.com",
      projectId: "lets-chat-ea94d",
      storageBucket: "lets-chat-ea94d.appspot.com",
      messagingSenderId: "723005832406",
      appId: "1:723005832406:web:0eb435f86876ad7d231d77"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
