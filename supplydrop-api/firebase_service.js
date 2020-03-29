const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databseURL: "https://supplydrop-e7947.firebaseio.com"
})

export default admin