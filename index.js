const express=require("express");
const cors=require("cors");
const { Connection } = require("./Config/db");
const { Jobs } = require("./Routes/JobsRoute");

const app=express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const PORT=process.env.PORT||8000;

app.use("/job",Jobs)

app.listen(PORT,async()=>{
    try{
        await Connection;
        console.log("connection to DB successfull")
    }
    catch(err){
       console.log("error in connecting to DB");
       console.log(err)
    }
    console.log(`listening to port ${PORT}`);
})

