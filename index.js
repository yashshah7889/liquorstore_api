const itemRouter =require('./routes/item');
//setting up express(most popular server technology)
//body parser is used to process data sent in an HTTP request body.
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended:false}))

//defining the port. process.env.PORT will povide dynamic port when added to heroku,aws or etc otherwise gateway error 500
const port=  process.env.PORT || 4001

//where app will listen
app.listen(port, () => {
    console.log(`web server listening on port ${port}`)
})

app.use("/items",itemRouter);

