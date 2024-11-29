const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sona:1234@cluster0.ifmbeig.mongodb.net/buss?retryWrites=true&w=majority&appName=Cluster0")
   .then(()=>{
    console.log("db connected")
   })
.catch((error)=>{
    console.log
})