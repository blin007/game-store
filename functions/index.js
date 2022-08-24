const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

//middleware
app.use(cors({origin: true}));
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.post('/checkout/create', async (req, res) => {
    const paymentAmount = req.query.total;
    console.log('payment request received for this amount: ', paymentAmount);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: paymentAmount,
        currency: "usd",
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// console.log(process.env)

exports.payment = functions.https.onRequest(app)
//end point: http://localhost:5001/game-store-589e9/us-central1/payment

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
