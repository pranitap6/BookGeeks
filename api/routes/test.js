var express = require("express");
const mongoose = require("mongoose");
var Router = express.Router();
var Schema = mongoose.Schema;

const db = process.env.DB;
mongoose.connect(db,{ useNewUrlParser:true , useUnifiedTopology: true });
mongoose.model("ToRead" , new Schema({name : String} , { collection : "ToRead" }));

//mongoose.model("Test" , new Schema({name : String} , { collection : "Test" }));

//var Test = mongoose.model("Test");
var Books = mongoose.model("ToRead");
Router.get("/",function(req,res,next){
	Books.find({},function(err,data){res.send(data)});
});
Router.post("/",function(req,res,next){
	console.log(req.body);
	const book = new Books({
		name : req.body.name	
	});
	book.save();
	res.send(req.body.name);
});

Router.delete("/",function(req,res,next){
	const item = req.body.name;
	Books.deleteOne({name : item } , function(err,data){if(err) {res.send(err)} else {res.send(item)}});
	
});
/*Router.get("/",function(req,res,next){
	Test.find({},function(err,data){res.send(data)});
});
Router.post("/",function (req,res,next){
	console.log(req.body);
	const name = new Test({
		name : req.body.name
	});
	name.save();
	res.send(req.body.name);
});
Router.delete("/",function(req,res,next){
	const item = req.body.name;
	Test.deleteOne({name : item } , function(err,data){if(err) {res.send(err)} else {res.send(item)}});
	
});*/
module.exports = Router;