var express = require("express");
var middleware = require("./middleware");

var app = express();

var PORT=process.env.PORT || 3000;



//app.use(middleware.requireAuthentication); 
app.use(middleware.logger); 

app.get("/hakkimda", middleware.requireAuthentication,function(req,res){
    res.send("hakkımda sayfası");
});

app.use(express.static(__dirname+"/public"));

//console.log(__dirname);

app.listen(PORT,function(){
    console.log("express server "+PORT+" portu başlatıldı");
});