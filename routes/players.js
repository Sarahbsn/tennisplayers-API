const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	connection.query("SELECT * FROM tennis_players", (err, results) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error retrieving players from db.");
		} else {
			res.json(results);
		}
	});
});

module.exports = router;
