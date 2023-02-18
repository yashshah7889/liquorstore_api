
//setting up express(most popular server technology)
const express = require('express')
const app = express()

//defining the port. process.env.PORT will povide dynamic port when added to heroku,aws or etc otherwise gateway error 500
const port=  process.env.PORT || 4001

//where app will listen
app.listen(port, () => {
    console.log(`web server listening on port ${port}`)
})

const alcohol = [
    { name: "budwiser", type:"beer" },
    {name:"smirnoff", type:"vodka"}
]

//for now as we dont have any pages build we will use app.get then afterwards to route or for functioning we will use app.use("/data",changephoto);
app.get("/",(req,res)=>{
    res.json(alcohol)
})

//params is an object of the req object that contains route parameters
app.get("/alcohol/:id",(req,res)=>{
    res.json(alcohol[parseInt(req.params.id) - 1])
})