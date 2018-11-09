var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

//Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//points server to series of route files 
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listenng on PORT: "+ PORT);
});