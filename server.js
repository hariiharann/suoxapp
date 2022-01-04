
const express= require('express');

const oxygenRoutes=require('./src/route/oxygen.route');
const sugarRoutes=require('./src/route/sugar.route');
const app=express();
const port=8080;
const bodyParser = require("body-parser");
const cors = require("cors");

//used to post data in json (middleware)
app.use(express.json());

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

//CORS-HEADERS- Required for cross origin and cross server communication
app.use((req,res,next)=>{
  res.setHeader('Access-Control_Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin,X-Requested-With,Content-Type,Accept,Authorization');

res.setHeader('Access-Control-Allow-Methods','GET','POST','PATCH','DELETE','OPTIONS');
next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get("/",(req,res)=>{
    res.send("hai welcome to my app!");
});

app.use('/api/oxygen',oxygenRoutes);
app.use('/api/sugar',sugarRoutes);
app.listen(port,()=> console.log(`app listening to ${port}`));

