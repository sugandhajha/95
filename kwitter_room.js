const firebaseConfig = { apiKey: "AIzaSyBs2kvWyutZxaBiDzEpN3q4DwzICvOBLx8",
 authDomain: "class-test-160d0.firebaseapp.com",
 databaseURL: "https://class-test-160d0-default-rtdb.firebaseio.com",
  projectId: "class-test-160d0", storageBucket: "class-test-160d0.appspot.com",
   messagingSenderId: "82959311849", appId: "1:82959311849:web:b198c7a3482eaf4a53a178" };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
uaer_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"                       
      });
      localStorage.setItem("room_name", room_name);

      window.location="index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-" + Room_names);
      row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location="index.html";
}