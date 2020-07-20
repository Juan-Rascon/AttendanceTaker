
// Dependencies
// =============================================================

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require("./models");
const exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//------- Start routes
// use the routes variable to make middleware to use the routes file.
require('./routes')(app)
//------- End routes

// render a custom template error page
app.use ( (err, req, res, next) => {
    res.locals.error = err;
    if (err.status >= 100 && err.status < 600)
        // res.send("error");
        res.status(err.status);
    else
        res.status(500);
    console.log('error',err);
});
// ------- end not found error handler


db.sequelize.sync().then(function() {
 app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });
});