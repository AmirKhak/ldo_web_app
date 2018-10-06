const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
const serviceAccount = require("./letsdayout-9783f-firebase-adminsdk-l8d0p-a4145c1100.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://letsdayout-9783f.firebaseio.com"
});

exports.sign_up = functions.https.onRequest((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const displayName = req.body.displayName;
  if (!(email && password && displayName)) {
    res.status(400).send("email or password or name: " + email + ", " +
      password + ", " + displayName + ", " + JSON.stringify(req.body));
    return;
  }
  return admin.auth().createUser({
    email: req.body.email,
    emailVerified: req.body.emailVerified || false,
    phoneNumber: req.body.phoneNumber || null,
    password: req.body.password,
    displayName: req.body.displayName || null,
    photoURL: req.body.photoURL || null,
    disabled: req.body.disabled || false
  })
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    var account = {
      experiences: {
        values: req.body.values || []
      },
      interests: req.bodyinterests || [],
      name: req.body.displayName || null,
      profilepicture: req.body.profilepicture || null,
      profiletype: req.body.profiletype || 0,
      social: {
        followers: req.body.followers || []
      },
      userId: userRecord.uid,
      work: {
        company: req.body.company || null,
        job: req.body.job || null
      }
    };
    return admin.firestore().collection('accounts').add(account).then(ref => {
      res.status(200).send("Successfully created new user:", userRecord.uid);
      return;
    });
  })
  .catch(function(error) {
    res.status(400).send("Error creating new user:", error);
  });
});
