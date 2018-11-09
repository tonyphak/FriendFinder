//require path for html pages
var path = require("path");

//use module.exports to data from external files
module.exports = function(app) {
    //route to survey page
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //route to home page
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};