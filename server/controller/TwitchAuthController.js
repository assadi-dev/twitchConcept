const passport = require("passport");
const twitchStrategy = require("passport-twitch").Strategy;
const axios = require("axios");

const clientID = "0o12o2olcnvy7akkfjjg1qdrg4k58q";
const clientSecret = "orkjexezxmxaicwj983dq07nc1ejmy";
const redirect_uri = "http://localhost:6500/api/twitch/callback";
const scope = [
  "bits:read",
  "analytics:read:games",
  "channel:read:hype_train",
  "channel:read:redemptions",
  "user:read:broadcast",
  "channel:read:subscriptions",
].join(" ");

const userssid = "userssid";

exports.getCode = (req, res) => {
  res.redirect(
    `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${clientID}&redirect_uri=${redirect_uri}&scope=${scope}`
  );
};

exports.getToken = async (req, res) => {
  const code = req.query.code;
  try {
    await axios
      .post(
        `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`
      )
      .then((docs) => {
        res.cookie(userssid, docs.data).redirect("/");
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.json(error.message);
  }
};

exports.cleanToken = async (req, res) => {
  try {
    res.clearCookie(userssid).redirect("/");
  } catch (error) {
    console.log(error);
  }
};
