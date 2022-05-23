// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBCywBOsUKTGZM1SUqj42gyVkLlVFBeFnY",
    authDomain: "lets-chat-a2c2d.firebaseapp.com",
    projectId: "lets-chat-a2c2d",
    storageBucket: "lets-chat-a2c2d.appspot.com",
    messagingSenderId: "620217540696",
    appId: "1:620217540696:web:255dfaa1504130c635aa2d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



