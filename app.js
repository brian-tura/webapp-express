const express = require('express');
const app = express();
const cors = require('cors')
const moviesRouter = require('./routers/movies');
const dotenv = require('dotenv');
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

dotenv.config();
const port = process.env.SERVER_PORT;

app.use(cors({ origin: process.env.FE_APP }))

app.get("/", (req, res) => {
    res.send("Movie API server")
});

app.use("/api/movies", moviesRouter);

app.use(notFound);

app.use(errorsHandler);

app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta: ${port}`)
});