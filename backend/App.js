const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

PORT =3008
require("./DB/Connection")
const userRoute = require('./Routes/UserRoute');
// const postRoute  = require('./Routes/postRoute')
const app = express();
app.use(cors());

app.use(morgan('dev'));
app.use('/api',userRoute);
// app.use('/api',postRoute);

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})