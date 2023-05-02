const express =require('express');
const cors = require('cors')


const app =express();
const PORT =8000;

const Pizza = require('./models/PizzaModel.js')


const db= require("../backend_server/db")

app.use(express.json());
app.use(cors())

const pizzasRoute =require('./routes/pizzasRouter')
const userRoute = require('./routes/UserRouter.js')

app.use('/api/pizzas',pizzasRoute)
app.use('/api/users/',userRoute)

app.get("/", (req,res)=>{
    res.send("server working....")
})







app.listen(PORT,()=>{
    console.log(`server started in port-${PORT}`)
})