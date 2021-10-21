const express = require("express");
const router = express.Router();
const TwitchController = require("../controller/TwitchAuthController");

router.get("/twitch/connect", TwitchController.getCode);
router.get("/twitch/callback", TwitchController.getToken);
router.get("/twitch/authentication", TwitchController.getAuth);
router.get("/twitch/clear", TwitchController.cleanToken);

module.exports = router;
