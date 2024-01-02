const express = require("express")
const app = express();

app.get('/',(req,res)=>{
    res.send("this first sever");
})

app.listen(3000,()=>{
    console.log("server started");
})
