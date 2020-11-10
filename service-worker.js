importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js')
var firebaseConfig = {
  apiKey: "AIzaSyCnBvUKFBCz2BOM5qdwYUiU1edptUINF2U",
  authDomain: "tobblekids.firebaseapp.com",
  databaseURL: "https://tobblekids.firebaseio.com",
  projectId: "tobblekids",
  storageBucket: "tobblekids.appspot.com",
  messagingSenderId: "1011177539293",
  appId: "1:1011177539293:web:53ad34b1a1e66f23fe7d34",
  measurementId: "G-DNWP3RRCL1"
};
// Initialize Firebase

const messaging = firebase.messaging();
messaging.setBackgroundMessagingHandler(function(payload){
	console.log(payload)
})