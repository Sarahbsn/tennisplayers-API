const express = require("express");
const router = express.Router();

router.get("/date-of-birth", (req, res) => {
	const { max_year } = req.query;
	console.log(max_year);
	let sql = "SELECT * FROM tennis_players WHERE date_of_birth <= ?";
	connection
		.promise()
		.query(sql, [max_year])
		.then(([results]) => {
			res.json(results);
		})
		.catch((error) => {
			console.error(error);
			res.status(500).send("Error retrieving players from db.");
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

router.post("/", (req, res) => {
	const { firstname, lastname, date_of_birth, nationality } = req.body;

	connection
		.promise()
		.query(
			"INSERT INTO tennis_players (firstname, lastname, date_of_birth, nationality) VALUES (?, ?, ?, ?)",
			[firstname, lastname, date_of_birth, nationality]
		)
		.then(([result]) => {
			const createdPlayer = {
				id: result.insertId,
				firstname,
				lastname,
				date_of_birth,
				nationality,
			};
			res.json(createdPlayer);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
});

router.put("/:id", (req, res) => {
	connection
		.promise()
		.query("UPDATE tennis_players SET ? WHERE id = ?", [
			req.body,
			req.params.id,
		])
		.then(([result]) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
});

router.delete("/:id", (req, res) => {
	connection
		.promise()
		.query("DELETE FROM tennis_players WHERE id = ?", [req.params.id])
		.then(([result]) => {
			if (result.affectedRows) res.sendStatus(204);
			else res.sendStatus(404);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
});

module.exports = router;
