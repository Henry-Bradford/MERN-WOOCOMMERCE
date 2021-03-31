// Import Packages
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")
const users = require('./routes/user.api');
const connection = require('./services/mongoose.service')
const passport = require('passport');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Middleware
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

// Routes
app.use('/', users);

// Passport Middleware
app.use(passport.initialize());

// Passport config
require('./config/passport');

// HTTP Request logger
app.use(morgan('tiny'));

app.listen(PORT, () => {
    console.log("Your Server is running at: " + PORT);
})