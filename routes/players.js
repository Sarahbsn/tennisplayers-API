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

router.get("/:id", (req, res) => {
	const playerId = req.params.id;
	connection.query(
		"SELECT * FROM tennis_players WHERE id = ?",
		[playerId],
		(err, results) => {
			if (err) {
				res.status(500).send("Error retrieving players from database");
			} else {
				if (results.length) res.status(200).json(results[0]);
				else res.status(404).send("player not found");
			}
		}
	);
});

module.exports = router;
