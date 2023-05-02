const mongoose = require('mongoose');
const dbname ="pizza-corner"

const url = `mongodb+srv://karthick18696:Ayyammal1@cluster0.bwkbmts.mongodb.net/${dbname}`

mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true});

var db = mongoose.connection

db.on('connected',()=>{
    console.log('MongoDB connected Successfully...');
})
db.on('error',()=>{
    console.log('MongoDB connection failed' );
})




module.exports= mongoose