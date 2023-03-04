const express = require('express')

const bodyParser = require('body-parser')

const _ = require('lodash');

const ejs = require('ejs')

const app = express();
app.set("view engine",'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/admin",(req,res)=>{
    res.render("admin");
})

app.get("/addproduct",(req,res)=>{

    res.render("addproduct")
})
app.listen(3000,()=>{
    console.log("Server started at Port : 3000");
})