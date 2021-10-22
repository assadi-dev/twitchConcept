const express = require("express");
require("dotenv").config();
const cors = require("cors");
var session = require("express-session");
var cookieParser = require("cookie-parser");
const twitchAuth = require("./routes/twitchAuth");
const path = require("path");
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth").OAuth2Strategy;
const twitchStrategy = require("twitch-oauth-passport").Strategy;
const app = express();

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
app.use(passport.initialize());

const scope = [
  "bits:read",
  "analytics:read:games",
  "channel:read:hype_train",
  "channel:read:redemptions",
  "channel:read:subscriptions",
  "user:read:broadcast",
  "user:read:email",
];

var user = {};

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

passport.use(
  new twitchStrategy(
    {
      clientID: process.env.TWITCHTV_CLIENT_ID,
      clientSecret: process.env.TWITCHTV_CLIENT_SECRET,
      callbackURL: process.env.REDIRECT_URI,
      scope: scope,
    },
    function (accessToken, refreshToken, profile, done) {
      user = { accessToken, refreshToken, id: profile.id };
      done(null, user);
    }
  )
);

app.use(cookieParser());

app.use(cors());

//Routes
/*app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "client/build")));
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});*/
//app.use("/api", twitchAuth);
app.get(
  "/auth/provider/twitch/",
  passport.authenticate("twitch", { scope: scope })
);

app.get(
  "/api/twitch/callback",
  passport.authenticate("twitch"),
  function (req, res) {
    console.log(user);
    res.redirect("/");
  }
);

module.exports = app;
