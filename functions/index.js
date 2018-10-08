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


exports.show_event = functions.https.onRequest((req, res) => {
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      Haya
      ${req.id}
    </body>
  </html>`);
});
