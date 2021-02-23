const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");


const stripe = require("stripe")
('sk_test_51IK92NG8RnYDLgWVE8xe13dHITgj8VSGG80P7m1iJ6GI8rrMNiDsvFIr49IxFEo7fbzDvizyZ6nEOJG7m1Th3nve00YXx1shy3')
//apI
//app config
const app = express();
//MIDDLEWARES
app.use(cors({origin:true}));
app.use(express.json());

//API ROUTES
app.get('/',(request, response) => response.status(200).send('helooo'))
app.post("/payments/create", async(request, response) => {
    const total = request.query.total;
    console.log('payment receive', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",

    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//example endpoint
////localhost:5001/clone-6d54c/us-central1/api

//listen command
exports.api=functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
