const express = require('express');
const expressGrapQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const port = 4000;

app.use('/graphql',expressGrapQL({
    schema,
    graphiql:true
}))
 
app.listen(port,()=>{
    console.log(`Listen on port ${port}`);
})

