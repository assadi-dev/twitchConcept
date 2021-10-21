const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
var session = require("express-session");
var cookieParser = require("cookie-parser");
const twitchAuth = require("./routes/twitchAuth");
const path = require("path");

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: "ssid",
    secret: "keyboardcat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, httpOnly: true },
  })
);

app.use(cookieParser());

app.use(cors());

//Routes
/*app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "client/build")));
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});*/
app.use("/api", twitchAuth);

module.exports = app;
