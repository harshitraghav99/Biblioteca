const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/biblioteca").then(() =>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("connection unscuccessful")
})
