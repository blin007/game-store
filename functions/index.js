const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios = require("axios")
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

//middleware
app.use(cors({origin: true}));
app.use(express.json());

//routes

//get game search list
app.get('/search', async (req, res) => {
    const gameName = req.query.game;
    const slug = gameName.split(' ').join('-').toLowerCase();
    console.log('game query search received: ', slug);

    axios.get(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${slug}`).then(response => {
        res.json(response.data);
    })
})


//get game details and screen shots
app.get('/game', async (req, res) => {
    console.log('req: ', req);
    const gameId = Number(req.query.id);
    console.log('game query id received: ', gameId);

    const gameDetailRequests = axios.get(`https://api.rawg.io/api/games/${gameId}?key=${process.env.RAWG_API_KEY}`);
    const gameScreenShotsRequests = axios.get(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${process.env.RAWG_API_KEY}`)
    axios.all([gameDetailRequests, gameScreenShotsRequests]).then(
        axios.spread((gameDetails, gameScreenShots) => {
            console.log("game details: ", gameDetails.data)
            console.log("game screenshots: ", gameScreenShots.data )
            let gameDetailsData = gameDetails.data;
            let gameScreenShotsData = gameScreenShots.data
            res.json({gameDetailsData, gameScreenShotsData})
        })
    )
})

//post payment
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

exports.api = functions.https.onRequest(app)
//end point: http://localhost:5001/game-store-589e9/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
