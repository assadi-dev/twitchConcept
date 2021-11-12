const router = require("express").Router();
const TwitchCPassport = require("../Passport/TwitchPassport");
const passport = require("passport");

const scope = [
  "bits:read",
  "analytics:read:games",
  "channel:read:hype_train",
  "channel:read:redemptions",
  "channel:read:subscriptions",
  "user:read:broadcast",
  "user:read:email",
];

const CLIENT_REDIRECT = "http://localhost:3000";

router.get(
  "/twitch/connect",
  passport.authenticate("twitch", { scope: scope })
);
router.get("/login/failure", (req, res) => {
  res.status(401).json({ success: false, message: "login faled" });
});
router.get("/login/success", (req, res) => {
  if (req.user) {
    res
      .status(200)
      .json({ success: true, message: "login success", user: req.user });
  }
});

router.get(
  "/twitch/callback",
  passport.authenticate("twitch", {
    successRedirect: CLIENT_REDIRECT,
    failureRedirect: "/login/failure",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_REDIRECT);
});

module.exports = router;
