const express = require('express');
const graphqlHTTP = require('express-graphql'); 
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

app.use(cors());

mongoose.connect('mongodb://artur:123qwerty@ds211592.mlab.com:11592/gql-netninja')
mongoose.connection.once('open', () => {
    console.log('db connect')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log('port 4000'));