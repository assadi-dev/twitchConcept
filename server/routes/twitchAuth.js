const express = require("express");
const router = express.Router();
const TwitchController = require("../controller/TwitchAuthController");

router.get("/twitch/token", TwitchController.getCode);
router.get("/twitch/callback", TwitchController.getToken);
router.get("/twitch/clear", TwitchController.cleanToken);

module.exports = router;
