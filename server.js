const express = require('express');
const bodyParser = require('body-parser');
const { actions } = require('./utils');
const { intent } = require('./intent');

const server = express();

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send(`Welcome to Angular Quiz Chatbot...
              To play quiz & test your knowledge visit  .....`);
});

server.post('/', (req, res) => {
    const userIntent = req.body.queryResult.intent['displayName'].toLowerCase();
    const userText = req.body.queryResult['queryText'].toLowerCase();

    const result = intent[userIntent] ? actions[userIntent](userText) : 'Something went wrong !! Try again Later';

    return res.json({
        fulfillmentText: result
    });
})

server.listen((process.env.PORT || 3000), () => {
    console.log("Angular Bot server is up and running...");
});