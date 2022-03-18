var firebaseConfig = {

  apiKey: "AIzaSyBIuTSam6nvJL15qhCSU2RrIGKRpnFm8jE",

  authDomain: "example-965e9.firebaseapp.com",

  databaseURL: "https://example-965e9-default-rtdb.firebaseio.com",

  projectId: "example-965e9",

  storageBucket: "example-965e9.appspot.com",

  messagingSenderId: "749451297800",

  appId: "1:749451297800:web:61c322e3ed5e89d768bdbd",

  measurementId: "G-J0KY377DCR"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig)

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
