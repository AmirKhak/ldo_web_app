function redirectToPath(path) {
  window.location.pathname = path;
}

function redirectToUrl(url) {
  window.location = url;
}

function initializeFirebase() {
  var config = {
    apiKey: "AIzaSyCytiqYnDLL33YtLY9YfY6XODug-lITPt4",
    authDomain: "letsdayout-9783f.firebaseapp.com",
    databaseURL: "https://letsdayout-9783f.firebaseio.com",
    projectId: "letsdayout-9783f",
    storageBucket: "letsdayout-9783f.appspot.com",
    messagingSenderId: "438112567124"
  };
  firebase.initializeApp(config);
}

function authentication_status() {
  let user = firebase.auth().currentUser;
  if (user) {
    topText("User " + user.displayName + " is authenticated.");
  } else {
    topText("User is not authenticated.");
  }
}

function topText(message) {
  document.getElementById("result_of_button").innerHTML = message;
}

function signOutUser() {
  if (isUserAuthenticated()) {
    firebase.auth().signOut();
    redirectToPath('/');
  }
}

function getCurrentUser() {
  return firebase.auth().currentUser;
}

function isUserAuthenticated() {
  return getCurrentUser() !== null;
}

function checkUserIsSignedIn() {
  if (!isUserAuthenticated()) {
    redirectToPath('/');
  }
}

function checkUserIsNotSignedIn() {
  if (isUserAuthenticated()) {
    redirectToPath('/home');
  }
}

function newEvent() {
  let event = {
    attendees: {
      values: []
    },
    category: {
      values: []
    },
    links: {
      values: []
    },
    dates: {
      values: []
    },
    description: null,
    experienceID: null,
    host: {
      address: null,
      name: null,
      phone: null,
      postcode: null,
      web: null,
    },
    hostid: null,
    images: {
      values: []
    },
    isActive: true,
    location: {
      address: null,
      city: null,
      lat: null,
      long: null,
      postcode: null
    },
    bank_details: {
      holder_name: null,
      sort_code: null,
      account_number: null
    },
    prices: {
      values: []
    },
    reviews: {
      values: []
    },
    title: null
  };
   return event;
}

function newTicket() {
  let ticket = {
    name: null,
    value: null
  };
  return ticket;
}

function newAccount() {
  let account = {
    experiences: {
      values: []
    },
    interests: [],
    name: null,
    profilepicture: null,
    profiletype: 0,
    social: {
      followers: []
    },
    userId: null,
    work: {
      company: null,
      job: null
    }
  };
  return account;
}

function getItem(documentId) {
  return document.getElementById(documentId);
}

function collapse(documentId) {
  styleElementById(documentId, "display: none");
}

function expand(documentId) {
  styleElementById(documentId, "display: block");
}

function styleElementById(documentId, css_style) {
  getItem(documentId).style = css_style;
}
