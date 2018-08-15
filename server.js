var express = require("express");
var app = express();

var PORT=3000;

var middleware = {
    requireAuthentication: function(req,res,next){
            console.log("ozel root");
            next();
    },
    logger:function(req,res,next){
        console.log(req.method +" " + req.originalUrl);
        next()
    }
}

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