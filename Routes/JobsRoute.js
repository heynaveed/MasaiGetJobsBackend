const { Router } = require("express");
const { JobsModel } = require("../Model/JobModel");

const Jobs=Router();

Jobs.post("/",async(req,res)=>{
  const {companyname,city,location,role,level,position,language,contract}=req.body;
  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); 
  const currentYear = currentDate.getFullYear();
  const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
  const newJob=new JobsModel({
    companyname:companyname,
    postedat:dateString,
    city:city,
    location:location,
    role:role,
    level:level,
    position:position,
    language:language,
    contract:contract
  })
  await newJob.save();
  console.log(newJob);
  res.send("Job Posted Successfully");
})

Jobs.get("/",async(req,res)=>{
    const {page,limit,sort,filter}=req.query;
    console.log(page,limit,sort,filter);
    if(filter !=undefined){
        const AllJobs=await JobsModel.find({role:filter}).skip((page-1)*limit).limit(limit).sort({postedat:sort});
       res.send(AllJobs);
    }
    else{
        const AllJobs=await JobsModel.find({}).skip((page-1)*limit).limit(limit).sort({postedat:sort});
        res.send(AllJobs);
    } 
})



module.exports={Jobs}
