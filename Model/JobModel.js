const mongoose=require("mongoose");

const JobsSchema=mongoose.Schema({
    companyname:{type:String,required:true},
    postedat:{type:String,required:true},
    city:{type:String,required:true},
    location:{type:String,required:true},
    role:{type:String,required:true},
    level  :{type:String,required:true},
    position :{type:String,required:true},
    language  :{type:String,required:true},
    contract  :{type:String,required:true}
})

const JobsModel=mongoose.model("job",JobsSchema);

module.exports={JobsModel}