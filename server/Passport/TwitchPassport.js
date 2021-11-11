const passport = require("passport");
const twitchStrategy = require("twitch-oauth-passport").Strategy;

passport.use(
  new twitchStrategy(
    {
      clientID: process.env.TWITCHTV_CLIENT_ID,
      clientSecret: process.env.TWITCHTV_CLIENT_SECRET,
      callbackURL: process.env.REDIRECT_URI,
    },
    function (accessToken, refreshToken, profile, done) {
      user = { accessToken, refreshToken, id: profile.id };
      done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
