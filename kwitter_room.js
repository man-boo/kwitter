
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration 
//For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = { 
apiKey: "AIzaSyCNux-Fx6s4RzfGbDdkBxPc6qnsI5IvzP8", 
authDomain: "kwitter-969b0.firebaseapp.com", 
projectId: "kwitter-969b0", 
storageBucket: "kwitter-969b0.appspot.com", 
messagingSenderId: "527348160680", 
appId: "1:527348160680:web:9e0534cdcd6b759aa44a9d", 
measurementId: "G-25QJD52P5Q" 
}; 
// Initialize Firebase
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
