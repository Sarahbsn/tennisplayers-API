const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("I love tennis");
});

module.exports = router;
