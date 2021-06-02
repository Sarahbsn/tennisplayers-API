const express = require("express");
const app = express();
connection = require("./conf");
const port = process.env.PORT;

const homeRouter = require("./routes/home");
const playersRouter = require("./routes/players");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", homeRouter);
app.use("/players", playersRouter);

connection.connect((err) => {
	if (err) {
		console.error("error connecting to db");
	} else {
		console.log("connected to db");
	}
});

app.listen(port, (err) => {
	if (err) {
		throw new Error("Something bad happened");
	}
	console.log(`server is listening on port ${port}`);
});
