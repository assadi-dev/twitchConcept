const express = require("express");
require("dotenv").config();
const cors = require("cors");
var cookieSession = require("cookie-session");
var cookieParser = require("cookie-parser");
const path = require("path");
const passport = require("passport");
const app = express();
const twitchRout = require("./routes/twitchAuth");

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "authKey",
    keys: ["sessionSecret"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

app.use(
  cors({
    origin: "",
    methods: "GET,OPTIONS,POST,PUT,DELETE",
    credentials: true,
  })
);

//Routes
/*app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "client/build")));
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});*/
app.use("/auth", twitchRout);

module.exports = app;
